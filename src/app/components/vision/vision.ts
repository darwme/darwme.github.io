import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [],
  template: `
    <section class="bg-primary text-slate-900 px-10 md:px-20 lg:px-40 py-24 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-5xl font-black mb-8 leading-tight">
          "Automatizar no es reemplazar personas. Es liberar su tiempo para lo que realmente importa."
        </h2>
        <p class="text-slate-800/80 font-medium text-lg">Lo que me impulsa a construir cada workflow y cada agente.</p>
      </div>
    </section>
  `
})
export class VisionComponent {}
