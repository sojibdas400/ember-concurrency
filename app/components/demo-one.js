import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import getRandomNumber from '../utils/get-random-number';

export default class DemoOneComponent extends Component {
  @tracked
  displayNumber = null;

  @tracked
  isLoading = false;

  @action
  async getRandNumber() {
    this.isLoading = true;
    const randNum = await getRandomNumber();
    this.displayNumber = randNum;
    this.isLoading = false;
  }
}
