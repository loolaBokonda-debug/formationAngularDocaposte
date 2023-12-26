import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatListModule } from './chat-list/chat-list.module';
import { ChatModule } from './chat/chat.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { DescriptionModule } from './description/description.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatListModule,
    ChatModule,
    SignUpModule,
    DescriptionModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
