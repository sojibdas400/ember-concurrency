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
    return yield getRandomNumber();
  }

  @action handleCancel() {
    this.getNumberTask.cancelAll();
  }
}
