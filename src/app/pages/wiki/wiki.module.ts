import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { WikiComponent } from './wiki.component';

import { MarkdownPipe } from './markdown.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    WikiComponent,
    MarkdownPipe
  ]
})
export class WikiModule { }
