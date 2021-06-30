import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario, Comentarios } from './comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }

  buscaComentario(id: number): Observable<Comentarios>{
    return this.http.get<Comentarios>(`${environment.apiPath}/photos/${id}/comments`);
  }

  incluiComentario(id: number, commentText: string): Observable<Comentario>{
    return this.http.post<Comentario>(`${environment.apiPath}/photos/${id}/comments`, {commentText});
  }
}
