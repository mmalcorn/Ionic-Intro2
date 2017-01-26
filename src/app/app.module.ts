import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { NewsFeedPage } from '../pages/news-feed/news-feed';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedListPage } from '../pages/feed-list/feed-list';
import { FeedService } from '../providers/feed-service';
import { Storage } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyDZt_S1vngS8ulgK2Ne0fVth8imvDoiVvc",
    authDomain: "ionic-junto.firebaseapp.com",
    databaseURL: "https://ionic-junto.firebaseio.com",
    storageBucket: "ionic-junto.appspot.com",
    messagingSenderId: "59140343196"
};

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    NewsFeedPage,
    HomePage,
    TabsPage,
    HomePage,
    FeedListPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    NewsFeedPage,
    HomePage,
    TabsPage,
    HomePage,
    FeedListPage
  ],
  providers:
  [FeedService, Storage]
})
export class AppModule {}
