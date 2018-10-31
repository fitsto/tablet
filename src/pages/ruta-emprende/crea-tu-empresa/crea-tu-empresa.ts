import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AntesPage } from './antes/antes';
import { VentajasPage } from './ventajas/ventajas';
import { PasosPage } from './pasos/pasos';
import { TiposPage } from './tipos/tipos';
import { EstructuraPage } from './estructura/estructura';
import { ConvienePage } from './conviene/conviene';
import { FirmaPage } from './firma/firma';
import { DomicilioPage } from './domicilio/domicilio';

/**
 * Generated class for the CreaTuEmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crea-tu-empresa',
  templateUrl: 'crea-tu-empresa.html',
})
export class CreaTuEmpresaPage {
  textUrl:string = 'Crea tu empresa';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreaTuEmpresaPage');
    //debugger;
  }
  
  goAntes():void{
    this.navCtrl.push(AntesPage);
  }

  goVentajas():void{
    this.navCtrl.push(VentajasPage);
  }

  goPasos():void{
    this.navCtrl.push(PasosPage);
  }

  goTipos():void{
    this.navCtrl.push(TiposPage);
  }

  goEstructura():void{
    this.navCtrl.push(EstructuraPage);
  }

  goSociedad():void{
    this.navCtrl.push(ConvienePage);
  }

  goFirma():void{
    this.navCtrl.push(FirmaPage);
  }

  goDomicilio():void{
    this.navCtrl.push(DomicilioPage);
  }
}
