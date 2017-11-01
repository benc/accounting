package consulting.cochez.accounting.transaction;

import consulting.cochez.accounting.AbstractWebIntegrationTest;
import org.junit.Test;
import org.springframework.http.MediaType;

import static io.restassured.RestAssured.given;
import static javax.servlet.http.HttpServletResponse.SC_OK;
import static org.hamcrest.Matchers.is;

public class TransactionResourceWebIntegrationTest extends AbstractWebIntegrationTest {

    @Test
    public void exposesTransactionResource() {
        given().contentType(MediaType.APPLICATION_JSON_VALUE)
                .when()
                .get("/api/transactions")
                .then()
                .assertThat()
                .statusCode(is(SC_OK));
    }

}