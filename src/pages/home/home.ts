import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Usuario } from '../../models/Usuario';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public _teste:string = "Meu primeiro app web";

  constructor(public navCtrl: NavController) {
   
  }

  public Login() {

    alert("Teste");

    var usua_nome = "";
    var usua_senha = "";

    var u = new Usuario();
    u.ValidaUsuario(usua_nome, usua_senha);

    this.ControlPag();
  }

  ControlPag(){
    this.navCtrl.push(PrincipalPage);
  }

  //Método executando auto. no final do ciclo de vida da pag.
  ionViewDidLoad(){

  }

}
