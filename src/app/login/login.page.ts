import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  async login() {
    if (!this.email || !this.password) {
      await this.showAlert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    // Aquí puedes agregar la lógica para autenticación (Firebase, API, etc.)
    console.log('Iniciando sesión con:', this.email, this.password);

    // Ejemplo de autenticación ficticia
    if (this.email === 'poto' && this.password === '07012024') {
      await this.showAlert('v1.0', 'Atención mi amor, esta es la primera versión de nuestra app, nos quedan demasiadas aventuras por registrar y atesorar. Con mucho cariño, de tu amorcito. Te amo mucho!');
      this.router.navigateByUrl('/tabs/tab2')
    } else {
      await this.showAlert('Error', 'Correo o contraseña incorrectos.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
