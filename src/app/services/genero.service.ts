import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  private apiURL = 'http://localhost:3000/api/genero';

  constructor(private http: HttpClient) { }

  // Obtener todos los géneros
  fetchGenero(): Observable<any> {
    return this.http.get(this.apiURL);
  }

  // Crear un nuevo género
  postGenero(calles: any): Observable<any> {
    return this.http.post(this.apiURL, calles);
  }

  // Actualizar un género existente (necesita un ID de género)
  updateGenero(id_calles: string, calles: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id_calles}`, calles);
  }

  // Eliminar un género (necesita un ID de género)
  deleteGenero(id_calles: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id_calles}`);
  }
}
