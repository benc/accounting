require 'rails_helper'

describe API::API do

  let(:invoice_count) { 10 }

  before do
    invoice_count.times.each_with_index do |_, index|
      Fabricate(:invoice, id: index)
    end
  end

  describe 'GET /api/invoice' do
    before do
      get '/api/invoice' 
    end

    let(:body) { JSON.parse(response.body) }
    
    it { expect(response.status).to eq(200) }
    it { expect(body.size).to eq(invoice_count) }
  end

  describe 'GET /api/invoice/:id' do
    before do
      get "/api/invoice/1"
    end

    let(:body) { JSON.parse(response.body) }
    
    it { expect(response.status).to eq(200) }

    it { expect(body).to have_key('id') } 
    it { expect(body).to have_key('name') } 
    it { expect(body).to have_key('category') } 
    it { expect(body).to have_key('remark') } 
    it { expect(body).to have_key('amount') } 
    it { expect(body).to have_key('vat') } 
    it { expect(body).to have_key('invoice_date') } 
    it { expect(body).to have_key('payment_date') } 
    it { expect(body).to have_key('index_number') } 
    it { expect(body).to have_key('created_at') } 
    it { expect(body).to have_key('updated_at') } 
    it { expect(body).to have_key('currency') } 

    it { expect(body['id']).to eq(1) } 
  end

  describe 'POST /api/invoice/' do
    let(:new_invoice) { Fabricate.build(:invoice) }

    before do
      post '/api/invoice', new_invoice.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end

    let(:body) { JSON.parse(response.body) }

    it { expect(response.status).to eq(201) }

    it { expect(body).to have_key('id') } 
    it { expect(body).to have_key('name') } 
    it { expect(body).to have_key('category') } 
    it { expect(body).to have_key('remark') } 
    it { expect(body).to have_key('amount') } 
    it { expect(body).to have_key('vat') } 
    it { expect(body).to have_key('invoice_date') } 
    it { expect(body).to have_key('payment_date') } 
    it { expect(body).to have_key('index_number') } 
    it { expect(body).to have_key('created_at') } 
    it { expect(body).to have_key('updated_at') } 
    it { expect(body).to have_key('currency') } 

    it { expect(body['id']).not_to be(nil) }
    it { expect(body['name']).to eq(new_invoice['name']) }
    it { expect(body['category']).to eq(new_invoice['category']) }
    it { expect(body['remark']).to eq(new_invoice['remark']) }
    # it { expect(body['amount']).to eq(new_invoice['amount']) }
    it { expect(body['vat']).to eq(new_invoice['vat']) }
    # it { expect(body['invoice_date']).to eq(new_invoice['invoice_date']) }
    # it { expect(body['payment_date']).to eq(new_invoice['payment_date']) }
    it { expect(body['index_number']).to eq(new_invoice['index_number']) }
    it { expect(body['currency']).to eq(new_invoice['currency']) }
  end

  describe 'POST /api/invoice/:id' do
    let(:updated_invoice) { Fabricate.build(:invoice) }

    before do
      post '/api/invoice/2', updated_invoice.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end

    it { expect(response.status).to eq(201) }

    it { expect(response.body).to eq('true') } 
  end

  describe 'DELETE /api/invoice/:id' do
    before do
      delete '/api/invoice/2'
    end

    let(:body) { JSON.parse(response.body) }

    it { expect(response.status).to eq(200) }

    it { expect(body).to have_key('id') } 
    it { expect(body).to have_key('name') } 
    it { expect(body).to have_key('category') } 
    it { expect(body).to have_key('remark') } 
    it { expect(body).to have_key('amount') } 
    it { expect(body).to have_key('vat') } 
    it { expect(body).to have_key('invoice_date') } 
    it { expect(body).to have_key('payment_date') } 
    it { expect(body).to have_key('index_number') } 
    it { expect(body).to have_key('created_at') } 
    it { expect(body).to have_key('updated_at') } 
    it { expect(body).to have_key('currency') } 

    it { expect(body['id']).to be(2) }
  end
end
