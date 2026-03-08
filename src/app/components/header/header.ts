import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header class="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-10 md:px-20 lg:px-40 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="size-8 bg-primary rounded flex items-center justify-center">
            <span class="material-symbols-outlined text-slate-900 text-xl">terminal</span>
          </div>
          <h2 class="text-xl font-bold tracking-tight">darwme</h2>
        </div>
        <nav class="hidden md:flex items-center gap-10">
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#about">Sobre mí</a>
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#skills">Skills</a>
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#experience">Experiencia</a>
          <a class="text-sm font-medium hover:text-primary transition-colors" href="#projects">Proyectos</a>
          <button class="bg-primary hover:bg-primary/80 text-slate-900 px-5 py-2 rounded-lg text-sm font-bold transition-all">
            Download CV
          </button>
          <button
            (click)="themeService.toggle()"
            class="size-9 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            [attr.aria-label]="themeService.isDark() ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <span class="material-symbols-outlined text-slate-600 dark:text-slate-400">
              {{ themeService.isDark() ? 'light_mode' : 'dark_mode' }}
            </span>
          </button>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  themeService = inject(ThemeService);
}
