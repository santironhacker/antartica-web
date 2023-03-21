import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet/character-sheet.component';

const routes: Routes = [
  { path: 'character-sheet', component: CharacterSheetComponent },
  { path: '',   redirectTo: '/character-sheet', pathMatch: 'full' },
  { path: '**', component: CharacterSheetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
