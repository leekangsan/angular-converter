'use strict';

describe('Service: converterManager', function () {

  // load the service's module
  beforeEach(module('converterApp'));

  // instantiate service
  var converterManager;
  beforeEach(inject(function (_converterManager_) {
    converterManager = _converterManager_;
  }));

  it('should be defined', function () {
    expect(!!converterManager).toBe(true);
  });

  it('should have 8 converters defined', function() {
    expect(Object.keys(converterManager.converters).length).toEqual(8);
  });

  it('should return the first converter if the one requested doesn\'t exist', function() {
    var converter        = converterManager.getConverter('temperature');
    var defaultConverter = converterManager.getConverter('fakeType');

    expect(converter).toEqual(defaultConverter);
  });
});