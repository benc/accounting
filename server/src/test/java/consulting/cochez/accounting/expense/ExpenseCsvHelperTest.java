package consulting.cochez.accounting.expense;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;
import org.springframework.core.io.ClassPathResource;

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

}