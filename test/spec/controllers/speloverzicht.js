'use strict';

describe('Controller: SpeloverzichtCtrl', function () {

  // load the controller's module
  beforeEach(module('kidsApp'));

  var SpeloverzichtCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeloverzichtCtrl = $controller('SpeloverzichtCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpeloverzichtCtrl.awesomeThings.length).toBe(3);
  });
});
