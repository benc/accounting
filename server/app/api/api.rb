class API < Grape::API
  prefix 'api'
  format :json
  
  resource :invoice do
    desc "Return list of invoices"
    get do
      Invoice.all
    end

    desc "Create an invoice."
    params do
      requires :name, type: String, desc: "Name of the invoice."
      requires :category, type: String, desc: "Corresponding category."
      optional :remark, type: String, desc: "Remark."
      requires :amount, type: BigDecimal, desc: "Invoice amount."
      requires :vat, type: Integer, desc: "VAT."
      requires :invoice_date, type: DateTime, desc: "Invoice date."
      requires :payment_date, type: DateTime, desc: "Payment date."
    end
    post do
      Invoice.create! params
    end
  end
end