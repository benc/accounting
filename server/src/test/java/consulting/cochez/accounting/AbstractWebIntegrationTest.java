package consulting.cochez.accounting;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.config.ObjectMapperConfig;
import io.restassured.config.RestAssuredConfig;
import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.nio.charset.StandardCharsets;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
import static org.junit.Assert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = AccountingApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public abstract class AbstractWebIntegrationTest {

    @Value("${local.server.port}")
    private int serverPort;

    @Value("${server.servlet.context-path}")
    private String contextPath;

    @Autowired
    private ObjectMapper mapper;

    @Before
    public void setup() throws Exception {
        RestAssured.port = serverPort;
        RestAssured.basePath = contextPath;
        RestAssured.config = RestAssuredConfig.config()
                .objectMapperConfig(new ObjectMapperConfig().jackson2ObjectMapperFactory((aClass, s) -> mapper))
                .encoderConfig(RestAssuredConfig.config().getEncoderConfig().defaultContentCharset(StandardCharsets.UTF_8));
    }

}