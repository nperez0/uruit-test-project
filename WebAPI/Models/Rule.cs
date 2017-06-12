using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Rule
    {
        [Key]
        public int Id { get; set; }
        public string Move { get; set; }
        public string Kills { get; set; }
    }
}