CREATE TABLE category
(
  id   UUID NOT NULL PRIMARY KEY,
  name TEXT
);

CREATE TABLE category_expression
(
  id          UUID NOT NULL PRIMARY KEY,
  expression  TEXT,
  category_id UUID CONSTRAINT category_expression REFERENCES category
);

ALTER TABLE transaction
  DROP COLUMN category;

ALTER TABLE transaction
  ADD COLUMN category_id UUID CONSTRAINT category_transaction REFERENCES category;
