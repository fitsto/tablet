import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rut:string = '';
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  presentToast(texto:string) {
    const toast = this.toastCtrl.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

  goPaginaCliente():void{
    if(this.rut.length > 0){
      this.navCtrl.push('paginaCliente', {rut:this.rut});
    }else{
      this.presentToast('Debe ingresar rut de cliente para continuar');
    }
    
  }
}
