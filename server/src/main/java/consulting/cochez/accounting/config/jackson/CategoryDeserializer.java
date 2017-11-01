package consulting.cochez.accounting.config.jackson;

import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.FromStringDeserializer;
import consulting.cochez.accounting.transaction.Category;

public class CategoryDeserializer extends FromStringDeserializer<Category> {
    protected CategoryDeserializer() {
        super(Category.class);
    }

    @Override
    protected Category _deserialize(String value, DeserializationContext ctxt) {
        return new Category().setName(value);
    }
}
