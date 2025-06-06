import { Component, signal } from '@angular/core';
import Pelicula from '../../interfaces/peliculas.interface';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
})
export class HomeComponent {

  estrenos = signal<Pelicula[]>([
    {
      titulo:'Bailarina',
      sinopsis: 'Ambientada durante los acontecimientos de John Wick: Chapter 3 – Parabellum, la película sigue a Eve Macarro (Ana de Armas), una asesina en formación que se adentra en las implacables tradiciones mortales de los Ruska Roma.',
      duracion: 125,
      horarios: ['15:20', '18:20', '21:25'],
      trailer: 'https://www.youtube.com/watch?v=FaFeDUxqxFw&embeds_referring_euri=https%3A%2F%2Fwww.cinemark.com.co%2F&embeds_referring_origin=https%3A%2F%2Fwww.cinemark.com.co&source_ve_path=OTY3MTQ',
      poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6809421ef08a73d861438dda/common/bailarina-103706-1748989605543'
    },
    {
      titulo:'Dan Da Dan',
      sinopsis: 'DAN DA DAN: EVIL EYE sigue a Momo, una estudiante de preparatoria proveniente de una familia de médiums, y a su compañero de clase Okarun, un fanático de lo oculto. Momo y Okarun se embarcan en su nueva aventura, viajando a una casa en un pueblo de aguas termales alquilada por Jiji, amigo de la infancia y antiguo amor de Momo, con el objetivo de resolver el misterio que rodea a su familia. Al llegar, unos extraños lugareños descarrilaron su investigación antes de que pudiera comenzar, y el grupo pronto descubre que se esconde algo más bajo la superficie del pueblo de lo que jamás imaginaron. Basado en el popular manga de Yukinobu Tatsu, DAN DA DAN es una electrizante y llena de acción, una carta de amor a la ciencia ficción y al terror con el corazón de una comedia romántica adolescente desternillante. En DAN DA DAN: EVIL EYE, los codirectores Abel Gongora y Fuga Yamashiro traen a los fans una nueva historia en la última serie del innovador estudio de animación Science SARU (The Colors Within, Scott Pilgrim Takes Off) con la trepidante música original de Kensuke Ushio (Chainsaw Man).',
      duracion: 95,
      horarios: ['18:35'],
      trailer: 'https://www.youtube.com/watch?v=Dk9tRbXkGzE',
      poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6827b7d58a942b4d928793a2/common/dan-da-dan-104199-1748989640004'
    },
    {
      titulo:'Lilo y Stitch',
      sinopsis: 'Una solitaria niña hawaiana se hace amiga de un extraterrestre fugitivo y ayuda a sanar a su fragmentada familia.',
      duracion: 110,
      horarios: ['13:50','16:35','19:25','22:15'],
      trailer: 'https://www.youtube.com/watch?v=Bg3MsXhzNzs&embeds_referring_euri=https%3A%2F%2Fwww.cinemark.com.co%2F&embeds_referring_origin=https%3A%2F%2Fwww.cinemark.com.co&source_ve_path=OTY3MTQ',
      poster: 'https://assets.cinemark-core.com/5db771be04daec00076df3f5/vista/movies/6809421ef08a73d861438dd3/common/lilo-y-stitch-103586-1748529561851'
    },
  ])

}
