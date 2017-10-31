package consulting.cochez.accounting.importing.belfius;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import consulting.cochez.accounting.transaction.Transaction;
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
        List<Transaction> result = parser.parse(new ClassPathResource("belfius-mock.csv").getInputStream());

        assertThat(result).isNotEmpty().hasSize(1);

        Transaction transaction = result.get(0);

        assertThat(transaction.getName()).isEqualTo("Le Foo");
        assertThat(transaction.getAmount()).isEqualByComparingTo(new BigDecimal("42.0"));
        assertThat(transaction.getVat()).isNull();
        assertThat(transaction.getIndexNumber()).isNull();
        assertThat(transaction.getCurrency()).isEqualTo("EUR");
        assertThat(transaction.getPaymentDate()).isEqualTo(LocalDate.of(2017, 9, 21));
//        assertThat(transaction.getCategory()).isEqualTo("software");
        assertThat(transaction.getRemark()).isNullOrEmpty();
    }

}