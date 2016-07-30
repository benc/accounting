CREATE TABLE expense (
  id   UUID NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  currency TEXT NOT NULL,
  remark TEXT,
  amount DECIMAL NOT NULL,
  vat INTEGER,
  invoice_date DATE NOT NULL,
  payment_date DATE,
  index_number INTEGER
);
