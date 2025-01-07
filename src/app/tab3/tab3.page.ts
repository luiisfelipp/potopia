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
      content: 'assets/papita.png',
      description: 'Papita avergonzada en nuestra segunda cita 💕',
    },
    {
      type: 'foto',
      content: 'assets/carls.png',
      description: 'Momento en el que me enamoré aún más de tu forma de ser, y obvio, porque CASI me ganas comiendo hamburguesita',
    },
    {
      type: 'foto',
      content: 'assets/estudio.png',
      description: 'Estudiando juntitos por primera vez💕💕',
    },
    {
      type: 'foto',
      content: 'assets/just.png',
      description: 'Just un par de locos enamorandose el uno al otro, siendo cómplices de la historia de amor más linda💕',
    },
    {
      type: 'foto',
      content: 'assets/viajecito.png',
      description: 'Nuestro viajecito a Santo Domingo, como simples mortales en bus ji💕',
    },
    {
      type: 'foto',
      content: 'assets/subete.png',
      description: 'Súbete a la moto vibes',
    },
    {
      type: 'trivia',
      content: '¿Recuerdas dónde tuvimos nuestra primera cita?',
      answer: 'Facilito potoooooo, Cajón del Maipo',
      showAnswer: false,
    },
    {
      type: 'trivia',
      content: '¿Qué estuve a punto de regalarte en vez de una pulsera para pedirte pololeo?',
      answer: 'Un anillo el intensoo 😁',
      showAnswer: false,
    },
    {
      type: 'trivia',
      content: '¿Cuánto te amo?',
      answer: 'MÁS QUE TÚ A MÍ😁',
      showAnswer: false,
    },
    {
      type: 'trivia',
      content: '¿Cuánto me amas?',
      answer: 'HARTO, MUCHO, PERO SIGUE SIENDO MENOS QUE YO A TÍ😁',
      showAnswer: false,
    },
    {
      type: 'mensaje',
      content: 'Eres la personita más linda que he conocido jamás, me encanta tu amor por las personas y cómo lo manifiestas 🥰',
    },
    {
      type: 'mensaje',
      content: 'Frase cliché pero TAN REAL, eres mi primer pensamiento al despertar y el último antes de dormir 💖 🥰',
    },
    {
      type: 'mensaje',
      content: 'Nunca me faltes por favor 😥😥',
    },
    {
      type: 'mensaje',
      content: 'Si lees esto es porque te amo más 😜😜😘😘',
    },
    {
      type: 'mensaje',
      content: 'ESTÁS MÁS LINDA QUE AYER, PERO MENOS QUE MAÑANA JIJI💞💞💞💞',
    },
    {
      type: 'mensaje',
      content: 'Si te vieras con mis ojos, también caerías loquita de amor por tí misma, nacería un concepto mucho más brígido que el de narciso mismoooooooo',
    },
    {
      type: 'mensaje',
      content: '*Léase cantando* Poooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto, pooooto poto poto poto',
    },
    
  ];

  currentMoment: any = null;

  showRandomMoment() {
    const randomIndex = Math.floor(Math.random() * this.moments.length);
    this.currentMoment = this.moments[randomIndex];
    const selectedMoment = { ...this.moments[randomIndex] }; // Clonamos para evitar referencia
    if (selectedMoment.type === 'trivia') {
      selectedMoment.showAnswer = false; // Reiniciamos showAnswer para trivia
    }
    this.currentMoment = selectedMoment;
    
  }
  //trivia
  showAnswer(currentMoment: any) {
    currentMoment.showAnswer = true;
  }

}
