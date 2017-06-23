#set( $symbol_pound = '#' )
#set( $symbol_dollar = '$' )
#set( $symbol_escape = '\' )
package ${package}.it;

import static com.indoqa.system.test.tools.JarRunnerUtils.*;
import static org.slf4j.LoggerFactory.getLogger;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.ClassRule;
import org.junit.Test;
import org.slf4j.Logger;

import com.indoqa.system.test.tools.JarRunner;
import com.indoqa.system.test.tools.JarRunnerBuilder;

public class SimpleIT {

    private static final Logger LOGGER = getLogger(SimpleIT.class);
    private static final int PORT = 25001;
    private static final String BASE_URL = "http://localhost:" + PORT;
    private static final String CHECK_ADDRESS = BASE_URL + "/system-info";
    private static final Path RUNNABLE_DIR = Paths.get("../${parentArtifactId}-main/target/");
    private static final Path RUNNABLE_JAR = searchJavaRunnable(RUNNABLE_DIR, endsWithRunnableJar());

    @ClassRule
    public static final JarRunner JAR_RUNNER = new JarRunnerBuilder(RUNNABLE_JAR)
        .setCheckAdress(CHECK_ADDRESS)
        .addSysProp("port", PORT)
        .addSysProp("log-path", "./target/logs")
        .build();

    @Test
    public void emptyTest() {
        LOGGER.info("SimpleIT passed.");
    }
}
