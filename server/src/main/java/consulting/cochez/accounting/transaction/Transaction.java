package consulting.cochez.accounting.transaction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.springframework.data.jpa.domain.AbstractPersistable;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Accessors(chain = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(callSuper = false)
public class Transaction extends AbstractPersistable<UUID> {

    private String fromAccount;
    private String toAccount;
    private String name;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id", foreignKey = @ForeignKey(name = "category_transaction"))
    private Category category;

    private String currency; // TODO to 1 MonetaryAmount object
    private String remark;
    private BigDecimal amount; // TODO to 1 MonetaryAmount object
    private Integer vat;
    private LocalDate invoiceDate;
    private LocalDate paymentDate;
    private Integer indexNumber;

}
