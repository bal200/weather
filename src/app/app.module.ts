import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SearchPage } from '../pages/search/search';
import { ContactPage } from '../pages/contact/contact';
import { WeatherPage } from '../pages/weather/weather';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpenWeatherProvider } from '../providers/open-weather/open-weather';
import { CitysProvider } from '../providers/citys/citys';

@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ContactPage,
    WeatherPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ContactPage,
    WeatherPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpenWeatherProvider,
    CitysProvider
  ]
})
export class AppModule {}
