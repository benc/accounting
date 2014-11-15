<div>
	<h1>Invoices</h1>
	<md-content>
    	<md-list>
			<md-item ng-repeat="invoice in invoices.invoices">
			  <md-item-content>
			    <div class="md-tile-content">
			      <h3>{{invoice.name}}</h3>
			      <h4>{{invoice.category}}</h4>
			      <p ng-if="invoice.remark">
			        {{invoice.remark}}
			      </p>
            <pre>{{ invoice | json }}</pre>
			    </div>
			    <div class="md-tile-right">
			    	{{invoice.amount | currency:invoice.currency }}
			    </div>
			  </md-item-content>
        <md-divider ng-if="!$last"></md-divider>
			</md-item>
    </md-list>
	</md-content>
</div>