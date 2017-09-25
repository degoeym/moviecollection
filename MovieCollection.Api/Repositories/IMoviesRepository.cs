using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;

namespace MovieCollection.Api.Repositories
{
    public interface IMoviesRepository
    {
        bool MovieExists(int id);
        bool MovieExists(string title);
        IEnumerable<Movie> GetMovies();
        Movie GetMovie(int id);
        void AddMovie(Movie movie);
        void DeleteMovie(Movie movie);
        bool Save();
    }
}
