import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from  '@angular/fire/compat/auth'
// import { environment } from 'src/environments/environment.development';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAMDOjTp0rXtDljsJZ1ck2IMQJQl2xAkdo",
      authDomain: "flight-info-project-f647e.firebaseapp.com",
      projectId: "flight-info-project-f647e",
      storageBucket: "flight-info-project-f647e.appspot.com",
      messagingSenderId: "131666086727",
      appId: "1:131666086727:web:2c7f11f3272fe8d596da62"
  }),
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
