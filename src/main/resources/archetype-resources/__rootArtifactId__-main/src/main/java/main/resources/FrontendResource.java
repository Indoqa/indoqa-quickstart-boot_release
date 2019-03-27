#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.main.resources;

import javax.annotation.PostConstruct;

import com.indoqa.boot.html.react.AbstractCreateReactAppResourceBase;

public class FrontendResource extends AbstractCreateReactAppResourceBase {

    private static final String FRONTEND_FILESYSTEM_LOCATION = "../${parentArtifactId}-frontend/target/webpack/";
    private static final String FRONTEND_CLASSPATH_LOCATION = "/${parentArtifactId}-frontend";

    @PostConstruct
    public void mount() {
        this.html(FRONTEND_CLASSPATH_LOCATION, FRONTEND_FILESYSTEM_LOCATION);
    }
}
