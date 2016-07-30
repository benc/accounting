package consulting.cochez.accounting.expense;

import consulting.cochez.accounting.AbstractWebIntegrationTest;
import org.junit.Test;
import org.springframework.http.MediaType;

import static io.restassured.RestAssured.given;
import static javax.servlet.http.HttpServletResponse.SC_OK;
import static org.hamcrest.Matchers.is;

public class ExpenseResourceWebIntegrationTest extends AbstractWebIntegrationTest {

    @Test
    public void exposesOrdersResourceViaRootResource() throws Exception {
        given().contentType(MediaType.APPLICATION_JSON.toString())
                .when()
                .get("/api/expenses")
                .then()
                .assertThat()
                .statusCode(is(SC_OK));
    }
}