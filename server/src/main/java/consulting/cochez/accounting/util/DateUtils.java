package consulting.cochez.accounting.util;

import org.apache.commons.lang3.StringUtils;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import static java.lang.String.format;

public class DateUtils {

    private static final DateTimeFormatter[] FORMATS = {
            DateTimeFormatter.ofPattern("dd/MM/yyyy")
    };

    public static LocalDate parseLocalDate(String string) {
        if (StringUtils.isBlank(string)) {
            throw new IllegalArgumentException("Empty string provided, you should provide a date, preferably parseable.");
        }

        LocalDate date = null;

        for (DateTimeFormatter formatter : FORMATS) {
            try {
                return LocalDate.from(formatter.parse(string));
            } catch (IllegalArgumentException | DateTimeParseException e) {
                // ignore, try next format
                date = null; // dummy
            }

            throw new IllegalArgumentException(format("Could not parse date %s", string));
        }

        return date;
    }

}
