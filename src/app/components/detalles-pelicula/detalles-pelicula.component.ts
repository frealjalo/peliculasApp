import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { RespuestaDetalle, RespuestaCreditos, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.component.html',
  styleUrls: ['./detalles-pelicula.component.scss'],
})
export class DetallesPeliculaComponent implements OnInit {

  @Input() id;

  detalles: RespuestaDetalle = {};
  actores: Cast[] = [];

  oculto = 180;

  slideOptActor = {
    slidesPerView: 3.3,
    freeMode:true,
    spaceBetween:-5
  };

  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe( resp => {
      this.detalles = resp;
    });

    this.moviesService.getPeliculaCreditos(this.id)
    .subscribe(resp => {
      this.actores = resp.cast;
    });

  }

  regresar(){
    this.modalCtrl.dismiss();
  }

}
