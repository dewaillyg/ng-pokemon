import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{ pokemonList[1] }}!</h1>

    <router-outlet />
  `,
  standalone: false,
  styles: []
})

export class AppComponent implements OnInit {
  pokemonList: string[] = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemonName: string) {
    console.log(`Vous avez clické sur le Pokemon ${pokemonName}`);
  }
}