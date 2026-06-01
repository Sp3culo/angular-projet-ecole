import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GeneralKnowledgeModule} from "./models/general-knowledge/general-knowledge.module";
import {AuthModule} from "./models/auth/auth.module";
import { HomeComponent } from './models/home-page/home/home.component';
import {FooterComponent} from "./part/footer/footer.component";
import {HeaderComponent} from "./part/header/header.component";
import {NgOptimizedImage} from "@angular/common";
import { ModalComponent } from './models/components/modal/modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AdminModule} from "./models/admin/admin.module";


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        ModalComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        GeneralKnowledgeModule,
        AdminModule,
        AuthModule,
        AppRoutingModule,
        NgOptimizedImage,
        ServiceWorkerModule.register('ngsw-worker.js', {
          enabled: environment.production,
          // Register the ServiceWorker as soon as the application is stable
          // or after 30 seconds (whichever comes first).
          registrationStrategy: 'registerWhenStable:30000'
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
