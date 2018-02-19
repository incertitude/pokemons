import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import {PokemonService} from '../../pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null; // liste des pokémons de notre application
  constructor(private route: ActivatedRoute, private router: Router,
              private pokemonService: PokemonService,
              private location: Location) {}
       // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.

    ngOnInit(): void {
      // on initialise la liste de nos pokémons
    this.getPokemon();
    }
    getPokemon(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.pokemonService.getpokemon(id)
                        .subscribe(data => this.pokemon = data);
    }
    // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
    goBack(): void {
    this.goBack();
    }
    goEdit(pokemon: Pokemon): void {
      const link = ['/pokemon/pok/edit', pokemon.id];
      this.router.navigate(link);
    }
  }


