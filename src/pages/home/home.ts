import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ClienteServiceProvider } from '../../providers/cliente-service/cliente-service';
import { RutProvider } from '../../providers/rut/rut';
import { GenioServiceProvider } from '../../providers/genio-service/genio-service';
import { InicioRutaPage } from '../inicio-ruta/inicio-ruta';
import { EncuestaPage } from '../encuesta/encuesta';

//@IonicPage({name:'home', segment:'/'})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rut:string = '';
  
  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController, 
    public clienteService: ClienteServiceProvider,
    public rutService: RutProvider,
    public genioService: GenioServiceProvider
  ) {
    //this.rut = '1-9';
  }

  rutChange(valor:any){
    this.rut= valor;
  }

  presentToast(texto:string) {
    const toast = this.toastCtrl.create({
      message: texto,
      duration: 3000
    });
    toast.present();
  }

  onKeydown(event:any){
    if (event.key === "Enter") {
      this.rut = this.rutService.formatear(this.rut);
      this.goPaginaCliente();
    }
  }

  goPaginaCliente():void{
    this.clienteService.rut = null;
    this.clienteService.dv = null;
    this.clienteService.iniciarCliente(this.rut);
    this.genioService.iniciarInteraccionCliente();
    if(this.rut.length > 0){
      //this.clienteService.cliente.indicadores = null;
      //this.clienteService.cliente.ofertas = [];
      if(!this.rutService.validar(this.rut)){
        this.presentToast('Rut Incorrecto');
        return;
      }
      if(this.rut.indexOf('-')>0){
        if(!this.rut.split('-')[0]){
          return;
        }

        if(!this.rut.split('-')[1]){
          return;
        }
        this.clienteService.rut = parseInt(this.rut.split('-')[0].replace(/\./gi,''));
        this.clienteService.dv = this.rut.split('-')[1];

        /*this.clienteService.cargarCliente(this.clienteService.rut).subscribe((resp:any) => {
          if(resp.indicadores && resp.indicadores.length > 0){
            this.navCtrl.push(ClientePage);
            this.rut = '';
          }
        }, error => {
          console.warn('error: ', error);
        });*/
        this.navCtrl.push(InicioRutaPage);
      }
    }else{
      //this.presentToast('Debe ingresar rut de cliente para continuar');
      this.navCtrl.push(InicioRutaPage);
    }
    this.rut = '';
  }

  rechazo():void{
    this.clienteService.rut = null;
    this.clienteService.dv = null;
    this.clienteService.iniciarCliente(this.rut);
    this.genioService.iniciarInteraccionCliente();
    this.genioService.dataGenio.rechazo = true;
    this.genioService.terminarInteraccion(this.clienteService.cliente);
    this.navCtrl.push(EncuestaPage);
  }
}
