import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import EventList  from '../../../dataFeed/events';
import { EventDetailPage } from '../event-detail/event-detail'

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
  items: Array<{}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = (<any>EventList).event;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  itemTapped(event, item) {
    this.navCtrl.push(EventDetailPage, {
      item: item
    });
  }
}
