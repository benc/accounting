class API < Grape::API
  prefix 'api'

  content_type :json, 'application/json'
  default_format :json
  rescue_from :all

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
      requires :currency, type: String, desc: "Currency code."
      requires :vat, type: Integer, desc: "VAT."
      requires :invoice_date, type: DateTime, desc: "Invoice date."
      requires :payment_date, type: DateTime, desc: "Payment date."
    end
    post do
      Invoice.create!({
        name: params[:name],
        category: params[:category],
        remark: params[:remark],
        amount: params[:amount],
        currency: params[:currency],
        vat: params[:vat],
        invoice_date: params[:invoice_date],
        payment_date: params[:payment_date],
      })
    end
  end
end