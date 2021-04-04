import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DndDirective } from './dnd.directive';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DndDirective, ProgressComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
