import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { NewsComponent } from './routes/news/news.component';
import { MediaComponent } from './routes/media/media.component';
import { StudioComponent } from './routes/studio/studio.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'media', component: MediaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'studio', component: StudioComponent },
];
