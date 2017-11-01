package consulting.cochez.accounting.config.jackson;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;

import static org.apache.commons.lang3.StringUtils.isBlank;
import static org.apache.commons.lang3.StringUtils.trim;

public class IntegerDeserializer extends FromStringDeserializer<Integer> {
    public IntegerDeserializer() {
        super(Integer.class);
    }

    @Override
    protected Integer _deserialize(String value, DeserializationContext ctxt) {
        String cleanedInt = trim(value).replace("%", "").replace("-", "").replace(",00", "");

        if (isBlank(cleanedInt)) {
            return null;
        }

        return Integer.parseInt(cleanedInt);
    }
}
