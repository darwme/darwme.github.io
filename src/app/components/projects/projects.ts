import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <section class="px-10 md:px-20 lg:px-40 py-24" id="projects">
      <div class="flex justify-between items-end mb-12">
        <h2 class="text-3xl font-bold">Proyectos Destacados</h2>
        <a class="text-primary font-bold text-sm hover:underline" href="https://github.com/darwme" target="_blank" rel="noopener">Ver en GitHub</a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- AAMP -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-video mb-6 relative flex items-center justify-center">
            <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
            <span class="material-symbols-outlined text-primary/30 group-hover:text-primary/50 transition-colors" style="font-size: 7rem;">smart_toy</span>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">AAMP — Asistente para Madres Primerizas</h3>
          <p class="text-slate-500 text-sm mb-4">
            Chatbot / agente IA de apoyo para madres primerizas. Backend en TypeScript con Docker,
            base de datos SQL, y frontend independiente. Proyecto full-stack con arquitectura
            orientada a servicios conversacionales.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">TypeScript</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Agente IA</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">T-SQL</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Docker</span>
          </div>
        </div>

        <!-- asistencia_ia -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-video mb-6 relative flex items-center justify-center">
            <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
            <span class="material-symbols-outlined text-primary/30 group-hover:text-primary/50 transition-colors" style="font-size: 7rem;">psychology</span>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Sistema de Asistencia con IA</h3>
          <p class="text-slate-500 text-sm mb-4">
            Sistema Python que combina procesamiento de datos de estudiantes con capacidades de
            inteligencia artificial. Carga desde CSV, lógica de asistencia automatizada y
            despliegue con Docker.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Python</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">IA</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Docker</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Automatización</span>
          </div>
        </div>

        <!-- Integración SAP–Sovos -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-video mb-6 relative flex items-center justify-center">
            <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
            <span class="material-symbols-outlined text-primary/30 group-hover:text-primary/50 transition-colors" style="font-size: 7rem;">sync_alt</span>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Integración SAP – Sovos (SUNAT)</h3>
          <p class="text-slate-500 text-sm mb-4">
            Optimización del flujo de documentos desde el sistema comercial hacia SAP y Sovos
            en TRAMARSA. Extracción y estructuración de datos vía SAP BAPIs y APIs REST
            para cumplimiento tributario electrónico.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">SAP BAPI</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">C#</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">API REST</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Sovos</span>
          </div>
        </div>

        <!-- n8n workflows -->
        <div class="group cursor-pointer">
          <div class="overflow-hidden rounded-xl bg-slate-200 dark:bg-slate-800 aspect-video mb-6 relative flex items-center justify-center">
            <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors z-10"></div>
            <span class="material-symbols-outlined text-primary/30 group-hover:text-primary/50 transition-colors" style="font-size: 7rem;">account_tree</span>
          </div>
          <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Flujos de Automatización con n8n</h3>
          <p class="text-slate-500 text-sm mb-4">
            Diseño de workflows con n8n para automatizar procesos de negocio: notificaciones,
            sincronización de datos entre sistemas, triggers basados en eventos y orquestación
            de agentes IA.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">n8n</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Workflows</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Bots</span>
            <span class="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded text-[10px] font-bold uppercase tracking-wider">Integración</span>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {}
