ALTER TABLE "transaction"
  ALTER COLUMN "name" DROP NOT NULL;

ALTER TABLE "transaction"
  ALTER COLUMN "category" DROP NOT NULL;

ALTER TABLE "transaction"
  ALTER COLUMN "currency" DROP NOT NULL;

ALTER TABLE "transaction"
  ALTER COLUMN "amount" DROP NOT NULL;

ALTER TABLE "transaction"
  ALTER COLUMN "invoice_date" DROP NOT NULL;

ALTER TABLE "transaction"
  ADD COLUMN "from_account" TEXT;

ALTER TABLE "transaction"
  ADD COLUMN "to_account" TEXT;
