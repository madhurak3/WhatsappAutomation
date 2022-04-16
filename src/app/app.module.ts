import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SendImageComponent } from './send-image/send-image.component';
import { PlayYtvideoComponent } from './play-ytvideo/play-ytvideo.component';
import { TextToHandwrittenComponent } from './text-to-handwritten/text-to-handwritten.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { HistoryComponent } from './history/history.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SendMessageComponent,
    SendImageComponent,
    PlayYtvideoComponent,
    TextToHandwrittenComponent,
    SendMailComponent,
    HistoryComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
