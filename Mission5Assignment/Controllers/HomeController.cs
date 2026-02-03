using Microsoft.AspNetCore.Mvc;

namespace Mission5Assignment.Controllers;

public class HomeController : Controller
{
    // GET
    public IActionResult Index()
    {
        return View();
    }
    
    public IActionResult Pricing()
    {
        return View();
    }
}