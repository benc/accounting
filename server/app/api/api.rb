class API < Grape::API
  # prefix 'api' # OPTIONS does not work when using prefix in Rails https://github.com/intridea/grape/issues/679

  content_type :json, 'application/json'
  default_format :json
  rescue_from :all

  resource :invoice do
    desc "Return list of invoices"
    get do
      Invoice.all
    end

    desc "Get an invoice."
    params do
      requires :id, type: String, desc: "ID of the invoice."
    end
    get ':id' do
      Invoice.find(params["id"])
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

    desc "Update an invoice."
    params do
      requires :id, type: String, desc: "Invoice ID."
      requires :name, type: String, desc: "Name of the invoice."
      requires :category, type: String, desc: "Corresponding category."
      optional :remark, type: String, desc: "Remark."
      requires :amount, type: BigDecimal, desc: "Invoice amount."
      requires :currency, type: String, desc: "Currency code."
      requires :vat, type: Integer, desc: "VAT."
      requires :invoice_date, type: DateTime, desc: "Invoice date."
      requires :payment_date, type: DateTime, desc: "Payment date."
    end
    put ':id' do
      Invoice.find(params["id"]).update({
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

    desc "Delete an invoice."
    params do
      requires :id, type: String, desc: "Invoice ID."
    end
    delete ':id' do
      Invoice.find(params["id"]).destroy
    end
  end
end
