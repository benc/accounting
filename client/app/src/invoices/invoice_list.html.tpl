<div class="invoice invoice-list">
  <h1>
    Invoices
  </h1>
  <div class="actions">
    <md-button aria-label="Add invoice" class="md-raised" ui-sref="invoices.create">Add an invoice</md-button>
  </div>
  <md-divider></md-divider>
  <md-content>
    <md-list>
      <md-item ng-repeat="invoice in ctrl.invoices">
        <md-item-content>
          <div class="md-tile-content">
            <ul class="meta" layout="horizontal">
              <li class="invoiceDate" ng-if="::invoice.invoice_date">{{ ::invoice.invoice_date | date:'dd/MM/yy' }}</li>
              <li class="paymentDate" ng-if="::invoice.payment_date">Paid: {{ ::invoice.payment_date | date:'dd/MM/yy'}}</li>
              <li class="vat" ng-if="::invoice.vat">VAT: {{ ::invoice.vat}}%</li>
              <li class="indexNumber" ng-if="::invoice.index_number">index: {{ ::invoice.index_number}}%</li>
            </ul>
            <h3>{{::invoice.name}}</h3>
            <h4>{{::invoice.category}}</h4>
            <p ng-if="::invoice.remark">
              {{::invoice.remark}}
            </p>
            <!-- <pre>{{ ::invoice | json }}</pre> -->
          </div>
          <div class="md-tile-right">
            {{::invoice.amount | currency:invoice.currency }}
            <md-button class="md-fab" aira-label="Edit this invoice" ui-sref="invoices.edit({id: {{ ::invoice.id }} })">edit</md-button>
            <md-button class="md-fab" aira-label="Delete this invoice" ng-click="ctrl.delete(invoice.id)">delete</md-button>
          </div>
        </md-item-content>
        <md-divider ng-if="!$last"></md-divider>
      </md-item>
    </md-list>
  </md-content>
</div>