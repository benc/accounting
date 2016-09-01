package consulting.cochez.accounting.util;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.Locale;

public class NumberUtils {

    public static BigDecimal parseBigDecimal(String string) {
        DecimalFormat decimalFormat = (DecimalFormat) NumberFormat.getInstance(new Locale("nl", "BE"));
        decimalFormat.setParseBigDecimal(true);
        return (BigDecimal) decimalFormat.parse(string, new ParsePosition(0));
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
