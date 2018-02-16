import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonsService} from './pokemons.service';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

@NgModule({
  imports: [
    CommonModule, PokemonRoutingModule, FormsModule
  ],
  declarations: [ListPokemonComponent,
    DetailPokemonComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent],
    providers: [ PokemonsService]
})
export class PokemonsModule { }
