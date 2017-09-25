using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MovieCollection.Api.Entities
{
    public class MovieCollectionContext : DbContext
    {

        public MovieCollectionContext(DbContextOptions<MovieCollectionContext> options)
            : base(options)
        {
            Database.Migrate();
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
