#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.main;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.indoqa.boot.application.AbstractIndoqaBootApplication;
import com.indoqa.boot.application.AbstractStartupLifecycle;
import ${package}.main.resources.FrontendResource;

public class Application extends AbstractIndoqaBootApplication {

    private static final String APPLICATION_NAME = "${parentArtifactId}";
    private static final String BASE_PACKAGE = Application.class.getPackage().getName();

    public static void main(String[] args) {
        new Application().invoke(new ApplicationStartupLifecycle());
    }

    @Override
    protected String getApplicationName() {
        return APPLICATION_NAME;
    }

    @Override
    protected String[] getComponentScanBasePackages() {
        return new String[] {BASE_PACKAGE};
    }

    private static class ApplicationStartupLifecycle extends AbstractStartupLifecycle {

        @Override
        public void willCreateDefaultSparkRoutes(AnnotationConfigApplicationContext context) {
            // the FrontendResource must be registered before any Spark routes are registered
            context.register(FrontendResource.class);
        }
    }
}
