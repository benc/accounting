package consulting.cochez.accounting.expense;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Expense extends AbstractPersistable<UUID> {

    @NotNull
    private String name;

    @NotNull
    private String category;

    @NotNull
    private String currency; // TODO to 1 MonetaryAmount object

    private String remark;

    @NotNull
    private BigDecimal amount; // TODO to 1 MonetaryAmount object
    private Integer vat;

    @NotNull
    private LocalDate invoiceDate;
    private LocalDate paymentDate;
    private Integer indexNumber;

}
