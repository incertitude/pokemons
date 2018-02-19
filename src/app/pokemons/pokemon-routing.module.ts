import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

const pokemonsRoutes: Routes = [
{path: 'pokemon', component: ListPokemonComponent},
{path: 'pokemon/pok/:id', component: DetailPokemonComponent},
{path: 'pokemon/pok/edit/:id', component: EditPokemonComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
],
  exports: [
  RouterModule
]
})
export class PokemonRoutingModule { }
