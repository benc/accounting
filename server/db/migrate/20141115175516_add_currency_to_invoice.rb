class AddCurrencyToInvoice < ActiveRecord::Migration
  def change
    add_column :invoices, :currency, :string # ISO 4217
  end
end
