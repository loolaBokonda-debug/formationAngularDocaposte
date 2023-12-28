import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatListModule } from './chat-list/chat-list.module';
import { ChatModule } from './chat/chat.module';
import { AppServiceService } from './app-service.service';
import { SignUpModule } from './sign-up/sign-up.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ChatListModule,
    ChatModule,
    BrowserAnimationsModule,
    SignUpModule,
    HttpClientModule

    
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
