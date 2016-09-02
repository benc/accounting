package consulting.cochez.accounting.util;

import org.apache.commons.lang3.StringUtils;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.ParsePosition;
import java.util.Locale;

public class NumberUtils {

    public static BigDecimal parseBigDecimal(String string) {
        DecimalFormat decimalFormat = (DecimalFormat) NumberFormat.getInstance(Locale.GERMAN);
        decimalFormat.setParseBigDecimal(true);

        return (BigDecimal) decimalFormat.parseObject(StringUtils.trim(string), new ParsePosition(0));
    }

    public static Integer parseInteger(String string) {
        NumberFormat numberFormat = NumberFormat.getInstance(new Locale("nl", "BE"));
        numberFormat.setParseIntegerOnly(true);
        return (Integer) numberFormat.parse(string, new ParsePosition(0));
    }

    public static Integer parsePercentage(String string) {
        return Integer.parseInt(string.replace("%", ""));
    }

}
