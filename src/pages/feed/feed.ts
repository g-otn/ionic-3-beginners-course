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
  public objeto_feed = {
    titulo: "Gabriel Otani",
    data: "October 30, 2019",
    descricao: "Estou criando um app incrível!",
    qtd_likes: 200,
    qtd_comments: 5,
    time_comment: "15h ago"
  }
  
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
        const objetoRetorno = JSON.parse(response._body);
        console.log(new Object(objetoRetorno))
      },
      error => {
        console.log(error)
      }
    )
  }

}
