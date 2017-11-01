package consulting.cochez.accounting.transaction.csv;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;
import consulting.cochez.accounting.transaction.Category;

public class TransactionCategoryDeserializer extends FromStringDeserializer<Category> {
    protected TransactionCategoryDeserializer() {
        super(Category.class);
    }

    @Override
    protected Category _deserialize(String value, DeserializationContext ctxt) {
        return new Category().setName(value);
    }
}
