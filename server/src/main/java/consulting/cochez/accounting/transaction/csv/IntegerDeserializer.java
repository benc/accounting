package consulting.cochez.accounting.transaction.csv;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;

import java.io.IOException;

import static org.apache.commons.lang3.StringUtils.*;

public class IntegerDeserializer extends FromStringDeserializer<Integer> {
    public IntegerDeserializer() {
        super(Integer.class);
    }

    @Override
    protected Integer _deserialize(String value, DeserializationContext ctxt) throws IOException {
        String cleanedInt = trim(value).replace("%", "").replace("-", "").replace(",00", "");

        if (isBlank(cleanedInt)) {
            return null;
        }

        return Integer.parseInt(cleanedInt);
    }
}
