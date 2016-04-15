'use strict';

describe('Controller: FlesjesCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsApp'));

  var FlesjesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FlesjesCtrl = $controller('FlesjesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FlesjesCtrl.awesomeThings.length).toBe(3);
  });
});
