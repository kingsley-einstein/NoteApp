import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
//import { NavigatorComponent } from './navigator/navigator.component';
//import { SidebarComponent } from './sidebar/sidebar.component';
import { ContainerComponent } from './container/container.component';
//import { DetailsComponent } from './details/details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    //NavigatorComponent,
    //SidebarComponent,
    ContainerComponent,
    //DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
