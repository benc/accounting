package consulting.cochez.accounting.config.jackson;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;
import org.apache.commons.lang3.StringUtils;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.Locale;

public class BigDecimalDeserializer extends FromStringDeserializer<BigDecimal> {
    public BigDecimalDeserializer() {
        super(BigDecimal.class);
    }

    @Override
    protected BigDecimal _deserialize(String value, DeserializationContext ctxt) {
        DecimalFormat decimalFormat = (DecimalFormat) NumberFormat.getInstance(new Locale("nl", "BE"));
        decimalFormat.setParseBigDecimal(true);

        return (BigDecimal) decimalFormat.parseObject(StringUtils.trim(value), new ParsePosition(0));
    }
}
