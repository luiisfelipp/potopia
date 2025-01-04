import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor() {}

  moments = [
    {
      type: 'foto',
      content: 'assets/potopia.png',
      description: 'Nuestro primer viaje juntos 💕',
    },
    {
      type: 'trivia',
      content: '¿Recuerdas dónde tuvimos nuestra primera cita?',
      answer: 'En el parque central 🌳',
    },
    {
      type: 'mensaje',
      content: 'Eres la razón por la que sonrío todos los días 🥰',
    },
    // Agrega más elementos
  ];

  currentMoment: any = null;

  showRandomMoment() {
    const randomIndex = Math.floor(Math.random() * this.moments.length);
    this.currentMoment = this.moments[randomIndex];
  }
  

}
