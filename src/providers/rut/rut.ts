import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RutProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RutProvider Provider');
  }

  quitarFormato(rut:string):string{
    let strRut: string = rut;
    while( strRut.indexOf(".") != -1 )
    {
      strRut = strRut.replace(".","");
    }
    while( strRut.indexOf("-") != -1 )
    {
      strRut = strRut.replace("-","");
    }
    return strRut;
  } /* quitarFormato */

  formatear(rut:string, digitoVerificador?:boolean):string{
    let sRut:string = rut;
    let sRutFormateado:string = '';
    let sDV:string;
    sRut = this.quitarFormato(sRut);
    if (digitoVerificador == undefined) digitoVerificador = true;
    if(digitoVerificador){
      sDV = sRut.charAt(sRut.length-1);
      sRut = String(parseFloat(sRut.substring(0, sRut.length-1)));
    }
    while( sRut.length > 3 )
    {
      sRutFormateado = "." + sRut.substr(sRut.length - 3) + sRutFormateado;
      sRut = sRut.substring(0, sRut.length - 3);
    }
    sRutFormateado = sRut + sRutFormateado;
    if(sRutFormateado != "" && digitoVerificador)
    {
      sRutFormateado += "-"+sDV;
    }
    else if(digitoVerificador)
    {
      sRutFormateado += sDV;
    }
    return sRutFormateado;
  } /* formatear */

  digitoValido(dv:string):boolean{
    if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4'
      && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9'
      && dv != 'k'  && dv != 'K')
    {  
      return false;
    }
    return true;
  
  } /* digitoValido */

  getDigito(rut:string):string{
    //let dvr:string = '0';
    let suma:number = 0;
    let mul:number  = 2;
    for(let i=rut.length -1;i >= 0;i--)
    {
      suma = suma + parseFloat(rut.charAt(i)) * mul;   
      if (mul == 7)
      {
        mul = 2;
      }  
      else
      {        
        mul++;
      }
    }
    let res:number = suma % 11; 
    if (res==1)
    {
      return 'k';
    }
    else if(res==0)
    {  
      return '0';
    }
    else 
    {  
      return String(11-res);
    }
  } /* getDigito */

  digitoCorrecto (crut:string):boolean{
    let rut:string;
    let dvr:string;
    let largo:number = crut.length;
    if ( largo < 2 ) 
    {  
      return false;
    }
    if(largo > 2)
    {
      rut = crut.substring(0, largo - 1);
    }
    else
    {  
      rut = crut.charAt(0);
    }
    let dv:string = crut.charAt(largo-1);
    this.digitoValido(dv); 
    if(rut == null || dv == null)
    {
      return false;
    }
    dvr = this.getDigito(rut);
    if (dvr != dv.toLowerCase()) 
    {  
      return false;
    }
    return true;
  
  } /* digitoCorrecto */

  validar(texto:string):boolean{
    let i:number=0;
    let j:number=0;
    texto = this.quitarFormato(texto);
    let largo:number = texto.length;
    // rut muy corto
    if ( largo < 2 ) 
    {
      return false;
    }
    // verifica que los numeros correspondan a los de rut
    for ( i=0; i < largo ; i++ )
    {  
      // numero o letra que no corresponda a los del rut
      if(!this.digitoValido(texto.charAt(i)))
      {    
        return false;
      }
    }
    let invertido:string = "";
    for(i=(largo-1),j=0; i>=0; i--,j++)
    {
      invertido = invertido + texto.charAt(i);
    }
    let dtexto:string = "";
    dtexto = dtexto + invertido.charAt(0);
    dtexto = dtexto + '-'; 
    let cnt:number = 0; 
    for (i=1,j=2; i<largo; i++,j++ )
    {
      if ( cnt == 3 )  
      {    
        dtexto = dtexto + '.';     
        j++;     
        dtexto = dtexto + invertido.charAt(i);     
        cnt = 1;   
      }
      else   
      {      
        dtexto = dtexto + invertido.charAt(i);     
        cnt++;   
      }
    }
    invertido = "";
    for (i=(dtexto.length-1),j=0; i>=0; i--,j++)
    {  
      invertido = invertido + dtexto.charAt(i);
    }
    if (this.digitoCorrecto(texto))
    {  
      return true;
    }
    return false;
  } /* validar */
}
