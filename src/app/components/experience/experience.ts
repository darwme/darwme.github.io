import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  template: `
    <section class="bg-slate-50 dark:bg-slate-900/30 px-10 md:px-20 lg:px-40 py-24" id="experience">
      <h2 class="text-3xl font-bold mb-16">Trayectoria Profesional</h2>
      <div class="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">

        <!-- TRAMARSA -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <span class="material-symbols-outlined text-sm">work</span>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-1">
              <time class="text-xs font-bold uppercase text-primary">2024 - Actualidad</time>
            </div>
            <h4 class="text-lg font-bold">Practicante de TI</h4>
            <p class="text-sm font-medium text-slate-500 mb-3">TRAMARSA — Bajo supervisión de consultor SAP corporativo</p>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Participación en proyecto de transformación digital enfocado en optimizar el flujo de documentos
              desde el sistema comercial hacia SAP y Sovos (SUNAT). Simplificación de la obtención de datos
              y estructuración de integraciones mediante APIs y BAPIs.
            </p>
          </div>
        </div>

        <!-- Formación -->
        <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
            <span class="material-symbols-outlined text-sm">school</span>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="flex items-center justify-between mb-1">
              <time class="text-xs font-bold uppercase text-primary">2019 - 2024</time>
            </div>
            <h4 class="text-lg font-bold">Ingeniería de Sistemas</h4>
            <p class="text-sm font-medium text-slate-500 mb-3">Universidad Nacional Mayor de San Marcos (UNMSM)</p>
            <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Formación sólida en arquitectura de software, bases de datos, redes y gestión de proyectos TI.
              Énfasis en soluciones empresariales y desarrollo de sistemas de información.
            </p>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {}
