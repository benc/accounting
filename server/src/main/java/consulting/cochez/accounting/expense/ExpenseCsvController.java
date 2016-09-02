package consulting.cochez.accounting.expense;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import static java.lang.String.format;

@Controller
public class ExpenseCsvController {

    @Autowired
    private ExpenseCsvHelper expenseCsvHelper;

    @Autowired
    private ExpenseRepository expenseRepository;

    @RequestMapping(
            value = "/api/expenses/import",
            method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @ResponseBody
    public String importCsv(@RequestPart("csv") MultipartFile csv) {
        try (InputStream csvInputStream = csv.getInputStream()) {
            List<Expense> expenses = expenseCsvHelper.parse(csvInputStream);
            expenseRepository.save(expenses);

            return new ObjectNode(JsonNodeFactory.instance)
                    .put("message", format("CSV import succesfull, %s expenses imported", expenses.size()))
                    .toString();
        } catch (IOException e) {
            throw new IllegalArgumentException("Error reading CSV file");
        }
    }

}
