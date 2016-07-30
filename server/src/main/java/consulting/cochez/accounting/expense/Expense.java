package consulting.cochez.accounting.expense;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;
import javax.persistence.Entity;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Expense extends AbstractPersistable<UUID> {

    private String name;
    private String category;
    private String currency;
    private String remark;
    private BigDecimal amount;
    private Integer vat;
    private LocalDate invoiceDate;
    private LocalDate paymentDate;
    private Integer indexNumber;

    /**
     * Helper (hack) to facilitate URL building at the client side.
     *
     * @return id. HAL only returns a self rel url.
     */
    public UUID getBusinessId(){
        return getId();
    }
}
