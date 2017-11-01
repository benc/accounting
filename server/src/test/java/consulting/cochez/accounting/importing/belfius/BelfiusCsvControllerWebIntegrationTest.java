package consulting.cochez.accounting.importing.belfius;

import consulting.cochez.accounting.AbstractWebIntegrationTest;
import org.junit.Test;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;

import static io.restassured.RestAssured.given;
import static javax.servlet.http.HttpServletResponse.SC_OK;
import static org.hamcrest.Matchers.is;

public class BelfiusCsvControllerWebIntegrationTest extends AbstractWebIntegrationTest {

    @Test
    public void canImportCsv() throws Exception {
        given().contentType(MediaType.MULTIPART_FORM_DATA_VALUE)
                .multiPart("csv", new ClassPathResource("belfius-mock.csv").getFile())
                .when()
                .post("/api/transactions/belfius/import")
                .then()
                .assertThat()
                .statusCode(is(SC_OK));
    }

}