import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section class="px-10 md:px-20 lg:px-40 py-20 md:py-32 flex flex-col items-start gap-8">
      <div class="max-w-3xl">
        <span class="text-primary font-bold tracking-widest uppercase text-xs">Ingeniero de Sistemas · Egresado UNMSM</span>
        <h1 class="mt-4 text-5xl md:text-7xl font-black leading-tight tracking-tighter">
          Desarrollo web,<br/>
          <span class="text-primary/60">automatización &amp; agentes IA.</span>
        </h1>
        <p class="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          Construyo backends, flujos automatizados y agentes inteligentes que resuelven
          problemas reales. De la integración SAP a chatbots con IA — conecto sistemas
          y hago que las cosas sucedan.
        </p>
        <div class="mt-10 flex gap-4">
          <a
            class="bg-primary text-slate-900 px-8 py-4 rounded-lg font-bold text-base hover:shadow-lg hover:shadow-primary/20 transition-all"
            href="#projects"
          >
            Ver proyectos
          </a>
          <a
            class="border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-lg font-bold text-base hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            href="#contact"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}
