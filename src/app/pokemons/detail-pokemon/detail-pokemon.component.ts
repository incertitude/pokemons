import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import {PokemonsService} from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null; // liste des pokémons de notre application
  constructor(private route: ActivatedRoute, private router: Router,
              private pokemonService: PokemonsService) {}
       // on injecte 'route' pour récupérer les paramètres de l'url, et 'router' pour rediriger l'utilisateur.

    ngOnInit(): void {
      // on initialise la liste de nos pokémons
      this.route.params.forEach((params: Params) => {
        const id = +params['id'];
        this.pokemon = this.pokemonService.getPokemon(id);
         // on utilise le service pour récupérer un pokémon en fonction de son identifiant.
      });
    }
    // Méthode permettant de rediriger l'utilisateur vers la page principale de l'application.
    goBack(): void {
    this.router.navigate(['/pokemons']);
    }
    goEdit(pokemon: Pokemon): void {
      const link = ['/pokemon/edit', pokemon.id];
      this.router.navigate(link);
    }
  }


