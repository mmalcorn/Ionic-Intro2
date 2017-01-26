import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the FeedList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feed-list',
  templateUrl: 'feed-list.html'
})
export class FeedListPage {

    // URL: string = "http://feeds.bbci.co.uk/news/rss.xml?edition=us";
    // XHRResponse: string = XHR2.send("GET", url, {});
    // Apperyio.response.success(XHRResponse.body, "text/xml");
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedListPage');
  }

}
