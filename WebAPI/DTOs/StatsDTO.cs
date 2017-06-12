using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.DTOs
{
    public class StatsDTO
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("wins")]
        public int Wins { get; set; }
    }
}