import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, private title: Title) {}

  setText(text: string) {
    this.meta.addTag({
      name: 'description',
      content: text
    });
    this.title.setTitle(text);
  }
}
