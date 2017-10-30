package consulting.cochez.accounting.importing.belfius;

import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import consulting.cochez.accounting.expense.Expense;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import javax.annotation.PostConstruct;

@Slf4j
@Component
public class BelfiusCsvParser {

    @PostConstruct
    public void setup() {
    }

    public static final char SEPARATOR = ';';

    public List<Expense> parse(InputStream inputStream) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        CsvMapper csvMapper = new CsvMapper();
        csvMapper.addMixIn(Expense.class, BelfiusTransferFormat.class);

        CsvSchema bootstrapSchema = CsvSchema.emptySchema()
                .withHeader()
                .withoutQuoteChar()
                .withColumnSeparator(SEPARATOR);

        // skip header
        for (int i = 0; i < 12; i++) {
            reader.readLine();
        }

        MappingIterator<Expense> mappingIterator = csvMapper
                .readerFor(Expense.class)
                .with(bootstrapSchema)
                .readValues(reader);

        return mappingIterator.readAll();
    }

}
