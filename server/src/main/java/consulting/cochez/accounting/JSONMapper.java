package consulting.cochez.accounting;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.stereotype.Component;

@Component
public class JSONMapper extends ObjectMapper {

    public JSONMapper(){
        configureJavaTime();
    }

    private void configureJavaTime() {
        this.registerModule(new JavaTimeModule());
    }
}
