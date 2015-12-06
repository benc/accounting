package consulting.cochez.accounting;

import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Accounting {
    @Bean
    public Jdk8Module javaOptionalModule() {
        return new Jdk8Module();
    }

    public static void main(String[] args) {
        SpringApplication.run(Accounting.class, args);
    }
}
