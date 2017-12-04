using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for BookService
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class BookService : System.Web.Services.WebService
{

    [WebMethod]
    public void getbook()
    {
        List<Book> listBook = new List<Book>();
        string cs = ConfigurationManager.ConnectionStrings["DBCS"].ConnectionString;
        using (SqlConnection con = new SqlConnection(cs))
        {
            SqlCommand cmd = new SqlCommand("Select * from Book_Data", con);
            con.Open();
            SqlDataReader rdr = cmd.ExecuteReader();
            while (rdr.Read())
            {
                Book book = new Book();
                book.id = Convert.ToInt32(rdr["Book_Id"]);
                book.bookname = rdr["Book_Name"].ToString();
                book.date = rdr["Book_Date"].ToString();
                book.edition = rdr["Book_Edition"].ToString();
                book.cost = Convert.ToInt32(rdr["Book_Cost"]);
                book.username = rdr["Per_Name"].ToString();
                book.useremail = rdr["Per_Email"].ToString();
                listBook.Add(book);
            }

        }



        JavaScriptSerializer js = new JavaScriptSerializer();
        Context.Response.Write(js.Serialize(listBook));



    }

}
