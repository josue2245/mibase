import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiURL = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  fetchUser(): Observable<any> {
    return this.http.get(this.apiURL); 
  }
  
  // Crear un nuevo usuario
  postUser(lugares: any): Observable<any> {
    return this.http.post(this.apiURL, lugares);
  }
  
  // Actualizar un usuario existente (necesita un ID de usuario)
  updateUser(id_lugares: string, lugares: any): Observable<any> {
    return this.http.put(`${this.apiURL}/${id_lugares}`, lugares);
  }
  
  // Eliminar un usuario (necesita un ID de usuario)
  deleteUser(id_lugares: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id_lugares}`);
  }
}
