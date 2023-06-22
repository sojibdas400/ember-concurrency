import getRandomNumber from 'ember-concurrency/utils/get-random-number';
import { module, test } from 'qunit';

module('Unit | Utility | get-random-number', function () {
  // TODO: Replace this with your real tests.
  test('it works', function (assert) {
    let result = getRandomNumber();
    assert.ok(result);
  });
});
