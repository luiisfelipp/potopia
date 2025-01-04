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
      text: "Love, love, love, love, ¿cómo no acordarme de ti con esta canción y el albúm completo, si eres tan... divine feminine...",
      showText: false
    },
    {
      title: 'Canción Especial 2',
      artist: 'Artista 2',
      img: "assets/potopia.png",
      url: 'https://open.spotify.com/track/ID2',
      text: "123",
      showText: false
    },
    {
      title: 'Canción Especial 3',
      artist: 'Artista 3',
      img: "assets/potopia.png",
      url: 'https://open.spotify.com/track/ID3',
      text: "123",
      showText: false
    },
    {
      title: 'Canción Especial 4',
      artist: 'Artista 4',
      img: "assets/potopia.png",
      url: 'https://open.spotify.com/track/ID3',
      text: "123",
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
