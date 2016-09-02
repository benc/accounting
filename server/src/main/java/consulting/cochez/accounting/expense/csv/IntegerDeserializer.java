package consulting.cochez.accounting.expense.csv;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.Locale;

import static org.apache.commons.lang3.StringUtils.*;

public class IntegerDeserializer extends FromStringDeserializer<Integer> {
    public IntegerDeserializer() {
        super(Integer.class);
    }

    @Override
    protected Integer _deserialize(String value, DeserializationContext ctxt) throws IOException {
        String cleanedInt = trim(value).replace("%", "").replace("-", "");

        if (isBlank(cleanedInt)) {
            return null;
        }

        return Integer.parseInt(cleanedInt);
    }
}
