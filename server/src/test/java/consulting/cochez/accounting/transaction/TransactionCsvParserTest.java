package consulting.cochez.accounting.transaction;

import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import consulting.cochez.accounting.transaction.csv.TransactionCsvParser;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.core.io.ClassPathResource;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(MockitoJUnitRunner.class)
public class TransactionCsvParserTest {

    @Spy
    private CsvMapper csvMapper;

    @InjectMocks
    private TransactionCsvParser csvHelper = new TransactionCsvParser();

    @Test
    public void parse() throws Exception {
        List<Transaction> result = csvHelper.parse(new ClassPathResource("expenses.csv").getInputStream());

        assertThat(result).isNotEmpty().hasSize(2);

        Transaction transaction = result.get(0);

        assertThat(transaction.getInvoiceDate()).isEqualTo(LocalDate.of(2015, 6, 10));
        assertThat(transaction.getName()).isEqualTo("iTunes Store");
        assertThat(transaction.getAmount()).isEqualByComparingTo(new BigDecimal("1.99"));
        assertThat(transaction.getVat()).isEqualTo(21);
        assertThat(transaction.getIndexNumber()).isNull();
        assertThat(transaction.getCategory()).isNotNull();
        assertThat(transaction.getCategory().getName()).isEqualTo("software");
        assertThat(transaction.getRemark()).isEmpty();
    }

}