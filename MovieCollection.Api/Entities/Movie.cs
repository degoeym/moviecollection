using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace MovieCollection.Api.Entities
{
    public class Movie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

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
        public DateTime UpdatedDate { get; set; }
    }

    public enum Rating
    {
        [EnumMember(Value = "N/R")]
        Unknown = -1,
        G = 1,
        PG = 2,
        [EnumMember(Value = "PG-13")]
        PG13 = 3,
        R = 4,
        [EnumMember(Value = "NC-17")]
        NC17 = 5,
        X = 6
    }
}
