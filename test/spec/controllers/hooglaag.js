'use strict';

describe('Controller: HooglaagCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsApp'));

  var HooglaagCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HooglaagCtrl = $controller('HooglaagCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HooglaagCtrl.awesomeThings.length).toBe(3);
  });
});
