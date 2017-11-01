package consulting.cochez.accounting.transaction.csv;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import consulting.cochez.accounting.transaction.Category;

import java.io.IOException;

public class TransactionCategorySerializer extends JsonSerializer<Category> {
    @Override
    public void serialize(Category category, JsonGenerator gen, SerializerProvider serializers) throws IOException {
        gen.writeString(category.getName());
    }
}
