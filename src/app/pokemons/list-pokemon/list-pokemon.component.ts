import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import {PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
  providers: [PokemonsService]
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router,
    private pokemonService: PokemonsService) { }
  pokemonsService: PokemonsService = this.pokemonsService;
  private pokemons: Pokemon[] = null;
  selectPokemon(pokemon: Pokemon): void {

    console.log('Vous avez selectionné ' + pokemon.name);
    const link = ['/pokemon', pokemon.id];
    this.router.navigate(link);
}
ngOnInit() {
  this.pokemons = this.pokemonService.getPokemons();
}
}
