import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { PagseguroProvider } from '../../providers/pagseguro/pagseguro';

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private pagseg: PagseguroProvider) {

    this.pagseg.iniciar("purezanegocios@gmail.com", "54D78E8346234B2FA6F2F9E17CA706DD", true);

  }

}
