#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.main.resources;

import javax.annotation.PostConstruct;

import com.indoqa.boot.html.react.AbstractReactResourceBase;

public class FrontendResource extends AbstractReactResourceBase {

    public static final String FRONTEND_FILESYSTEM_LOCATION = "../${parentArtifactId}-frontend/target";
    private static final String FRONTEND_CLASSPATH_LOCATION = "/${parentArtifactId}-frontend";

    @PostConstruct
    public void mount() {
        this.html("/", FRONTEND_CLASSPATH_LOCATION, FRONTEND_FILESYSTEM_LOCATION);
    }
}
