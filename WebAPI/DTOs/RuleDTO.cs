﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebAPI.DTOs
{
    public class RuleDTO
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("move")]
        public string Move { get; set; }

        [JsonProperty("kills")]
        public string Kills { get; set; }
    }
}