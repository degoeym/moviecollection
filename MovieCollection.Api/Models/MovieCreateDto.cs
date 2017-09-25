using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using MovieCollection.Api.Entities;

namespace MovieCollection.Api.Models
{
    public class MovieCreateDto
    {
        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public Rating Rating { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }

        [DataType(DataType.Date)]

        public DateTime InventoryDate { get; set; }

        [DataType(DataType.Date)]
        public DateTime UpdatedDate { get; set; } = DateTime.Now;
    }
}
