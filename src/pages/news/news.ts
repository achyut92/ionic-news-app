import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsDetailPage } from '../news-detail/news-detail'
import NewList  from '../../../dataFeed/news';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  items: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = (<any>NewList).articles;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(NewsDetailPage, {
      item: item
    });
  }

}
