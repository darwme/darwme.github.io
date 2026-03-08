import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="border-t border-slate-200 dark:border-slate-800 px-10 md:px-20 lg:px-40 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
      <p class="text-sm text-slate-500">© 2025 Darwin K. Mendoza. Todos los derechos reservados.</p>
      <div class="flex items-center gap-2">
        <span class="size-2 bg-green-500 rounded-full animate-pulse"></span>
        <p class="text-xs font-medium text-slate-400 uppercase tracking-widest">Available for new opportunities</p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
