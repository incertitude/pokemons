import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonsService) { }
  pokemon: Pokemon = null;
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.pokemon = this.pokemonService.getPokemon(id);
  }

}
