package consulting.cochez.accounting.importing.belfius;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import consulting.cochez.accounting.config.jackson.BigDecimalDeserializer;
import consulting.cochez.accounting.config.jackson.LocalDateDeserializer;
import consulting.cochez.accounting.transaction.csv.TransactionLocalDateSerializer;
import consulting.cochez.accounting.transaction.csv.IntegerDeserializer;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

/**
 * CSV import/export mixin for Jackson
 */
@Data
@JsonPropertyOrder({"Rekening", "Boekingsdatum", "Afschriftnummer", "Transactienummer", "Rekening tegenpartij", "Naam tegenpartij bevat", "Straat en nummer", "Postcode en plaats",
        "Transactie", "Valutadatum", "Bedrag", "Devies", "BIC", "Landcode", "Mededelingen"})
@JsonIgnoreProperties(ignoreUnknown = true)
public abstract class BelfiusTransferFormat {

    @JsonIgnore
    private String id;

    @JsonProperty("Rekening")
    private String fromAccount;

    @JsonProperty("Rekening tegenpartij")
    private String toAccount;

    @JsonProperty("Naam tegenpartij bevat")
    private String name;

    @JsonDeserialize(using = BigDecimalDeserializer.class)
    @JsonProperty("Bedrag")
    private BigDecimal amount;

    @JsonProperty("Devies")
    private String currency;

    @JsonProperty("Mededelingen")
    private String remark;

    @JsonDeserialize(using = IntegerDeserializer.class)
    @JsonProperty("Transactienummer")
    private Integer indexNumber;

    @JsonSerialize(using = TransactionLocalDateSerializer.class)
    @JsonDeserialize(using = LocalDateDeserializer.class)
    @JsonProperty("Valutadatum")
    private LocalDate paymentDate;

}
