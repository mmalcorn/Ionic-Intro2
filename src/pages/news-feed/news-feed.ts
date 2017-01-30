import { Component, ViewChild } from '@angular/core';
import { NavController, Nav, AlertController } from 'ionic-angular';
import { FeedListPage } from '../feed-list/feed-list';
import { FeedService, Feed } from '../../providers/feed-service';

@Component({
  selector: 'page-news-feed',
  templateUrl: 'news-feed.html'
})
export class NewsFeedPage {
  @ViewChild(Nav) nav: Nav;

    rootPage = FeedListPage;
    feeds: Feed[];

//Things to research: What is an alert contoller, exactly?
    constructor(private navController: NavController, private feedService: FeedService, public alertCtrl: AlertController) {}

    public addFeed() {
      let prompt = this.alertCtrl.create({
        title: 'Add Feed URL',
        inputs: [
          {
            name: 'name',
            placeholder: 'Insert RSS Feed title here',
          },
          {
            name: 'url',
            placeholder: 'Add RSS link here, for example http://feeds.bbci.co.uk/news/science_and_environment/rss.xml?edition=uk'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Save',
            //Creates new feed object from the data
            handler: data => {
              let newFeed = new Feed(data.name, data.url);
                this.feedService.addFeed(newFeed).then(
                  res => {
                    this.loadFeeds();
                  }
                );
              }
          }
        ]
      });
      prompt.present();
    }

    private loadFeeds() {
      this.feedService.getSavedFeeds().then(
        allFeeds => {
          this.feeds = allFeeds;
        });
    }

    public openFeed(feed: Feed) {
      this.nav.setRoot(FeedListPage, {'selectedFeed': feed});
    }

    public ionViewWillEnter() {
      this.loadFeeds();
    }
}
