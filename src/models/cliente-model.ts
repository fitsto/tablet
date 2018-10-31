import { personaModel } from "./persona-model";

export class clienteModel extends personaModel{
    
    /*digital:{
        claveInternet:number;
        appPersonas:number;
        santanderPass: number;
        usoDigital:number;
        previred:number;
        sii:number;
    }*/


    constructor(
        rut: string = '',
        nombre:string = '',
        apellido:string = '',
        email:string = '',
        telefono:number = 569,
        public digital: any = {},
        public porcentajeDigital:number = 0,
        public planFuturo:any = []
    ){
        super(rut,nombre,apellido,email,telefono);
        digital.claveInternet = false;
        digital.appPersonas = false;
        digital.santanderPass = false;
        digital.usoDigital = false;
        digital.previred = false;
        digital.sii = false;
        planFuturo = [];
    }
  }