package consulting.cochez.accounting.expense;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Expense {
    @Id
    private UUID id;
    private String name;
    private String category;
    private String currency;
    private String remark;
    private BigDecimal amount;
    private Integer vat;
    private LocalDate invoiceDate;
    private LocalDate paymentDate;
    private Integer indexNumber;
}
