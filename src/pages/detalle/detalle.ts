import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  public myTemplate: any = "";
  private htmlDetalle:string = this.navParams.get('html');
  public textUrl:string = this.navParams.get('textUrl');
  constructor(public navCtrl: NavController, public navParams: NavParams,http: HttpClient) {
    http.get(this.htmlDetalle,{responseType: 'text'}).subscribe((html:any)=>{
      this.myTemplate = html;
      //this.linkExt();
    });
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DetallePage');
  }

  linkExt(){
    debugger;
    let link = document.querySelector('.linkExterno');
      link.addEventListener('click', (e:any)=>{
        alert(1);
      });
  }
}
