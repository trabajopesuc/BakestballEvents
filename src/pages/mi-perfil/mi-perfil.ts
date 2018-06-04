import { Component } from '@angular/core';
import { miPerfilService} from '../../services/mi_perfil';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MiPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mi-perfil',
  templateUrl: 'mi-perfil.html',
})
export class MiPerfilPage {

  miPerfil: Array<any> = [];
    
  constructor(public navCtrl: NavController, public navParams: NavParams, public perfil: miPerfilService ) {
    this.miPerfil= perfil.getMiUsuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPerfilPage');
  }

}
