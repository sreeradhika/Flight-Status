var flightSearchTemplate = `
	<form>
	<div class="form-inline">
  
 <div class="form-group">
        <input class="form-control" title="Journey start location" required ng-model="formData.startPlace" placeholder="Origin" id="startPlace" name="startPlace" type="text"/>
    
</div>
<div class="form-group">
    <input class="form-control" title="Destination location" required ng-model="formData.endPlace" placeholder="Destination" id="endPlace" name="endPlace" type="text"/>
    
</div>
<div class="form-group">
    <date-picker class="form-control" place-holder="yyyy-mm-dd" date="formData.startDate" is-required="true" name="formData.startDate"></date-picker>
    
</div>
<div class="form-group">
        <button class=" form-control btn btn-primary" title="Provide search details" ng-click="$ctrl.search(formData);" ng-disabled="searchForm.$invalid">Search</button>
    
</div>
</div>
<br/>
<div class="container" ng-if="$ctrl.searchSuccess == true && $ctrl.flights.length > 0">   
	  <table class="table table-striped">
	    <thead class="bg-primary">
	      <tr>
	        <th class="col-xs-3">FlightNumber</th>
	        <th class="col-xs-3">Carrier</th>
	        <th class="col-xs-3">Origin</th>
	        <th class="col-xs-6">Departure</th>
	        <th class="col-xs-3">Destination</th>
	        <th class="col-xs-6">Arrival</th>
	        <th class="col-xs-6">Aircraft</th>
	        <th class="col-xs-3">Distance</th>	        
	      </tr>
	    </thead>
	     <tbody ng-repeat="flight in $ctrl.flights">
	        <tr>
	            <td>{{flight.flightNumber}}</td>
	            <td>{{flight.carrier}}</td>
	            <td>{{flight.origin}}</td>
	            <td>{{flight.departure}}</td>
	            <td>{{flight.destination}}</td>
	            <td>{{flight.arrival}}</td>
	            <td>{{flight.aircraft}}</td>
	            <td>{{flight.distance}}</td>
	        </tr>
	    </tbody>
	    </table>
	<div>
	<div ng-if="$ctrl.searchSuccess == false" class="alert alert-warning">
	  <strong>Warning!</strong> Some thing went wrong with the flight serach.
	</div>
</form>
`;

angular
     .module('searchFormModule', [])
     .component('searchFormComponent', {
    	 bindings: {}, 
    	 template: flightSearchTemplate,         
         controller: function($http) {
        	 var ctrl = this;
        	 ctrl.searchSuccess = true;
        	 ctrl.flights = [];
        	 ctrl.search = function(form){
        		 
        		 var url = 'http://localhost:8882/searchFlights?ori='+form.origin+'&des='+form.destinstion+'&d='+form.date;
        		 $http.get(url)
        	         .then(function(response) {
        	        	 ctrl.searchSuccess = true;
        	        	 ctrl.flights = response.data;
        	         }).catch(function (data) {
        	        	 ctrl.searchSuccess = false;
        	        	 ctrl.flights = [];
        	         });;
        	 };
         }
     });