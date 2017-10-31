package consulting.cochez.accounting.importing.belfius;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import consulting.cochez.accounting.transaction.Transaction;
import consulting.cochez.accounting.transaction.TransactionRepository;
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
    private final TransactionRepository transactionRepository;

    @Autowired
    public BelfiusCsvController(BelfiusCsvParser belfiusCsvParser, TransactionRepository transactionRepository) {
        this.belfiusCsvParser = belfiusCsvParser;
        this.transactionRepository = transactionRepository;
    }

    /**
     * Import CSV data. Header names are used to map the fields to Transaction.
     *
     * @param csv csv file.
     * @return result message
     */
    @RequestMapping(
            value = "/api/transactions/belfius/import",
            method = RequestMethod.POST,
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public String importCsv(@RequestPart("csv") MultipartFile csv) {
        try (InputStream csvInputStream = csv.getInputStream()) {
            List<Transaction> transactions = belfiusCsvParser.parse(csvInputStream);
            transactionRepository.saveAll(transactions);

            return new ObjectNode(JsonNodeFactory.instance)
                    .put("message", format("CSV import succesfull, %s transactions imported", transactions.size()))
                    .toString();
        } catch (IOException e) {
            throw new IllegalArgumentException("Error reading CSV file", e);
        }
    }
}
