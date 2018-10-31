import { Component, Input, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the BreadCrumbComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bread-crumb',
  templateUrl: 'bread-crumb.html'
})
export class BreadCrumbComponent implements OnInit {

  private views:Array<any>;
  public breads:Array<any> = [];
  @Input() public inicio:any;
  @Input() public texto:string;

  constructor(private navCtrl: NavController) {
    this.views = navCtrl.getViews();
  }

  ngOnInit(){
    this.iniciar(this.inicio, this.texto);
  }

  iniciar(inicio:any, texto:string):void{
    let activo:boolean = false;
    if (!this.inicio) {
      activo = true;
    }
    for (let index = 0; index < this.views.length; index++) {
      const element = this.views[index];
      let texto:string = element.name;
      let link:boolean = true;

      if (element.name == inicio) {
        activo = true;
      }

      if ((typeof inicio)=='object') {
        if (inicio.find(el=> el === element.name)) {
          activo = true;
        };
      }

      if (this.texto && element.instance[this.texto]) {
        texto = element.instance[this.texto];
      }

      if ((index+1) == this.views.length) {
        link = false;
      }

      if (activo) {
        let bread:any = {
          texto: texto,
          idx: index,
          link:link
        }

        this.breads.push(bread);
      }
    }
  }

  goBread(idx:any, link:boolean):void{
    if (link) {
      this.navCtrl.popTo(idx)
    }
  }
}
