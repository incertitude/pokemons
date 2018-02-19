import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import {Pokemon} from '../pokemon';
import {PokemonService} from '../../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css']
})
export class EditPokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private pokemonService: PokemonService) { }
  pokemon: Pokemon = null;
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.pokemonService.getpokemon(id)
                        .subscribe(data => this.pokemon = data);
  }
}
