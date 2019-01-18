import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
