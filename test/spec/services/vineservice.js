'use strict';

describe('Service: Vineservice', function () {

  // load the service's module
  beforeEach(module('vineApp'));

  // instantiate service
  var Vineservice;
  beforeEach(inject(function (_Vineservice_) {
    Vineservice = _Vineservice_;
  }));

  it('should do something', function () {
    expect(!!Vineservice).toBe(true);
  });

});
