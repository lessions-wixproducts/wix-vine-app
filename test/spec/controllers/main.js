'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('vineApp'));

  var MainCtrl,
    scope,
    wixservice;
    var mySettings = {
      standAlone: false
    }

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    wixservice = jasmine.createSpyObj('wixService', ['navigate', 'pushState']);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Wixervice: wixservice,
      mySettings: mySettings
    });
  }));

  it('should call wixservice navigate with the given keyword', function () {
    scope.search('keyword');
    expect(wixservice.navigate).toHaveBeenCalledWith('keyword/6', jasmine.any(Function));
  });
});
