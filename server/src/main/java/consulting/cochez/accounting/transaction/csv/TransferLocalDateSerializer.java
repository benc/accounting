/*
 * Dit bestand is een onderdeel van AWV DistrictCenter.
 * Copyright (c) AWV Agentschap Wegen en Verkeer, Vlaamse Gemeenschap
 */

package consulting.cochez.accounting.transaction.csv;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

/**
 * Jackson serializer for LocalDate.
 */
public class TransferLocalDateSerializer extends JsonSerializer<LocalDate> {

    @Override
    public void serialize(LocalDate value, JsonGenerator gen, SerializerProvider arg2) throws IOException {
        gen.writeString(DateTimeFormatter.ofPattern("dd/MM/yyyy").format(value));
    }

}