import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from '../pokemon';
import { POKEMONS } from '../mock-pokemon';
import {PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {

  constructor(private router: Router,
    private pokemonService: PokemonService) { }

  private pokemons: Pokemon[] = null;
  selectPokemon(pokemon: Pokemon): void {

    console.log('Vous avez selectionné ' + pokemon.name);
    const link = ['/pokemon/pok', pokemon.id];
    this.router.navigate(link);
}
ngOnInit() {
  this.pokemonService.getPokemons()
      .subscribe(data => this.pokemons = data);
}
}
