import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ClientePage } from '../../pages/cliente/cliente';

/**
 * Generated class for the FooterGeniusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer-genius',
  templateUrl: 'footer-genius.html'
})
export class FooterGeniusComponent{
  @Input() public inicio:any ;
  @Input() public texto:string;

  constructor(public navCtrl: NavController) {
    
  }

  goCliente():void{
    console.log(typeof this.inicio);
    this.navCtrl.push(ClientePage);
  }

}
