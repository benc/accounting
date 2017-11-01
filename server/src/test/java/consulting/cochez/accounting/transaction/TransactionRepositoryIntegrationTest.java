package consulting.cochez.accounting.transaction;

import com.github.javafaker.Faker;
import consulting.cochez.accounting.AbstractIntegrationTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

public class TransactionRepositoryIntegrationTest extends AbstractIntegrationTest {

    @Autowired
    private TransactionRepository repository;

    @Test
    public void findsAllExpenses() {
        repository.save(createExpense());
        repository.save(createExpense());
        repository.save(createExpense());
        repository.save(createExpense());
        repository.save(createExpense());

        Iterable<Transaction> expenses = repository.findAll();

        assertThat(expenses).isNotEmpty();
    }

    @Test
    public void createsNewExpense() {
        Long before = repository.count();

        Transaction transaction = repository.save(createExpense());

        Iterable<Transaction> result = repository.findAll();
        assertThat(result).hasSize(before.intValue() + 1).contains(transaction);
    }

    public static Transaction createExpense() {
        Faker faker = new Faker();

        Transaction transaction = new Transaction();
        transaction.setName(faker.company().name());
        transaction.setCategory(new Category().setName(faker.lorem().fixedString(10)));
        transaction.setCurrency("FOO");
        transaction.setRemark(faker.lorem().paragraph());
        transaction.setAmount(new BigDecimal(42));
        transaction.setVat(21);
        transaction.setInvoiceDate(LocalDate.now());

        return transaction;
    }
}