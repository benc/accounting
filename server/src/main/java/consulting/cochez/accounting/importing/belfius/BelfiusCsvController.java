package consulting.cochez.accounting.importing.belfius;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import consulting.cochez.accounting.expense.Expense;
import consulting.cochez.accounting.expense.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import static java.lang.String.format;

@RestController
public class BelfiusCsvController {

    private final BelfiusCsvParser belfiusCsvParser;
    private final ExpenseRepository expenseRepository;

    @Autowired
    public BelfiusCsvController(BelfiusCsvParser belfiusCsvParser, ExpenseRepository expenseRepository) {
        this.belfiusCsvParser = belfiusCsvParser;
        this.expenseRepository = expenseRepository;
    }

    /**
     * Import CSV data. Header names are used to map the fields to Expense.
     *
     * @param csv csv file.
     * @return result message
     */
    @RequestMapping(
            value = "/api/expenses/belfius/import",
            method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String importCsv(@RequestPart("csv") MultipartFile csv) {
        try (InputStream csvInputStream = csv.getInputStream()) {
            List<Expense> expenses = belfiusCsvParser.parse(csvInputStream);
            expenseRepository.saveAll(expenses);

            return new ObjectNode(JsonNodeFactory.instance)
                    .put("message", format("CSV import succesfull, %s expenses imported", expenses.size()))
                    .toString();
        } catch (IOException e) {
            throw new IllegalArgumentException("Error reading CSV file", e);
        }
    }
}
