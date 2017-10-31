package consulting.cochez.accounting.transaction.csv;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvParser;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import consulting.cochez.accounting.transaction.Transaction;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;

@Slf4j
@Component
public class TransactionCsvParser {

    @PostConstruct
    public void setup() {
    }

    public static final char SEPARATOR = ';';

    public List<Transaction> parse(InputStream csvInputStream) throws IOException {
        CsvMapper csvMapper = new CsvMapper();
        csvMapper.addMixIn(Transaction.class, TransactionCsvFormat.class);
        csvMapper.configure(CsvParser.Feature.FAIL_ON_MISSING_COLUMNS, true);

        CsvSchema bootstrapSchema = CsvSchema.emptySchema() // empty, based on column header names
                .withHeader()
                .withColumnSeparator(SEPARATOR);

        MappingIterator<Transaction> mappingIterator = csvMapper
                .readerFor(Transaction.class)
                .with(bootstrapSchema)
                .readValues(csvInputStream);

        List<Transaction> transactions = mappingIterator.readAll();

        // set currency for every expense to EUR
        transactions.forEach(expense -> expense.setCurrency("EUR"));

        return transactions.stream()
                .filter(expense -> {
                    if (expense.getAmount() == null) {
                        log.warn("No amount set for expense, skipping...\r\n{}", expense);
                        return false;
                    }
                    return true;
                })
                .filter(expense -> {
                    if (expense.getInvoiceDate() == null) {
                        log.warn("No invoice date set for expense, skipping...\r\n{}", expense);
                        return false;
                    }
                    return true;
                })
                .collect(Collectors.toList());
    }

    public String export(List<Transaction> transactions) throws JsonProcessingException {
        CsvMapper csvMapper = new CsvMapper();
        csvMapper.addMixIn(Transaction.class, TransactionCsvFormat.class);

        CsvSchema schema = csvMapper
                .schemaFor(Transaction.class)
                .withHeader()
                .withColumnSeparator(SEPARATOR);

        return csvMapper.writer(schema).writeValueAsString(transactions);
    }
}
