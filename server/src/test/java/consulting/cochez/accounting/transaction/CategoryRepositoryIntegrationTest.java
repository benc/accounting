package consulting.cochez.accounting.transaction;

import com.github.javafaker.Faker;
import consulting.cochez.accounting.AbstractIntegrationTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.assertj.core.api.Assertions.assertThat;

public class CategoryRepositoryIntegrationTest extends AbstractIntegrationTest {

    @Autowired
    private CategoryRepository repository;

    @Test
    public void findsAllExpenses() {
        repository.save(createCategory());
        repository.save(createCategory());
        repository.save(createCategory());
        repository.save(createCategory());
        repository.save(createCategory());

        Iterable<Category> expenses = repository.findAll();

        assertThat(expenses).isNotEmpty();
    }

    public static Category createCategory() {
        Faker faker = new Faker();

        Category category = new Category();
        category.setName(faker.gameOfThrones().dragon());

        return category;
    }
}