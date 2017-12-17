#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.main.resources;

import javax.annotation.PostConstruct;

import com.indoqa.boot.proxy.AbstractProxyResourceBase;

public class WordsProxyResource extends AbstractProxyResourceBase {

    @PostConstruct
    public void mount() {
        this.proxy("/words", "http://api.wordnik.com");
    }
}
