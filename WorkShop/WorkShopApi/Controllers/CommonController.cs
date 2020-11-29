using Framework.DB.MSSQL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WorkShopApi.Controllers
{
    [Route("api/[controller]/{serviceName}/{method}")]
    public class CommonController : Controller
    {
        [HttpPost]
        public object Method(
            [FromRoute] string serviceName,
            [FromRoute] string method,
            [FromBody]  object body
        )
        {
            var mapper = new MsSQLMapper(
                "Server=ms-sql-9.in-solve.ru;Database=1gb_x_reutman;User=1gb_reutman;Password=zeefba44iwp;");

            var res = mapper.ExecuteBaseProc(serviceName + '.' + method, body.ToString());

            return Content(res, "application/json");
        }
    }
}
