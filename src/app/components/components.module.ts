import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesPeliculaComponent } from './detalles-pelicula/detalles-pelicula.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  entryComponents:[
    DetallesPeliculaComponent
  ],
  declarations: [
    DetallesPeliculaComponent
  ],
  exports: [
    DetallesPeliculaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }
