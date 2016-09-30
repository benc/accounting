package consulting.cochez.accounting.config.jackson;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;

import static java.lang.String.format;

public class LocalDateDeserializer extends FromStringDeserializer<LocalDate> {

    private static final DateTimeFormatter[] FORMATS = {
            DateTimeFormatter.ofPattern("d/MM/yy"),
            DateTimeFormatter.ofPattern("d/MM/yyyy"),
            DateTimeFormatter.ofPattern("dd/MM/yyyy")
    };

    public LocalDateDeserializer() {
        super(LocalDate.class);
    }

    @Override
    protected LocalDate _deserialize(String value, DeserializationContext ctxt) throws IOException {
        if (StringUtils.isBlank(value)) {
            return null;
        }

        return parseLocalDate(value);
    }

    private static LocalDate parseLocalDate(String string) {
        if (StringUtils.isBlank(string)) {
            throw new IllegalArgumentException("Empty string provided, you should provide a date, preferably parseable.");
        }

        for (DateTimeFormatter formatter : FORMATS) {
            try {
                return LocalDate.parse(string, formatter);
            } catch (IllegalArgumentException | DateTimeParseException e) {
                // ignore, try next format
            }
        }

        throw new IllegalArgumentException(format("Could not parse date %s", string));
    }
}