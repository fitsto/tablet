import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenioServiceProvider } from '../../providers/genio-service/genio-service';
import { ClienteServiceProvider } from '../../providers/cliente-service/cliente-service';
import { SantanderServiceProvider } from '../../providers/santander-service/santander-service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

/**
 * Generated class for the EncuestaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encuesta',
  templateUrl: 'encuesta.html',
})
export class EncuestaPage {
  public visible:boolean = true;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public genioService: GenioServiceProvider,
    public ClienteService: ClienteServiceProvider,
    public santanderService: SantanderServiceProvider,
    public toastService: ToastServiceProvider
    ) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad EncuestaPage');
    /*this.santanderService.resumenAtencion = '';
    this.santanderService.compromisos = '';*/
    if (this.navParams.get('rechazo')) {
      this.visible = false;
    }
  }

  enviarDataGenio():void{
    this.genioService.dataGenio.cliente.nombre = this.ClienteService.cliente.nombre;
    this.genioService.dataGenio.cliente.planFuturo = this.ClienteService.cliente.planFuturo;
    this.genioService.dataGenio.genio.telefono = this.genioService.genio.telefono;
    this.genioService.dataGenio.genio.nombre = this.genioService.genio.nombre;
    
    //console.log(this.genioService.dataGenio,this.genioService.genio,this.ClienteService.cliente);
    //console.log('dataGenio',JSON.stringify(this.genioService.dataGenio));
    //console.log('genio',JSON.stringify(this.genioService.genio));
    //console.log('cliente',JSON.stringify(this.ClienteService.cliente));

    // watch network for a disconnect

    //console.log(this.genioService.dataGenio);
    
    if (this.genioService.conectado) {
      this.genioService.enviarDatos();
    }

    if(!this.santanderService.db){
      this.toastService.presentToast('No se guardaron los datos de forma local');
      return;
    }
    this.santanderService.guardarDatos(this.genioService.dataGenio,this.genioService.genio,this.ClienteService.cliente,this.genioService.conectado).then(()=>{
      //this.toastService.presentToast('Atencion Guardada');
      let inicio:any = 1;
      this.navCtrl.popTo(inicio);
    }).catch((e)=>{
      this.toastService.presentToast('cliente, No se guardaron los datos de forma local');
    });
    
    
  }

}
