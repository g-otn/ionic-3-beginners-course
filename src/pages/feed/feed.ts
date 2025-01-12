import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public lista_filmes = new Array<any>()
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MovieProvider
    ) {
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data => {
        const response = data as any;
        const objetoRetorno = JSON.parse(response._body)
        console.log(new Object(objetoRetorno))
        this.lista_filmes = objetoRetorno.results
      },
      error => {
        console.log(error)
      }
    )
  }

}
