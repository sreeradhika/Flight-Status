describe("mainApp", function() {

	beforeEach(module('searchFormModule'));

    var $controller;
	beforeEach(inject(function($injector) {
		$controller = $injector.get('$controller');
	}));

	it("loads a component", function() {
		var controller = $component('searchFormComponent')
	});

}