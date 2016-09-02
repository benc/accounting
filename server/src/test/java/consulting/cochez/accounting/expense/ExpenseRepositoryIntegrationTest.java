package consulting.cochez.accounting.expense;

import com.github.javafaker.Faker;
import consulting.cochez.accounting.AbstractIntegrationTest;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

public class ExpenseRepositoryIntegrationTest extends AbstractIntegrationTest {

    @Autowired
    ExpenseRepository repository;

    @Test
    public void findsAllExpenses() {
        repository.save(createExpense());
        repository.save(createExpense());
        repository.save(createExpense());
        repository.save(createExpense());
        repository.save(createExpense());

        Iterable<Expense> expenses = repository.findAll();

        assertThat(expenses).isNotEmpty();
    }

    @Test
    public void createsNewExpense() {
        Long before = repository.count();

        Expense expense = repository.save(createExpense());

        Iterable<Expense> result = repository.findAll();
        assertThat(result).hasSize(before.intValue() + 1).contains(expense);
    }

    public static Expense createExpense() {
        Faker faker = new Faker();

        Expense expense = new Expense();
        expense.setName(faker.company().name());
        expense.setCategory(faker.lorem().fixedString(10));
        expense.setCurrency("FOO");
        expense.setRemark(faker.lorem().paragraph());
        expense.setAmount(new BigDecimal(42));
        expense.setVat(21);
        expense.setInvoiceDate(LocalDate.now());

        return expense;
    }
}