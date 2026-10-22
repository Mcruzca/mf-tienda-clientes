import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-clientes',
  standalone: true,
  template: `
    <section>
      <small>REPOSITORIO 3 · código servido desde localhost:4202</small>
      <h2>Soy el microfrontend de clientes</h2>
      <p>Cliente: Ana Pérez</p><button (click)="activo.set(!activo())">Cambiar estado</button><p aria-live="polite">Estado: {{ activo() ? "Activo" : "Inactivo" }}</p>
      <p>Este estado pertenece al microfrontend y se reinicia al salir de la pantalla.</p>
    </section>
  `,
  styles: [`section { border: 2px solid #1d4ed8; background: #eff6ff; padding: 24px; border-radius: 12px; }
    button { background: #1d4ed8; color: white; border: 0; border-radius: 6px; padding: 12px 18px; cursor: pointer; }`],
})
export class ClientesComponent {
  activo = signal(true);
}
