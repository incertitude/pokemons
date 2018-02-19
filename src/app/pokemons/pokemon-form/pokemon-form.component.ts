import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonService} from '../../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  @Input() pokemon: Pokemon;
  types: Array<string>;
  constructor(private pokemonService: PokemonService,
  private router: Router) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypes();
    // this.types = this.pokemonsService.getPokemonTypes();
  }
  hasType (type: string): boolean {
    const index = this.pokemon.types.indexOf(type);
    if (index > -1) {
      return true;
    }
    return false;
  }
  selectType($event: any, type: string): void {
    const checked = $event.target.checked;
    if ( checked ) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }
  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }
  goBack() {
    const link = ['/pokemon', this.pokemon.id];
    this.router.navigate(link);
  }  // La méthode appelée lorsque le formulaire est soumis.
  onSubmit(): void {
    console.log('Submit form !');
    this.pokemonService.updatePokemon(this.pokemon)
                      .subscribe(() => this.goBack());
  }

}
