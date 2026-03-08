import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section class="bg-slate-100 dark:bg-slate-900/50 px-10 md:px-20 lg:px-40 py-24" id="about">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="relative aspect-square rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-800">
          <img
            alt="Darwin K. Mendoza"
            class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgGcOmhWNdLXcfZgh7lySBG2ZZ3fwxjUPMx0NKTvxAMKzDi0dnQ33Lf3_J2cJhIpC93muMQJS8MYznOVW8XkIvjfagn9A95CWO-3CHtEDJKt_940X82Excj-0tK7C8MYuBP4uJzBBR4NczTDSNzeNEIQSOKLdwjsxStLbDSQJ4mzJy1ZCrLoClm3IH7nqIK3oLqhz1Ov5vuhhIEsWj-tzw1zBMR4lntPf2-MF2Wt1_2o_VXHJD5lhQMmu58B6V-hMx35yfwQdyis8f"
          />
        </div>
        <div class="flex flex-col gap-6">
          <h2 class="text-3xl font-bold">Sobre mí</h2>
          <p class="text-slate-600 dark:text-slate-400 leading-loose">
            Soy Darwin K. Mendoza, egresado de Ingeniería de Sistemas de la UNMSM. Me muevo cómodo
            entre el frontend y el backend, pero lo que más me entusiasma es la automatización:
            construir flujos con n8n, crear agentes conversacionales y hacer que los sistemas
            hablen entre sí sin fricción.
          </p>
          <p class="text-slate-600 dark:text-slate-400 leading-loose">
            Desarrollo backends con C# / .NET y Python, trabajo con APIs REST y BAPIs de SAP, y
            creo scripts de scraping cuando los datos no vienen solos. Actualmente en prácticas
            de TI en TRAMARSA, aprendiendo de procesos SAP reales bajo consultoría corporativa.
          </p>
          <div class="flex flex-wrap gap-3 mt-2">
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">n8n</span>
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Agentes IA</span>
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">.NET / C#</span>
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Python</span>
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">Angular</span>
            <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">SAP</span>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {}
