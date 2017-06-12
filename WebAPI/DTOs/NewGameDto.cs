using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.DTOs
{
    public class NewGameDTO
    {
        [JsonProperty("winner")]
        public string Winner { get; set; }
    }
}