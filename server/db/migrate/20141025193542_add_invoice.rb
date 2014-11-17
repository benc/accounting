class AddInvoice < ActiveRecord::Migration
  def change
  	create_table :invoices do |t|
      t.string :name
      t.string :category
      t.text :remark
      t.decimal :amount
      t.integer :vat
      t.datetime :invoice_date
      t.datetime :payment_date
      t.integer :index_number
      
      t.timestamps
    end
  end
end
