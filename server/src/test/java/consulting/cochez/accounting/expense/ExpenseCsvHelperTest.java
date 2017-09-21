package consulting.cochez.accounting.expense;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import consulting.cochez.accounting.expense.csv.ExpenseCsvHelper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.core.io.ClassPathResource;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class ExpenseCsvHelperTest {

    @Spy
    private CsvMapper csvMapper;

    @InjectMocks
    private ExpenseCsvHelper csvHelper = new ExpenseCsvHelper();

    @Test
    public void parse() throws Exception {
        List<Expense> result = csvHelper.parse(new ClassPathResource("expenses.csv").getInputStream());

        assertThat(result).isNotEmpty().hasSize(2);

        Expense expense = result.get(0);

        assertThat(expense.getInvoiceDate()).isEqualTo(LocalDate.of(2015, 6, 10));
        assertThat(expense.getName()).isEqualTo("iTunes Store");
        assertThat(expense.getAmount()).isEqualByComparingTo(new BigDecimal("1.99"));
        assertThat(expense.getVat()).isEqualTo(21);
        assertThat(expense.getIndexNumber()).isNull();
        assertThat(expense.getCategory()).isEqualTo("software");
        assertThat(expense.getRemark()).isEmpty();
    }

}