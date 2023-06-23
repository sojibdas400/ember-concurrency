import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task } from 'ember-concurrency';
import getRandomNumber from '../utils/get-random-number';

export default class DemoOneComponent extends Component {
  @action
  async getRandNumber() {
    this.getNumberTask.perform();
  }

  @task({ keepLatest: true }) *getNumberTask() {
    const randNum = yield getRandomNumber();
    if (randNum > 50) {
      throw new Error('something went wrong');
    }
    return randNum;
  }

  @action handleCancel() {
    this.getNumberTask.cancelAll();
  }
}
