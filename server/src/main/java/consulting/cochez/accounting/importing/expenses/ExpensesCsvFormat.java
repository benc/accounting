package consulting.cochez.accounting.importing.expenses;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import consulting.cochez.accounting.config.jackson.BigDecimalDeserializer;
import consulting.cochez.accounting.config.jackson.CategoryDeserializer;
import consulting.cochez.accounting.config.jackson.CategorySerializer;
import consulting.cochez.accounting.config.jackson.IntegerDeserializer;
import consulting.cochez.accounting.config.jackson.LocalDateDeserializer;
import consulting.cochez.accounting.transaction.Category;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * CSV import/export mixin for Jackson
 */
@Data
@JsonPropertyOrder({"invoiceDate", "name", "amount", "vat", "indexNumber", "category", "remark"})
@JsonIgnoreProperties(ignoreUnknown=true)
public abstract class ExpensesCsvFormat {

    @JsonIgnore
    private String id;

    @JsonIgnore
    public abstract boolean isNew();

    @JsonDeserialize(using = BigDecimalDeserializer.class)
    private BigDecimal amount;

    private String currency;

    @JsonDeserialize(using = IntegerDeserializer.class)
    private Integer vat;

    @JsonDeserialize(using = IntegerDeserializer.class)
    private Integer indexNumber;

    @JsonSerialize(using = ExpensesLocalDateSerializer.class)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate invoiceDate;

    @JsonSerialize(using = ExpensesLocalDateSerializer.class)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate paymentDate;

    @JsonSerialize(using = CategorySerializer.class)
    @JsonDeserialize(using = CategoryDeserializer.class)
    private Category category;

}
