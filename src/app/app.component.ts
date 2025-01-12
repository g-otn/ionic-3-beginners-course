import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IntroPage } from "../pages/intro/intro";
import { ConfigProvider } from '../providers/config/config';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html',
  providers: [
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    configProvider: ConfigProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      const config = configProvider.getConfigData()

      console.log('old config:', config)

      if (!config || config.showSlide) {
        this.rootPage = IntroPage
        configProvider.setConfigData(false)
      } else {
        this.rootPage = TabsPage
      }

      console.log('new config:', configProvider.getConfigData())
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
