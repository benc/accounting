package consulting.cochez.accounting.expense;

import consulting.cochez.accounting.AbstractWebIntegrationTest;
import org.junit.Test;
import org.springframework.hateoas.MediaTypes;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class ExpenseResourceIntegrationTest extends AbstractWebIntegrationTest {

    @Test
    public void exposesOrdersResourceViaRootResource() throws Exception {
        mvc.perform(get("/api/expenses"))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaTypes.HAL_JSON + ";charset=UTF-8"));
    }
}