import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { genioModel } from '../../models/genio-model';
import { personaModel } from '../../models/persona-model';
import { clienteModel } from '../../models/cliente-model';
import { SQLiteObject } from '@ionic-native/sqlite';
import { ToastServiceProvider } from '../toast-service/toast-service';

/*
  Generated class for the SantanderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SantanderServiceProvider {
  
  public resumenAtencion:string = '';
  public compromisos:string = '';
  dataGenio:genioModel;
  
  db: SQLiteObject = null;
  constructor(public http: HttpClient, public toastService: ToastServiceProvider) {
    //console.log('Hello SantanderServiceProvider Provider');
  }

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }  

  createTable(){
    this.crearTablaInteraccion();
    this.crearTablaGenio();
    this.crearTablaEncuesta();
    this.crearTablaCliente();
  }

  crearTablaInteraccion(){
    let sql = `
      CREATE TABLE IF NOT EXISTS  interaccion(
        interaccionId TEXT,
        sucursal TEXT,
        fecha TEXT,
        horaInicio TEXT,
        rechazo TEXT,
        intereses TEXT,
        horaTermino TEXT,
        conectado TEXT
      )
    `;
    return this.db.executeSql(sql, []);
  }
  
  crearTablaGenio(){
    let sql = `
      CREATE TABLE IF NOT EXISTS  genio(
        interaccionId TEXT,
        rut TEXT,
        nombre TEXT,
        apellido TEXT,
        email TEXT,
        telefono TEXT
      )
    `;
    return this.db.executeSql(sql, []);
  }

  crearTablaEncuesta(){
    let sql = `
      CREATE TABLE IF NOT EXISTS  encuesta(
        interaccionId TEXT,
        perfil TEXT,
        edad TEXT,
        esCliente TEXT,
        sexo TEXT,
        ocupacion TEXT,
        uso TEXT,
        resumenAtencion TEXT,
        compromisos TEXT
      )
    `;
    return this.db.executeSql(sql, []);
  }

  crearTablaCliente(){
    let sql = `
      CREATE TABLE IF NOT EXISTS  cliente(
        interaccionId TEXT,
        rut TEXT,
        nombre TEXT,
        apellido TEXT,
        email TEXT,
        telefono TEXT,
        claveInternet TEXT,
        appPersonas TEXT,
        santanderPass TEXT,
        usoDigital TEXT,
        previred TEXT,
        sii TEXT,
        porcentajeDigital TEXT,
        planFuturo TEXT
      )
    `;
    return this.db.executeSql(sql, []);
  }

  
  guardarDatosGeniusBank(datos:any){
    if(!this.db){
      this.toastService.presentToast('No se guardaron los datos de forma local');
      return;
    }
    return this.insertInteraccion(datos).then(()=>{
      return this.insertGenio(datos).then(()=>{
        return this.insertEncuesta(datos).then(()=>{
          return this.insertCliente(datos);
        }).catch((e)=>{
          this.toastService.presentToast('encuesta, No se guardaron los datos de forma local');
        });
      }).catch((e)=>{
        this.toastService.presentToast('genio, No se guardaron los datos de forma local');
      });
    }).catch((e)=>{
      this.toastService.presentToast('interaccion, No se guardaron los datos de forma local');
    });
  }
  
  insertInteraccion(interaccion:any){
    let sql = `
    INSERT INTO interaccion (
      interaccionId, 
      sucursal, 
      fecha, 
      horaInicio, 
      rechazo, 
      intereses, 
      horaTermino,
      conectado
    ) VALUES (
      '${interaccion.interaccionId}', 
      '${interaccion.sucursal}', 
      '${interaccion.fecha}', 
      '${interaccion.horaInicio}', 
      '${interaccion.rechazo}', 
      '${interaccion.intereses}', 
      '${interaccion.horaTermino}',
      '${interaccion.conectado}'
    )
    `;
    return this.db.executeSql(sql, []);
  }

  insertGenio(interaccion:any){
    let sql = `
    INSERT INTO genio (
      interaccionId, 
      rut, 
      nombre, 
      apellido, 
      email, 
      telefono
    ) VALUES (
      '${interaccion.interaccionId}', 
      '${interaccion.genio.rut}', 
      '${interaccion.genio.nombre}', 
      '${interaccion.genio.apellido}', 
      '${interaccion.genio.email}', 
      '${interaccion.genio.telefono}'
    )
    `;
    return this.db.executeSql(sql, []);
  }


  insertEncuesta(interaccion:any){
    let uso:string = interaccion.encuesta.uso.join(';');
    let sql = `
    INSERT INTO encuesta (
      interaccionId, 
      perfil, 
      edad, 
      esCliente, 
      sexo, 
      ocupacion, 
      uso, 
      resumenAtencion, 
      compromisos
    ) VALUES (
      '${interaccion.interaccionId}', 
      '${interaccion.encuesta.perfil}', 
      '${interaccion.encuesta.edad}', 
      '${interaccion.encuesta.esCliente}', 
      '${interaccion.encuesta.sexo}', 
      '${interaccion.encuesta.ocupacion}', 
      '${uso}', 
      '${interaccion.encuesta.resumenAtencion}', 
      '${interaccion.encuesta.compromisos}'
    )
    `;
    return this.db.executeSql(sql, []);
  }

  insertCliente(interaccion:any){
    let planFuturo:string = interaccion.cliente.planFuturo.join(';');
    let sql = `
    INSERT INTO cliente (
      interaccionId, 
      rut, 
      nombre, 
      apellido, 
      email, 
      telefono, 
      claveInternet, 
      appPersonas, 
      santanderPass, 
      usoDigital, 
      previred, 
      sii, 
      porcentajeDigital, 
      planFuturo
      ) VALUES (
        '${interaccion.interaccionId}', 
        '${interaccion.cliente.rut}', 
        '${interaccion.cliente.nombre}', 
        '${interaccion.cliente.apellido}', 
        '${interaccion.cliente.email}', 
        '${interaccion.cliente.telefono}', 
        '${interaccion.cliente.digital.claveInternet}', 
        '${interaccion.cliente.digital.appPersonas}', 
        '${interaccion.cliente.digital.santanderPass}', 
        '${interaccion.cliente.digital.usoDigital}', 
        '${interaccion.cliente.digital.previred}', 
        '${interaccion.cliente.digital.sii}', 
        '${interaccion.cliente.digital.porcentajeDigital}', 
        '${planFuturo}'
        )
    `;
    return this.db.executeSql(sql, []);
  }

  /*
  getAll(){
    let sql = 'SELECT * FROM tasks';
    return this.db.executeSql(sql, [])
    .then(response => {
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }

  create(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed]);
  }
  */

  guardarDatos(
    datosGenio:genioModel,
    genio: personaModel,
    cliente:clienteModel,
    conectado:boolean){
    this.dataGenio = datosGenio;
    this.dataGenio.genio = genio;
    this.dataGenio.cliente = cliente;
    
    let datos:any = this.dataGenio;
    datos.encuesta.resumenAtencion = this.resumenAtencion;
    datos.encuesta.compromisos = this.resumenAtencion;
    datos.conectado = conectado;
    console.log(datos);
    console.log(JSON.stringify(datos));
    console.log(this.db);
    if(!this.db){
      this.toastService.presentToast('No se guardaron los datos de forma local');
      return;
    }
    return this.guardarDatosGeniusBank(datos);
    /*console.log(this.dataGenio);
    console.log(this.resumenAtencion);
    console.log(this.compromisos);*/
  }

}
