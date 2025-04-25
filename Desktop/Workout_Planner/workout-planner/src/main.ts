// main.ts
import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // needed for internet
import { provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideServiceWorker } from '@angular/service-worker';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

// turn on production mode if app is built for production
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(), 
    provideRouter(routes), // Angular Router
    provideHttpClient(),   // lets us get data from internet
    importProvidersFrom(IonicStorageModule.forRoot()), // for saving data locally
    provideServiceWorker('ngsw-worker.js', {           // enable PWA support
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000', // wait 30s before registering
    }),
  ],
})
.catch(err => console.error(err));
