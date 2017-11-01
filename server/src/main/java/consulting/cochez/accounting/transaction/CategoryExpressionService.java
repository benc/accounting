package consulting.cochez.accounting.transaction;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryExpressionService {
    private final CategoryExpressionRepository categoryExpressionRepository;
    private final SpelExpressionParser spelExpressionParser;

    public List<Category> matchingExpressions(Transaction transaction) {
        return categoryExpressionRepository.findAll().stream()
                .filter(categoryExpression -> spelExpressionParser.parseExpression(categoryExpression.getExpression()).getValue(transaction, Boolean.class))
                .map(CategoryExpression::getCategory)
                .collect(Collectors.toList());
    }
}
