import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {SendImageComponent} from './send-image/send-image.component'
import {HomeComponent} from './home/home.component'
import {SendMailComponent} from './send-mail/send-mail.component'
import {SendMessageComponent} from './send-message/send-message.component'
import {TextToHandwrittenComponent} from './text-to-handwritten/text-to-handwritten.component'
import {PlayYtvideoComponent} from './play-ytvideo/play-ytvideo.component'
import {HistoryComponent} from './history/history.component'


const routes: Routes = [
	{
		component: HomeComponent,
		path: 'home'
	},
	{
		component: LoginComponent,
		path: 'login'
	},
	{
		component: RegisterComponent,
		path: 'register'
	},
	{
		component: SendImageComponent,
		path: 'sendimg'
	},
	{
		component: SendMailComponent,
		path: 'sendmail'
	},
	{
		component: SendMessageComponent,
		path: 'sendmsg'
	},
	{
		component: TextToHandwrittenComponent,
		path: 'texttohand'
	},
	{
		component: PlayYtvideoComponent,
		path: 'playyt'
	},
	{
		component: HistoryComponent,
		path: 'history'
	}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
