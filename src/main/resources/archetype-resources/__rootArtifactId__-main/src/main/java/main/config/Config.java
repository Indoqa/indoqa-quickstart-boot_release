#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.main.config;

import ${package}.main.resources.GeonamesProxyResource;
import ${package}.main.resources.TestJsonResource;
import ${package}.main.resources.WordsProxyResource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:/application.properties")
public class Config {

    @Bean
    public GeonamesProxyResource geonamesProxyResource() {
        return new GeonamesProxyResource();
    }

    @Bean
    public WordsProxyResource wordsProxyResource() {
        return new WordsProxyResource();
    }

    @Bean
    public TestJsonResource testJsonResource() {
        return new TestJsonResource();
    }
}
