package consulting.cochez.accounting;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@SpringBootTest(classes = Accounting.class)
@Transactional
@ActiveProfiles("test")
public abstract class AbstractIntegrationTest  extends AbstractTransactionalJUnit4SpringContextTests {
    @PersistenceContext
    private EntityManager entityManager;

    protected void flushSession() {
        entityManager.flush();
    }

    protected void clearSession() {
        entityManager.clear();
    }

    protected void flushAndClearSession() {
        flushSession();
        clearSession();
    }
}
