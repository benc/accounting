package consulting.cochez.accounting.transaction;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CategoryExpressionRepository extends JpaRepository<CategoryExpression, UUID> {
}
