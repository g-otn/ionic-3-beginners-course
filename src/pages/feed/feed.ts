import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{
      //alert(num1 + num2);
  }

  ionViewDidLoad() {
      //this.somaDoisNumeros(10, 99);
  }

}
