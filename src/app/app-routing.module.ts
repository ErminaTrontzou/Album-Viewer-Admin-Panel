import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { ArtistComponent } from './views/artist/artist.component';
import { CategoryComponent } from './views/category/category.component';
import { AlbumComponent } from './views/album/album.component';
import { SongComponent } from './views/song/song.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'artist',
        component: ArtistComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'album/:id/:artistName',
        component: AlbumComponent
      },
      {
        path: 'song/:id/:artistName/:albumName',
        component: SongComponent
      }
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
