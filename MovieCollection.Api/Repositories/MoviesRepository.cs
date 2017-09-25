using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;

namespace MovieCollection.Api.Repositories
{
    public class MoviesRepository : IMoviesRepository
    {
        private MovieCollectionContext _context;

        public MoviesRepository(MovieCollectionContext context)
        {
            _context = context;
        }

        public void AddMovie(Movie movie)
        {
            _context.Movies.Add(movie);
        }

        public void DeleteMovie(Movie movie)
        {
            _context.Movies.Remove(movie);
        }

        public Movie GetMovie(int id)
        {
            return _context.Movies.FirstOrDefault(m => m.Id == id);
        }

        public IEnumerable<Movie> GetMovies()
        {
            return _context.Movies.OrderBy(m => m.Title).ToList();
        }

        public bool MovieExists(int id)
        {
            return _context.Movies.Any(m => m.Id == id);
        }

        public bool MovieExists(string title)
        {
            return _context.Movies.Any(m => m.Title.ToLower() == title.ToLower());
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}
