package consulting.cochez.accounting.expense;

import com.opencsv.CSVReader;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;
import java.util.stream.Collectors;

import static consulting.cochez.accounting.util.DateUtils.parseLocalDate;
import static consulting.cochez.accounting.util.NumberUtils.parseBigDecimal;
import static consulting.cochez.accounting.util.NumberUtils.parseInteger;
import static consulting.cochez.accounting.util.NumberUtils.parsePercentage;

@Component
public class ExpenseCsvHelper {

    private static final int COL_INVOICE_DATE = 0;
    private static final int COL_FROM = 1;
    private static final int COL_AMOUNT_EXCL_VAT = 2;
    private static final int COL_VAT_PERCENTAGE = 3;
    private static final int COL_VAT_AMOUNT = 4;
    private static final int COL_AMOUNT_INCL_VAT = 5;
    private static final int COL_INDEX_NUMBER = 6;
    private static final int COL_CATEGORY = 7;
    private static final int COL_REMARK = 8;

    public List<Expense> parse(InputStream csv) throws IOException {
        CSVReader reader = new CSVReader(new InputStreamReader(csv), ';');
        return reader.readAll().stream()
                .skip(1) // first row => header
                .map(this::parseExpense)
                .collect(Collectors.toList());
    }

    private Expense parseExpense(String[] expenseCsv) {

        Expense expense = new Expense();

        expense.setInvoiceDate(parseLocalDate(expenseCsv[COL_INVOICE_DATE]));
        expense.setName(expenseCsv[COL_FROM]);
        expense.setAmount(parseBigDecimal(expenseCsv[COL_AMOUNT_EXCL_VAT]));
        expense.setVat(parsePercentage(expenseCsv[COL_VAT_PERCENTAGE]));
        expense.setIndexNumber(parseInteger(expenseCsv[COL_INDEX_NUMBER]));
        expense.setCategory(expenseCsv[COL_CATEGORY]);
        expense.setRemark(expenseCsv[COL_REMARK]);
        expense.setCurrency("EUR");

        return expense;

    }

}
