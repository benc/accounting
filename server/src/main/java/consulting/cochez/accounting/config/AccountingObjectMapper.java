package consulting.cochez.accounting.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.stereotype.Component;

// TODO better integration with spring boot configuration?
@Component
public class AccountingObjectMapper extends ObjectMapper {
    public AccountingObjectMapper(){
        configureJavaTime();
    }

    private void configureJavaTime() {
        this.registerModule(new JavaTimeModule());
    }
}
