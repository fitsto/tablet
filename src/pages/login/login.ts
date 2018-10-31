import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenioServiceProvider } from '../../providers/genio-service/genio-service';
import { RutProvider } from '../../providers/rut/rut';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  sucursales:Array<string> = [
    'Bombero Ossa',
    'Santiago Downtown'
  ];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public genioService: GenioServiceProvider,
    public rutService: RutProvider,
    public toastService: ToastServiceProvider) {
      let datosLocal:string = localStorage.getItem('genio');
      let genio:any;
      if(datosLocal){
        genio = JSON.parse(datosLocal);
      }
      genioService.iniciarGenio(genio);
  }

  ionViewDidLoad() {
  }

  rutChange(valor:any){
    this.genioService.genio.rut= valor;
  }
  
  onKeydown(event:any){
    if (event.key === "Enter") {
      this.genioService.genio.rut = this.rutService.formatear(this.genioService.genio.rut);
      //this.goPaginaCliente();
    }
  }

  goHome(){
    if(this.genioService.genio.rut.length == 0){
      this.toastService.presentToast('Debes ingresar tu rut para continuar');
      return;
    }
    if(!this.rutService.validar(this.genioService.genio.rut)){
      this.toastService.presentToast('Rut Incorrecto');
      return;
    }
    let datosLocal:any = this.genioService.genio;
    datosLocal.sucursal = this.genioService.sucursal;
    localStorage.setItem('genio',JSON.stringify(datosLocal));
    this.navCtrl.push(HomePage);
  }
}
