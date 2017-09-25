using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;

namespace MovieCollection.Api
{
    public static class SeedMovieData
    {
        public static void SeedMovieDatabase(this MovieCollectionContext context)
        {
            if (context.Movies.Any()) return;

            var movies = new List<Movie>()
            {
                new Movie()
                {
                    Title = "Jurassic Park",
                    Description = "Dinosaurs run amok on an island.",
                    Rating = Rating.PG13,
                    ReleaseDate = Convert.ToDateTime("06/11/1993"),
                    InventoryDate = DateTime.Now,
                    UpdatedDate = DateTime.Now
                }, 
                new Movie()
                {
                    Title = "Star Wars",
                    Description = "A long time ago, in a galaxy far, far away....",
                    Rating = Rating.PG,
                    ReleaseDate = Convert.ToDateTime("05/25/1977"),
                    InventoryDate = DateTime.Now,
                    UpdatedDate = DateTime.Now
                },
                new Movie()
                {
                    Title = "Taxi Driver",
                    Description = "An NYC cabbie turns violent.",
                    Rating = Rating.R,
                    ReleaseDate = Convert.ToDateTime("02/08/1976"),
                    InventoryDate = DateTime.Now,
                    UpdatedDate = DateTime.Now
                }
            };

            context.Movies.AddRange(movies);
            context.SaveChanges();
        }
    }
}
