import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Animais, Animal } from './animais';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private http: HttpClient) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Animais>{
    return this.http.get<Animais>(`${environment.apiPath}/${nomeDoUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal>{
    return this.http.get<Animal>(`${environment.apiPath}/photos/${id}`);
  }

  excluiAnimal(id: number): Observable<Animal>{
    return this.http.delete<Animal>(`${environment.apiPath}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean>{
    return this.http.post(`${environment.apiPath}/photos/${id}/like`, {}, {observe: 'response'}).pipe(
      mapTo(true),
      catchError(error => {
        return error.status === '304' ? of(false) : throwError(error);
      })
    )
  }
}
