package consulting.cochez.accounting;

import org.junit.Before;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.WebIntegrationTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.hateoas.LinkDiscoverer;
import org.springframework.hateoas.LinkDiscoverers;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultMatcher;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.Matchers.nullValue;
import static org.junit.Assert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = Accounting.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public abstract class AbstractWebIntegrationTest {

    protected @Autowired WebApplicationContext context;
    protected @Autowired LinkDiscoverers links;
    protected MockMvc mvc;

    @Before
    public void setUp() {
        mvc = MockMvcBuilders.webAppContextSetup(context).build();
    }

    /**
     * Creates a {@link ResultMatcher} that checks for the presence of a link with the given rel.
     *
     * @param rel
     * @return
     */
    protected ResultMatcher linkWithRelIsPresent(final String rel) {
        return new LinkWithRelMatcher(rel, true);
    }

    /**
     * Creates a {@link ResultMatcher} that checks for the non-presence of a link with the given rel.
     *
     * @param rel
     * @return
     */
    protected ResultMatcher linkWithRelIsNotPresent(String rel) {
        return new LinkWithRelMatcher(rel, false);
    }

    protected LinkDiscoverer getDiscovererFor(MockHttpServletResponse response) {
        return links.getLinkDiscovererFor(response.getContentType());
    }

    private class LinkWithRelMatcher implements ResultMatcher {

        private final String rel;
        private final boolean present;

        public LinkWithRelMatcher(String rel, boolean present) {
            this.rel = rel;
            this.present = present;
        }

        @Override
        public void match(MvcResult result) throws Exception {

            MockHttpServletResponse response = result.getResponse();
            String content = response.getContentAsString();
            LinkDiscoverer discoverer = links.getLinkDiscovererFor(response.getContentType());

            assertThat(discoverer.findLinkWithRel(rel, content), is(present ? notNullValue() : nullValue()));
        }
    }
}