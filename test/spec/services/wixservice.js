'use strict';

describe('Service: Wixservice', function () {

  // load the service's module
  beforeEach(module('vineApp'));

  // instantiate service
  var Wixservice;
  beforeEach(inject(function (_Wixservice_) {
    Wixservice = _Wixservice_;
  }));

  it('should do something', function () {
    expect(!!Wixservice).toBe(true);
  });

});
