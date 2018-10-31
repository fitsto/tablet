import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ClienteServiceProvider } from '../../providers/cliente-service/cliente-service';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { RutProvider } from '../../providers/rut/rut';
import { DigitalPage } from '../digital/digital';
import { EncuestaPage } from '../encuesta/encuesta';
import { GenioServiceProvider } from '../../providers/genio-service/genio-service';
import { ProductosPage } from '../productos/productos';

/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage implements OnInit {
  //cliente:clienteModel;
  porDigital: number = 0;
  rut:string = '';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public modalCtrl: ModalController,
    public clienteService: ClienteServiceProvider, 
    public rutService: RutProvider, 
    public genioService: GenioServiceProvider
  ) {
    /*this.cliente = clienteService.cliente;
    this.cliente.rut = clienteService.rut;
    this.cliente.dv = clienteService.dv;*/
    
    if(clienteService.rut && clienteService.dv){
      this.rut = rutService.formatear(clienteService.rut+'-'+clienteService.dv);
    }
    //this.cliente = new clienteModel(this.rut);
    
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ClientePage');
  }

  ngOnInit(){
    registerLocaleData(es);
  }

  goDigital():void{
    //this.clienteService.cliente = this.cliente;
    this.navCtrl.push(DigitalPage);
  }

  goEncuesta():void{
    this.genioService.terminarInteraccion(this.clienteService.cliente);
    //this.navCtrl.push(EncuestaPage);
    /*const modal = this.modalCtrl.create(EncuestaPage);
    modal.present();*/
    this.navCtrl.push(EncuestaPage);
  }

  goProductos():void{
    this.navCtrl.push(ProductosPage);
    
    //this.productosService.getProductos('PERSONAS');
  }

  rutChange(valor:any){
    this.clienteService.cliente.rut= valor;
  }
  
  onKeydown(event:any){
    if (event.key === "Enter") {
      this.clienteService.cliente.rut = this.rutService.formatear(this.clienteService.cliente.rut);
      //this.goPaginaCliente();
    }
  }

}
