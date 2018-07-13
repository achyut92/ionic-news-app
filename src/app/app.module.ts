import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ArticlePage } from '../pages/article/article';
import { EventsPage } from '../pages/events/events';
import { NewsPage } from '../pages/news/news';
import { QuizPage } from '../pages/quiz/quiz';
import { NewsDetailPage } from '../pages/news-detail/news-detail'
import { ArticleDetailPage } from '../pages/article-detail/article-detail'
import { EventDetailPage } from '../pages/event-detail/event-detail'

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ArticlePage,
    NewsPage,
    EventsPage,
    QuizPage,
    TabsPage,
    NewsDetailPage,
    ArticleDetailPage,
    EventDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ArticlePage,
    NewsPage,
    EventsPage,
    QuizPage,
    TabsPage,
    NewsDetailPage,
    ArticleDetailPage,
    EventDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
