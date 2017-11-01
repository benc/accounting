package consulting.cochez.accounting.transaction;

import com.fasterxml.jackson.databind.node.JsonNodeFactory;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.tuple.ImmutablePair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static java.lang.String.format;

@Slf4j
@RestController
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class CategoryController {

    private final TransactionRepository transactionRepository;
    private final CategoryExpressionService categoryExpressionService;

    /**
     * Calculate categories
     *
     * @return result message
     */
    @RequestMapping(
            value = "/api/transactions/categories/calculate-missing",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    @Transactional
    public String calculateMissingCategories() {
        long count = transactionRepository.findAll().stream()
                .filter(t -> t.getCategory() == null)
                .map(t -> ImmutablePair.of(t, categoryExpressionService.matchingExpressions(t)))
                .peek(tuple -> {
                    if (tuple.getRight().isEmpty()) {
                        log.warn("No categories found for transaction {}", tuple.getLeft());
                    }
                })
                .filter(tuple -> !tuple.getRight().isEmpty())
                .peek(tuple -> {
                    if (tuple.getRight().size() > 1) {
                        log.error("Expected 1 category for transaction {} but found {}", tuple.getLeft().getIndexNumber(), tuple.getRight().size());
                    }
                })
                .map(tuple -> tuple.getLeft().setCategory(tuple.getRight().get(0)))
                .count();

        return new ObjectNode(JsonNodeFactory.instance)
                .put("message", format("%s categories assigned", count))
                .toString();
    }

}
