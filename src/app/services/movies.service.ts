import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RespuestaMDB, RespuestaDetalle, RespuestaCreditos } from '../interfaces/interfaces';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string){
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  buscarPelicula(palabra: string){
    //   /search/movie
    return this.ejecutarQuery<RespuestaMDB>(`/search/movie?query=${palabra}`);
  }

  getPeliculaDetalle(id: string){
    return this.ejecutarQuery<RespuestaDetalle>(`/movie/${id}?a=1`);
  }

  getPeliculaCreditos(id: string){
    return this.ejecutarQuery<RespuestaCreditos>(`/movie/${id}/credits?a=1`);
  }
}
