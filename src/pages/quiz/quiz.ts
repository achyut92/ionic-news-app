import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import QuizList  from '../../../dataFeed/quiz';

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  items: Array<{}>;
  public answer:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = (<any>QuizList).quiz;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
