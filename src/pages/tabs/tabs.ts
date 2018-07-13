import { Component } from '@angular/core';

import { ArticlePage } from '../article/article';
import { EventsPage } from '../events/events';
import { NewsPage } from '../news/news';
import { QuizPage } from '../quiz/quiz';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NewsPage;
  tab2Root = ArticlePage;
  tab3Root = EventsPage;
  tab4Root = QuizPage;

  constructor() {

  }
}
