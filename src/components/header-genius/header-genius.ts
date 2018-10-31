import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the HeaderGeniusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-genius',
  templateUrl: 'header-genius.html'
})
export class HeaderGeniusComponent {

  text: string;
  @Input() back:boolean = true;
  constructor(public navCtrl: NavController) {
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

  goBack():void{
    this.navCtrl.pop();
  }

}
