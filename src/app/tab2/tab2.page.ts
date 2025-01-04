import { Component } from '@angular/core';
import { EventDetailsComponent } from '../modal/event-details/event-details.component';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  constructor(private modalCtrl: ModalController) {}
  
  async showDetails(event: any) {
    const modal = await this.modalCtrl.create({
      component: EventDetailsComponent,
      componentProps: { event },
      cssClass: 'custom-modal'
    });
    await modal.present();
  }
  events = [
    {
      title: "Primera Cita",
      date: "2022-01-15",
      icon: "assets/potopia.png",
      details: "Nuestra primera cita en el parque, ¡fue inolvidable!"
    },
    {
      title: "Primer Viaje",
      date: "2022-06-10",
      icon: "assets/potopia.png",
      details: "Ese viaje increíble a la playa que siempre recordaremos."
    },
    {
      title: "Primer Viaje",
      date: "2022-06-10",
      icon: "assets/potopia.png",
      details: "Ese viaje increíble a la playa que siempre recordaremos."
    },
    {
      title: "Primer Viaje",
      date: "2022-06-10",
      icon: "assets/potopia.png",
      details: "Ese viaje increíble a la playa que siempre recordaremos."
    },
    {
      title: "Primer Viaje",
      date: "2022-06-10",
      icon: "assets/potopia.png",
      details: "Ese viaje increíble a la playa que siempre recordaremos."
    }
  ];

}
