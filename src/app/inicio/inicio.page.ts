import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BarcodeScanner } from 'capacitor-barcode-scanner';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre!: string;
  rut!: string;
  resultadoScan: any;


  constructor(public navCtrl: NavController/* , private barcodeScanner: BarcodeScanner */) { }

  

  ngOnInit() {
    var usuario = JSON.parse(localStorage.getItem('usuario')!);
    this.nombre = usuario.nombre; 
    this.rut = usuario.rut;
  }

  cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');

  }

  async scan(){
    this.resultadoScan = (await  BarcodeScanner.scan()).code;
    console.log("Resultado scan",JSON.parse(this.resultadoScan));
  }

}
