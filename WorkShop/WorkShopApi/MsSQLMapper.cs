using System.Data.SqlClient;

namespace Framework.DB.MSSQL
{
    public class MsSQLMapper  
    {
        string _connectionString;
        public MsSQLMapper(string connectionString)
        {
            _connectionString = connectionString;
        }
 
        public string ExecuteBaseProc(string name, string js)
        {
            using (var sql = new SqlConnection(_connectionString))
            {
                sql.Open();
                using (var cmd = new SqlCommand(name, sql))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.Add("js", System.Data.SqlDbType.NVarChar, -1).Value = js;
                    cmd.Parameters.Add("rp", System.Data.SqlDbType.NVarChar, -1).Direction = System.Data.ParameterDirection.Output;

                    cmd.ExecuteNonQuery();                       
                    return cmd.Parameters["rp"].Value.ToString();
                }
            }           
        }
    }

}
