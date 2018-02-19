import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Pokemon } from './pokemons/pokemon';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PokemonService {
  private _Url = 'api/pok';  // URL to web api

  constructor(  private http: HttpClient) { }

  getPokemons (): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this._Url)
                    .pipe(
                    tap(pokemons => this.log(`fetched pokemons`)),
                    catchError(this.handleError('get', []))
                    );
  }
  getpokemon (id: number): Observable<Pokemon> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Pokemon>(url)
                    .pipe(
                    tap(_ => this.log(`fetched pokemon id=${id}`)),
                    catchError(this.handleError<Pokemon>(`getpokemon id=${id}`))
                    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  updatePokemon (pokemon: Pokemon): Observable<any> {
    return this.http.put(this._Url, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${pokemon.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private log(message: string) {
    console.log(message);
  }

  getPokemonTypes(): Array<string> {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }
}
