using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;

namespace MovieCollection.Api.Repositories
{
    public interface IMoviesRepository
    {
        Task<bool> MovieExists(int id);
        Task<bool> MovieExists(string title);
        Task<IEnumerable<Movie>> GetMovies();
        Task<Movie> GetMovie(int id);
        void AddMovie(Movie movie);
        void DeleteMovie(Movie movie);
        Task<bool> Save();
    }
}
