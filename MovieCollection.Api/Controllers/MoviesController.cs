using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using MovieCollection.Api.Entities;
using MovieCollection.Api.Models;
using MovieCollection.Api.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MovieCollection.Api.Controllers
{
    [Route("api/movies")]
    public class MoviesController : Controller
    {
        private IMoviesRepository _moviesRepository;

        public MoviesController(IMoviesRepository moviesRepository)
        {
            _moviesRepository = moviesRepository;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult GetMovies()
        {
            var movies = _moviesRepository.GetMovies();
            var results = Mapper.Map<IEnumerable<MovieDto>>(movies);
            return Ok(results);
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetMovie")]
        public IActionResult GetMovie(int id)
        {
            var movie = _moviesRepository.GetMovie(id);
            if (movie == null)
            {
                return NotFound();
            }

            var result = Mapper.Map<MovieDto>(movie);
            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public IActionResult AddMovie([FromBody] MovieCreateDto movie)
        {
            if (movie == null)
            {
                return BadRequest();
            }

            if (string.Equals(movie.Title, movie.Description))
            {
                ModelState.AddModelError("Description", "Description and title cannot be the same.");
            }

            if (_moviesRepository.MovieExists(movie.Title))
            {
                ModelState.AddModelError("Title", "Movie by that title already exists.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(movie);
            }

            var newMovie = Mapper.Map<Movie>(movie);
            _moviesRepository.AddMovie(newMovie);

            if (!_moviesRepository.Save())
            {
                return StatusCode(500, "Issue adding movie to collection. Please try again.");
            }

            var movieToReturn = Mapper.Map<MovieDto>(newMovie);

            return CreatedAtRoute("GetMovie", new { id = movieToReturn.Id }, movieToReturn);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult UpdateMovie(int id, [FromBody] MovieUpdateDto movie)
        {
            if (movie == null)
            {
                return BadRequest();
            }

            if (string.Equals(movie.Description, movie.Title))
            {
                ModelState.AddModelError("Description", "Description and title cannot be the same.");
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (!_moviesRepository.MovieExists(id))
            {
                return NotFound();
            }

            var movieToUpdate = _moviesRepository.GetMovie(id);
            if (movieToUpdate == null)
            {
                return NotFound();
            }

            Mapper.Map(movie, movieToUpdate);

            if (!_moviesRepository.Save())
            {
                return StatusCode(500, "Issue updating movie. Please try again.");
            }

            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult PartiallyUpdateMovie(int id, [FromBody] JsonPatchDocument<MovieUpdateDto> patch)
        {
            if (patch == null)
            {
                return BadRequest();
            }

            if (!_moviesRepository.MovieExists(id))
            {
                return NotFound();
            }

            var movieToUpdate = _moviesRepository.GetMovie(id);
            if (movieToUpdate == null)
            {
                return NotFound();
            }

            var movieToPatch = Mapper.Map<MovieUpdateDto>(movieToUpdate);
            patch.ApplyTo(movieToPatch, ModelState);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);

            }

            if (string.Equals(movieToPatch.Description, movieToPatch.Title))
            {
                ModelState.AddModelError("Description", "Description and title cannot be the same.");
            }

            TryValidateModel(movieToPatch);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Mapper.Map(movieToPatch, movieToUpdate);
            if (!_moviesRepository.Save())
            {
                return StatusCode(500, "Problem updating movie. Please try again.");
            }

            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (!_moviesRepository.MovieExists(id))
            {
                return NotFound();
            }

            var movieToDelete = _moviesRepository.GetMovie(id);
            if (movieToDelete == null)
            {
                return NotFound();
            }

            _moviesRepository.DeleteMovie(movieToDelete);
            if (!_moviesRepository.Save())
            {
                return StatusCode(500, "Could not delete movie. Please try again.");
            }

            return NoContent();
        }
    }
}
