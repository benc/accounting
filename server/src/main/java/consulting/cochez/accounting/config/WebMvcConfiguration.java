package consulting.cochez.accounting.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class WebMvcConfiguration {
    @Bean
    public CorsFilter corsFilter() {
        return new CorsFilter(request -> {
            CorsConfiguration corsConfiguration = new CorsConfiguration().applyPermitDefaultValues();
            corsConfiguration.addAllowedMethod(HttpMethod.PUT.name());
            corsConfiguration.addAllowedMethod(HttpMethod.DELETE.name());
            return corsConfiguration;
        });
    }
}
