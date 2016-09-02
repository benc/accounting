package consulting.cochez.accounting.expense;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.core.io.ClassPathResource;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class ExpenseCsvHelperTest {

    private ExpenseCsvHelper csvHelper = new ExpenseCsvHelper();

    @Test
    public void parse() throws Exception {
        List<Expense> actual = csvHelper.parse(new ClassPathResource("expenses.csv").getInputStream());

        assertThat(actual).isNotEmpty().hasSize(2);
    }

    @Test
    public void parseExpense() throws Exception {
        Expense expense = csvHelper.parseExpense(new String[]{"10/06/2015", "iTunes Store", "1,99", "21%", " - ", "1,99", "", "software", ""});
        assertThat(expense.getInvoiceDate()).isEqualByComparingTo(LocalDate.of(2015, 6, 10));
        assertThat(expense.getName()).isEqualTo("iTunes Store");
        assertThat(expense.getAmount()).isEqualByComparingTo(new BigDecimal("1.99"));
        assertThat(expense.getVat()).isEqualTo(21);
        assertThat(expense.getIndexNumber()).isNull();
        assertThat(expense.getCategory()).isEqualTo("software");
        assertThat(expense.getRemark()).isEmpty();
    }

}