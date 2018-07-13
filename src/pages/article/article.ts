import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ArticleList  from '../../../dataFeed/articles';
import { ArticleDetailPage } from '../article-detail/article-detail'

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {
  items: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = (<any>ArticleList).articles;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(ArticleDetailPage, {
      item: item
    });
  }
}
