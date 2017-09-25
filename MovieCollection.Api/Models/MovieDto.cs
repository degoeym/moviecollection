using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;

namespace MovieCollection.Api.Models
{
    public class MovieDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public Rating Rating { get; set; }
        public DateTime ReleaseDate { get; set; }
        public DateTime InventoryDate { get; set; }
        public DateTime UpdatedDate { get; set; }
    }
}
