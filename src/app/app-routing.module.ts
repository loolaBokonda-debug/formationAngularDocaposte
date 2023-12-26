import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat/chat.component';
import { ChatListComponent } from './chat-list/chat-list/chat-list.component';
import { DescriptionComponent } from './description/description/description.component';
import { HomeComponent } from './home/home/home.component';
import { SignUpComponent } from './sign-up/sign-up/sign-up.component';
import { HomeModule } from './home/home.module';
import { ChatListModule } from './chat-list/chat-list.module';
import { DescriptionModule } from './description/description.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { ChatModule } from './chat/chat.module';

const routes: Routes = [
  {path: 'chat/:chatId', component: ChatComponent},
  {path: 'chat-list', component: ChatListComponent},

  {path: 'description', component: DescriptionComponent},
  {path: '', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  
];


@NgModule({
  imports: [HomeModule, ChatModule, ChatListModule, DescriptionModule, SignUpModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
