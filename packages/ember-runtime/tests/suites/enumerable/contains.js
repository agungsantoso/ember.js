import { SuiteModuleBuilder } from '../suite';
import { isFeatureEnabled } from 'ember-metal';

const suite = SuiteModuleBuilder.create();

suite.module('contains');

suite.test('contains returns true if item is in enumerable', function() {
  let data = this.newFixture(3);
  let obj  = this.newObject(data);

  if (isFeatureEnabled('ember-runtime-enumerable-includes')) {
    expectDeprecation('`Enumerable#contains` is deprecated, use `Enumerable#includes` instead.');
  }
  equal(obj.contains(data[1]), true, 'should return true if contained');
});

suite.test('contains returns false if item is not in enumerable', function() {
  let data = this.newFixture(1);
  let obj  = this.newObject(this.newFixture(3));

  if (isFeatureEnabled('ember-runtime-enumerable-includes')) {
    expectDeprecation('`Enumerable#contains` is deprecated, use `Enumerable#includes` instead.');
  }
  equal(obj.contains(data[0]), false, 'should return false if not contained');
});

export default suite;
