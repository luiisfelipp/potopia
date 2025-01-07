import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
  
})
export class Tab1Page {
  // Lista de canciones con título, artista y enlace de Spotify
  playlist = [
    {
      title: 'Congratulations',
      artist: 'Mac Miller',
      img: "assets/cong.jpg",
      url: 'https://open.spotify.com/intl-es/track/1OubIZ0ARYCUq5kceYUQiO?si=ac258cd91cba42bf',
      text: "Love, love, love, mi divine feminine, ¿cómo no acordarme de ti con esta canción y su albúm? Eres demasiado divina para ser solo mía.",
      showText: false
    },
    {
      title: 'cómo dormiste?',
      artist: 'Rels b',
      img: "assets/comodormiste.PNG",
      url: 'https://open.spotify.com/intl-es/track/3fjN3y5x4hN53rykAN2LHQ?si=2fafe16e4fce4804',
      text: "Cómo dormiste bebé? me soñaste? anhelo el día en que despierte junto a tí, sabiendo que al siguiente te volveré a preguntar, cómo dormiste potito? 💕",
      showText: false
    },
    {
      title: 'Sweet',
      artist: 'Cygarettes after sex',
      img: "assets/ciga.jpg",
      url: 'https://open.spotify.com/intl-es/track/6ilc4vQcwMPlvAHFfsTGng?si=c19eb737029447f9',
      text: "Me encanta la paz que me das, es algo mágico. Cada vez que escuchaba esta canción soñaba con una paz que no esperaba encontrar nunca, hasta que te conocí.",
      showText: false
    },
    {
      title: 'Contigo',
      artist: 'Carlita Morrison',
      img: "assets/contigo.png",
      url: 'https://open.spotify.com/track/ID3',
      text: "Mientras aún ni si quiera te pedía pololeo, escuchaba esta canción y me sentía tan loco por tí, agradezco demasiado a la vida el haberme encontrado contigo. Sigo aún más loco por tí",
      showText: false
    }
    // Agrega más canciones aquí
  ];

  // Función para abrir el enlace de la canción en Spotify
  playSong(url: string) {
    window.open(url, '_blank');
  }
  //funcion para altyernear texto e imagen
  toggleText(song: any) {
    song.showText = !song.showText;
  }
}
