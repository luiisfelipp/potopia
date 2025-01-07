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
      date: "2023-10-02",
      icon: "assets/1salida.png",
      details: "Nuestra primera cita mi amorrr, no hay fotos de eso, pero está la foto de la moto que lavé esa misma mañana para gustarte de todas las maneras posibles JIIIIJI"
    },
    {
      title: "Segunda Salida",
      date: "2023-10-06",
      icon: "assets/2salida.png",
      details: "4 días después, un viernes, cumplía mi palabra llevandote a comer sushi en un picnic. Elegí esta foto porque sales haciendome cariñito en el pelo, eso me cautivó demasiado, y, en efecto, eres muy amorosa mi amor, me encanta lo tierna que eres y la forma en que me demuestras tu cariño."
    },
    {
      title: "El toyo",
      date: "2023-10-29",
      icon: "assets/3.png",
      details: "La salida al toyo en auto antes de que te fueras a tu misión ONU jij. Cositas pasaron por primera vez, ambos somos testigos de eso 🤤🤪"
    },
    {
      title: "Veintitrrrrrr",
      date: "2023-11-15",
      icon: "assets/4.png",
      details: "Esto es demasiado random, cuándo íbamos a saber que nos haríamos mejores amigos del Jordan 23 ese día? ajajaj. Esta era una de las señales del universo para advertirnos de seguir juntos por toda la eternidad, diversión asegurada (aparte de amor y puras cosas wenas) PD: mención a que perdí las llaves de la moto ese día, jej😬."
    },
    {
      title: "Buin",
      date: "2023-11-20",
      icon: "assets/5.png",
      details: "Nuestra primera rutita juntos potitooo. fue increíble. Tremendo culazo mi amor 😳. Ese día pactamos oficialmente nuestra exclusividad WIIIIIIIIIIII."
    },
    {
      title: "P0L0LO0O0OSSS",
      date: "2024-01-7",
      icon: "assets/6.png",
      details: "FINALMENTE POLOLOS CON MI POTOOOO. Luego de 3 meses, se hizo la propuesta, que fue aceptada obviamente, porque tremenda parejotaaaaa. Te amo mi wawitaaaaa 07-01-2024 JIII felicidad!!!!!!!!! a uno año de eso, oficialmente, mientras leas esto (o 1 año y 1 día potito, no sé aún jejej)"
    },
    {
      title: "No spoiler",
      date: "2024-01-26",
      icon: "assets/7.png",
      details: "No sé sio te acuerdas de este día potito, escogí esta foto porque tus ojos se ven demasiado hermosos, yo me enamoré nuevamente, tal como me pasa cada vez que te veo, pero esque mira tus ojitosss!!!! esta fue nuestra salida al MIM, qué lindo díaaaa"
    },
    {
      title: "SUR",
      date: "2024-02-10",
      icon: "assets/8.png",
      details: "Nuestras primeras vacaciones en el sur con mi potito, nos veíamos hermosos ese día, como siempre na má. TE AMO 💘."
    },
    {
      title: "San Valentín",
      date: "2024-02-14",
      icon: "assets/9.png",
      details: "Nuestro primer San Valentin juntos, te veías HERMOSIISISISIISIMAAAA. MUAKKKK 💘."
    },
    {
      title: "Insert Coin",
      date: "2024-03-22",
      icon: "assets/10P.png",
      details: "Un 22 de marzo te tomé esta foto, qué waxita preciosa mi amor, ese día fuimos a comer al insert coin jej💝."
    },
    {
      title: "Santo Domingo Lodge",
      date: "2024-03-31",
      icon: "assets/11.png",
      details: "La pasamos demasiado bien esa salida mi amorrr, QUE SE REPITAAAAAAA. Cositas pasaron en las tinajas😳😳😳😳. Simplemente inolvidable. Quiero seguir acumulando anécdotas contigo SIEMPRE."
    },
    {
      title: "Merecidisima escapada",
      date: "2024-12-22",
      icon: "assets/12.png",
      details: "Luego de un año bastante complejo, finalemente vacaciones. A pesar de que fue difícil, te mantuviste fuerte todo el tiempo, y diste cara en cada aspecto de tu vida, afrontando día tras día, eres increíblemente resiliente y fuerte. Te amo mucho mi amorcito, fue un salto tremendo hasta acá. Y RAWRRRRRR MI AMORCITO MEA FOTOOO Y MEO POTO, QUE COMÍ RICO ESE DÍAAAAAAAAAAAA"
    },
    {
      title: "Fin 2024",
      date: "2024-12-26",
      icon: "assets/13.png",
      details: "Una eternidad nos queda aún mi amor, que nuestra línea de tiempo crezca por siempre. Sé que faltaron muchas fechas, pero esque de ser así no terminaba nunca mi amor, porque cada día contigo es un regalito de la vida que es importantisimo para mí, me encanta demasiado estar contigo. Te amo por siempre💟."
    }
  ];

}
