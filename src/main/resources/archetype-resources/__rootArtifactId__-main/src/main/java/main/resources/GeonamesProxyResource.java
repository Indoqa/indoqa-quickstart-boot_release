#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.main.resources;

import javax.annotation.PostConstruct;
import javax.inject.Named;

import com.indoqa.boot.proxy.AbstractProxyResourceBase;

@Named
public class GeonamesProxyResource extends AbstractProxyResourceBase {

    @PostConstruct
    public void mount() {
        this.proxy("/geonames", "http://api.geonames.org");
    }
}
