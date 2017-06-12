namespace WebAPI.Migrations
{
    using Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<WebAPI.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = true;
        }

        protected override void Seed(WebAPI.Models.ApplicationDbContext context)
        {
            context.Rules.AddOrUpdate(r => r.Id, new Rule { Move = "Paper", Kills = "Rock" });
            context.Rules.AddOrUpdate(r => r.Id, new Rule { Move = "Rock", Kills = "Scissors" });
            context.Rules.AddOrUpdate(r => r.Id, new Rule { Move = "Scissors", Kills = "Paper" });
        }
    }
}
