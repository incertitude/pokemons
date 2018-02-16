import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ShadowCardDirective } from './shadow-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { PokemonRoutingModule } from './pokemon-routing.module';

@NgModule({
  imports: [
    CommonModule, PokemonRoutingModule
  ],
  declarations: [ListPokemonComponent,
    DetailPokemonComponent,
    ShadowCardDirective,
    PokemonTypeColorPipe]
})
export class PokemonsModule { }
