import { Component, signal } from '@angular/core';
import Pelicula from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-taquilla',
  imports: [],
  templateUrl: './taquilla.component.html',
})
export class TaquillaComponent {

  peliculas = signal<Pelicula[]>([
    {
      titulo: 'Avatar: The Way of Water',
      sinopsis: 'Jake Sully vive con su nueva familia formada en Pandora, mientras que una antigua amenaza regresa para terminar lo que comenzó.',
      duracion: 192,
      horarios: ['14:00', '17:30', '21:00'],
      trailer: 'https://www.youtube.com/embed/5PSNL1qE6VY',
      poster: 'https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
      titulo: 'Oppenheimer',
      sinopsis: 'La historia de J. Robert Oppenheimer, el físico que lideró el Proyecto Manhattan durante la Segunda Guerra Mundial.',
      duracion: 180,
      horarios: ['15:00', '19:00', '22:30'],
      trailer: 'https://www.youtube.com/watch?v=MVvGSBKV504',
      poster: 'https://m.media-amazon.com/images/M/MV5BNTFlZDI1YWQtMTVjNy00YWU1LTg2YjktMTlhYmRiYzQ3NTVhXkEyXkFqcGc@._V1_.jpg'
    },
  ])

}
