import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FeedListPage } from '../pages/feed-list/feed-list';
import { FeedService } from '../providers/feed-service';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    HomePage,
    FeedListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    ContactPage,
    HomePage,
    TabsPage,
    HomePage,
    FeedListPage
  ],
  providers: [FeedService, Storage]
})
export class AppModule {}
