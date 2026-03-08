import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="px-10 md:px-20 lg:px-40 py-24" id="contact">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl font-bold mb-6">Hablemos</h2>
          <p class="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            ¿Tienes un reto de automatización, necesitas integrar sistemas o quieres
            un agente IA que realmente funcione? Estoy disponible para colaborar,
            aprender y entregar. Escríbeme.
          </p>
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="size-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span class="material-symbols-outlined text-primary">mail</span>
              </div>
              <div>
                <p class="text-xs font-bold uppercase text-slate-400">Email</p>
                <p class="font-medium">darwme&#64;outlook.com</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="size-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <span class="material-symbols-outlined text-primary">link</span>
              </div>
              <div>
                <p class="text-xs font-bold uppercase text-slate-400">Links</p>
                <div class="flex gap-4 font-medium">
                  <a class="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30" href="https://linkedin.com/in/darwme" target="_blank" rel="noopener">LinkedIn</a>
                  <a class="hover:text-primary transition-colors underline underline-offset-4 decoration-primary/30" href="https://github.com/darwme" target="_blank" rel="noopener">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold uppercase text-slate-500">Name</label>
                <input
                  formControlName="name"
                  class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold uppercase text-slate-500">Email</label>
                <input
                  formControlName="email"
                  class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <label class="text-xs font-bold uppercase text-slate-500">Message</label>
              <textarea
                formControlName="message"
                class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary px-4 py-3 outline-none"
                placeholder="Tell me about your project..."
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full bg-primary text-slate-900 font-bold py-4 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
