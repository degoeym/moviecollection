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
        public async Task<IActionResult> GetMovies()
        {
            var movies = await _moviesRepository.GetMovies();
            var results = Mapper.Map<IEnumerable<MovieDto>>(movies);
            return Ok(results);
        }

        // GET api/values/5
        [HttpGet("{id}", Name = "GetMovie")]
        public async Task<IActionResult> GetMovie(int id)
        {
            var movie = await _moviesRepository.GetMovie(id);
            if (movie == null)
            {
                return NotFound();
            }

            var result = Mapper.Map<MovieDto>(movie);
            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> AddMovie([FromBody] MovieCreateDto movie)
        {
            if (movie == null)
            {
                return BadRequest();
            }

            if (string.Equals(movie.Title, movie.Description))
            {
                ModelState.AddModelError("Description", "Description and title cannot be the same.");
            }

            if (await _moviesRepository.MovieExists(movie.Title))
            {
                ModelState.AddModelError("Title", "Movie by that title already exists.");
            }

            movie.InventoryDate = DateTime.Now;
            movie.UpdatedDate = DateTime.Now;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var newMovie = Mapper.Map<Movie>(movie);
            _moviesRepository.AddMovie(newMovie);
            var saved = await _moviesRepository.Save();

            if (!saved)
            {
                return StatusCode(500, "Issue adding movie to collection. Please try again.");
            }

            var movieToReturn = Mapper.Map<MovieDto>(newMovie);

            return CreatedAtRoute("GetMovie", new { id = movieToReturn.Id }, movieToReturn);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMovie(int id, [FromBody] MovieUpdateDto movie)
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

            var movieExists = await _moviesRepository.MovieExists(id);

            if (!movieExists)
            {
                return NotFound();
            }

            var movieToUpdate = await _moviesRepository.GetMovie(id);
            if (movieToUpdate == null)
            {
                return NotFound();
            }

            movie.UpdatedDate = DateTime.Now;
            Mapper.Map(movie, movieToUpdate);
            var saved = await _moviesRepository.Save();

            if (!saved)
            {
                return StatusCode(500, "Issue updating movie. Please try again.");
            }

            return NoContent();
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PartiallyUpdateMovie(int id, [FromBody] JsonPatchDocument<MovieUpdateDto> patch)
        {
            if (patch == null)
            {
                return BadRequest();
            }

            var movieExists = await _moviesRepository.MovieExists(id);

            if (!movieExists)
            {
                return NotFound();
            }

            var movieToUpdate = await _moviesRepository.GetMovie(id);
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

            movieToPatch.UpdatedDate = DateTime.Now;
            TryValidateModel(movieToPatch);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Mapper.Map(movieToPatch, movieToUpdate);
            var saved = await _moviesRepository.Save();

            if (!saved)
            {
                return StatusCode(500, "Problem updating movie. Please try again.");
            }

            return NoContent();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var movieExists = await _moviesRepository.MovieExists(id);
            if (!movieExists)
            {
                return NotFound();
            }

            var movieToDelete = await _moviesRepository.GetMovie(id);
            if (movieToDelete == null)
            {
                return NotFound();
            }

            _moviesRepository.DeleteMovie(movieToDelete);
            var saved = await _moviesRepository.Save();
            if (!saved)
            {
                return StatusCode(500, "Could not delete movie. Please try again.");
            }

            return NoContent();
        }
    }
}
