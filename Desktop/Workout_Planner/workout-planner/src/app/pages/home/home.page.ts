// home.page.ts
import { Component } from '@angular/core';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonCard } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonCard, IonHeader, IonToolbar, IonTitle,IonContent, IonButton, RouterLink],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  // nothing needed here
}