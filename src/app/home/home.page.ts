import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallesPeliculaComponent } from '../components/detalles-pelicula/detalles-pelicula.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  textoBuscar = '';

  buscando = false;

  peliculas: Pelicula[] = [];

  constructor(private service: MoviesService, private modalCtrl: ModalController) {}

  buscar(event){
    const valor: string = event.detail.value;
    if(valor.length > 0){
      this.buscando = true;
      this.service.buscarPelicula(valor).subscribe(
        resp => {
          this.peliculas = resp.results;
          this.buscando = false;
        }
      );
    }
  }

  async mostrarDetallesPelicula(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetallesPeliculaComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
