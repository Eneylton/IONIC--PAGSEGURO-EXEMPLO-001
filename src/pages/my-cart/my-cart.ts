import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CheckoutPage } from "../checkout/checkout";


@IonicPage({})
@Component({
  selector: 'page-my-cart',
  templateUrl: 'my-cart.html',
})
export class MyCartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToCheckout() {
    this.navCtrl.push(CheckoutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCartPage');
  }

}
