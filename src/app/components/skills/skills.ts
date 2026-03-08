import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    <section class="px-10 md:px-20 lg:px-40 py-24" id="skills">
      <h2 class="text-3xl font-bold mb-12 text-center">Stack Técnico</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <!-- Backend & Web -->
        <div class="p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
          <span class="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">code</span>
          <h3 class="text-xl font-bold mb-4">Backend &amp; Web</h3>
          <ul class="space-y-3 text-slate-500">
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> C# / .NET — APIs REST</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Python — scraping &amp; scripts</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Angular / TypeScript</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Entity Framework / SQL</li>
          </ul>
        </div>

        <!-- Automatización & Agentes IA -->
        <div class="p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
          <span class="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">smart_toy</span>
          <h3 class="text-xl font-bold mb-4">Automatización &amp; IA</h3>
          <ul class="space-y-3 text-slate-500">
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> n8n — flujos y workflows</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Agentes &amp; chatbots con LLMs</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Bots de automatización</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Web scraping (Python)</li>
          </ul>
        </div>

        <!-- Integración Empresarial -->
        <div class="p-8 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-primary/50 transition-colors group">
          <span class="material-symbols-outlined text-primary text-4xl mb-6 block group-hover:scale-110 transition-transform">hub</span>
          <h3 class="text-xl font-bold mb-4">Integración Empresarial</h3>
          <ul class="space-y-3 text-slate-500">
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> SAP BAPI &amp; RFC</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Sovos / SUNAT</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Power Automate / Power Apps</li>
            <li class="flex items-center gap-2"><span class="size-1.5 bg-primary rounded-full shrink-0"></span> Microsoft 365</li>
          </ul>
        </div>

      </div>
    </section>
  `
})
export class SkillsComponent {}
