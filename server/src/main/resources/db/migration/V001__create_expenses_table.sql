CREATE TABLE expense (
  id   UUID NOT NULL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  currency TEXT NOT NULL,
  remark TEXT,
  amount DECIMAL NOT NULL,
  vat INTEGER,
  invoicedate DATE NOT NULL,
  paymentdate DATE,
  indexnumber INTEGER
);
