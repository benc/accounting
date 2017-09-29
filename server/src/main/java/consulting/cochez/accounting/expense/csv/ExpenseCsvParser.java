package consulting.cochez.accounting.expense.csv;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import consulting.cochez.accounting.expense.Expense;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;

@Slf4j
@Component
public class ExpenseCsvParser {

    @Autowired
    private JavaTimeModule javaTimeModule;

    @PostConstruct
    public void setup() {
    }

    public static final char SEPARATOR = ';';

    public List<Expense> parse(InputStream csvInputStream) throws IOException {
        CsvMapper csvMapper = new CsvMapper();
        csvMapper.addMixIn(Expense.class, ExpenseCsvFormat.class);

        CsvSchema bootstrapSchema = CsvSchema.emptySchema() // empty, based on column header names
                .withHeader()
                .withColumnSeparator(SEPARATOR);

        MappingIterator<Expense> mappingIterator = csvMapper
                .readerFor(Expense.class)
                .with(bootstrapSchema)
                .readValues(csvInputStream);

        List<Expense> expenses = mappingIterator.readAll();

        // set currency for every expense to EUR
        expenses.forEach(expense -> expense.setCurrency("EUR"));

        return expenses.stream()
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

    public String export(List<Expense> expenses) throws JsonProcessingException {
        CsvMapper csvMapper = new CsvMapper();
        csvMapper.addMixIn(Expense.class, ExpenseCsvFormat.class);

        CsvSchema schema = csvMapper
                .schemaFor(Expense.class)
                .withHeader()
                .withColumnSeparator(SEPARATOR);

        return csvMapper.writer(schema).writeValueAsString(expenses);
    }
}
