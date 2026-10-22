import { Component } from '@angular/core';
import { ClientesComponent } from './clientes.component';

@Component({
  selector: 'app-root',
  imports: [ClientesComponent],
  template: '<h1>Clientes funciona por separado</h1><app-clientes />',
})
export class App {}

