using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication2.Pages
{
    public class GuidingPrinciplesModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;

        public GuidingPrinciplesModel(ILogger<IndexModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {

        }
    }
}