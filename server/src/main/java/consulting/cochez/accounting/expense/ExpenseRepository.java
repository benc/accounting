package consulting.cochez.accounting.expense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;

@RepositoryRestResource
public interface ExpenseRepository extends JpaRepository<Expense, UUID> {
}
