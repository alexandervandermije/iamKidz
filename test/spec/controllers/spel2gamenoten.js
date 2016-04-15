'use strict';

describe('Controller: Spel2gamenotenCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsApp'));

  var Spel2gamenotenCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Spel2gamenotenCtrl = $controller('Spel2gamenotenCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Spel2gamenotenCtrl.awesomeThings.length).toBe(3);
  });
});
