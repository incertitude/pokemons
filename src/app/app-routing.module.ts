import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-notfound';

// routes
const appRoutes: Routes = [
{ path: '', redirectTo: 'pokemon', pathMatch: 'full' },
{ path : '**', component : PageNotFoundComponent}
];

@NgModule({
imports: [
    RouterModule.forRoot(appRoutes)
],
exports: [
    RouterModule
]
})
export class AppRoutingModule { }
