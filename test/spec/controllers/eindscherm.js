'use strict';

describe('Controller: EindschermCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsApp'));

  var EindschermCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EindschermCtrl = $controller('EindschermCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EindschermCtrl.awesomeThings.length).toBe(3);
  });
});
