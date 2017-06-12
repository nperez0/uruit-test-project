using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebAPI.Models
{
    public class Game
    {
        [Key]
        public int Id { get; set; }

        public string Winner { get; set; }
    }
}