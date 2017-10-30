package consulting.cochez.accounting.importing.belfius;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import consulting.cochez.accounting.expense.Expense;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.springframework.core.io.ClassPathResource;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

public class BelfiusCsvParserTest {

    @Spy
    private CsvMapper csvMapper;

    @InjectMocks
    private BelfiusCsvParser parser = new BelfiusCsvParser();

    @Test
    public void parse() throws Exception {
        List<Expense> result = parser.parse(new ClassPathResource("belfius-mock.csv").getInputStream());

        assertThat(result).isNotEmpty().hasSize(1);

        Expense expense = result.get(0);

        assertThat(expense.getName()).isEqualTo("Le Foo");
        assertThat(expense.getAmount()).isEqualByComparingTo(new BigDecimal("42.0"));
        assertThat(expense.getVat()).isNull();
        assertThat(expense.getIndexNumber()).isNull();
        assertThat(expense.getCurrency()).isEqualTo("EUR");
        assertThat(expense.getPaymentDate()).isEqualTo(LocalDate.of(2017, 9, 21));
//        assertThat(expense.getCategory()).isEqualTo("software");
        assertThat(expense.getRemark()).isNullOrEmpty();
    }

}