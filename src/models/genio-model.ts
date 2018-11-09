import { personaModel } from "./persona-model";
import { clienteModel } from "./cliente-model";

export class genioModel{
    horaTermino:string;
    cliente:clienteModel;
    intereses: Array<any>;

    constructor(
      public interaccionId:string,
      public sucursal:string,
      public fecha:string,
      public horaInicio:string,
      public genio:personaModel,
      public encuesta:any = {},
      public rechazo:boolean = false
    ){
      encuesta.perfil = '';
      encuesta.edad = '';
      encuesta.esCliente = false;
      encuesta.sexo = '';
      encuesta.ocupacion = '';
      encuesta.uso = [];
      encuesta.resumenAtencion = '';
      encuesta.compromisos = '';
      this.intereses = [];
    }
  }
  