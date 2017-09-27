using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;
using Microsoft.EntityFrameworkCore;

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

        public async Task<Movie> GetMovie(int id)
        {
            return await _context.Movies.FirstOrDefaultAsync(m=> m.Id == id);
        }

        public async Task<IEnumerable<Movie>> GetMovies()
        {
            return await _context.Movies.OrderBy(m => m.Title).ToListAsync();
        }

        public async Task<bool> MovieExists(int id)
        {
            return await _context.Movies.AnyAsync(m => m.Id == id);
        }

        public async Task<bool> MovieExists(string title)
        {
            return await _context.Movies.AnyAsync(m => m.Title.ToLower() == title.ToLower());
        }

        public async Task<bool> Save()
        {
            return (await _context.SaveChangesAsync() >= 0);
        }
    }
}
