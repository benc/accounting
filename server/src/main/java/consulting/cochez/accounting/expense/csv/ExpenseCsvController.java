package consulting.cochez.accounting.expense.csv;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import consulting.cochez.accounting.expense.Expense;
import consulting.cochez.accounting.expense.ExpenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import static java.lang.String.format;

@RestController
public class ExpenseCsvController {

    private final ExpenseCsvParser expenseCsvParser;
    private final ExpenseRepository expenseRepository;

    @Autowired
    public ExpenseCsvController(ExpenseCsvParser expenseCsvParser, ExpenseRepository expenseRepository) {
        this.expenseCsvParser = expenseCsvParser;
        this.expenseRepository = expenseRepository;
    }

    /**
     * Import CSV data. Header names are used to map the fields to Expense.
     *
     * @param csv csv file.
     * @return result message
     */
    @RequestMapping(
            value = "/api/expenses/import",
            method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String importCsv(@RequestPart("csv") MultipartFile csv) {
        try (InputStream csvInputStream = csv.getInputStream()) {
            List<Expense> expenses = expenseCsvParser.parse(csvInputStream);
            expenseRepository.saveAll(expenses);

            return new ObjectNode(JsonNodeFactory.instance)
                    .put("message", format("CSV import succesfull, %s expenses imported", expenses.size()))
                    .toString();
        } catch (IOException e) {
            throw new IllegalArgumentException("Error reading CSV file", e);
        }
    }

    @RequestMapping(
            value = "/api/expenses/csv",
            method = RequestMethod.GET,
            produces = MediaType.TEXT_PLAIN_VALUE
    )
    @ResponseBody
    public String exportCsv() {
        try {
            return expenseCsvParser.export(expenseRepository.findAll());
        } catch (JsonProcessingException e) {
            throw new IllegalStateException("Error writing CSV file", e);
        }
    }
}
