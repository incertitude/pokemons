import {Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon';

@Injectable()
export class PokemonsService {
        // Retourne tous les pokémons
getPokemons(): Pokemon[] {
    return POKEMONS;
} // Retourne le pokémon avec l'identifiant passé en paramètre
getPokemon(id: number): Pokemon {
    const pokemons = this.getPokemons();
    let ta: Pokemon = null;
    pokemons.forEach(element => {
        if (id === element.id) {
          ta = element;
        }
    });
    return ta;
}
}
