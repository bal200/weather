import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = AboutPage;

  constructor() {

  }
}
