import Component from '@glimmer/component';
import { action } from '@ember/object';
import { task } from 'ember-concurrency';
import getRandomNumber from '../utils/get-random-number';

export default class DemoOneComponent extends Component {
  @action
  async getRandNumber() {
    this.getNumberTask.perform();
  }

  @task *getNumberTask() {
    return yield getRandomNumber();
  }
}
