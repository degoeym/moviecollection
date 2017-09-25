using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MovieCollection.Api.Entities;
using MovieCollection.Api.Models;
using MovieCollection.Api.Repositories;

namespace MovieCollection.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            // setup movie collection db context
            var connectionString = Configuration["connectionStrings:movieCollectionDbConnectionString"];
            services.AddDbContext<MovieCollectionContext>(o => o.UseSqlServer(connectionString));

            // inject movie repo
            services.AddScoped<IMoviesRepository, MoviesRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, 
            MovieCollectionContext movieCollectionContext)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // seed movie db
            movieCollectionContext.SeedMovieDatabase();

            // using AutoMapper to quickly and easily map entites to DTOs
            AutoMapper.Mapper.Initialize(config =>
            {
                config.CreateMap<Entities.Movie, Models.MovieDto>();
                config.CreateMap<Models.MovieDto, Entities.Movie>();
                config.CreateMap<MovieCreateDto, Movie>();
                config.CreateMap<MovieUpdateDto, Movie>();
                config.CreateMap<Movie, MovieUpdateDto>();
            });

            app.UseMvc();
        }
    }
}
