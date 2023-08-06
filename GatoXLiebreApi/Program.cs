using GatoXLiebreApi;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);



builder.Configuration.AddJsonFile("appsettings.json");

var secretkey = builder.Configuration.GetSection("settings").GetSection("secretkey").ToString();

var keyBytes = Encoding.UTF8.GetBytes(secretkey);

builder.Services.AddDbContext<AppDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("defaultConnection"));
});

builder.Services.AddAuthentication(
    config =>
    {
        config.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        config.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

    }
    )
    .AddJwtBearer(options =>
    {
        options.RequireHttpsMetadata = true;
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(keyBytes),
            ValidateIssuer = false,
            ValidateAudience = false,
        };
    }


    );

    
builder.Services.AddControllers();



var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthentication();

app.UseAuthorization();

app.MapControllers();




app.Run();
