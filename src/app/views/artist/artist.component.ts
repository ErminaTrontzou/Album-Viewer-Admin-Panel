import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../service/artist/artist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
})
export class ArtistComponent implements OnInit {
  artists: any[] = [];
  artistErrorMessage: string = '';
  page: number = 1;
  pageSize: number = 10;

  constructor(
    private artistService: ArtistService, 
    private router: Router) {}

  ngOnInit(): void {
    this.loadArtists();
    //console.log('hello');
  }

  loadArtists(): void {
    this.artistService.getArtists().subscribe(
      (data) => {
        this.artists = data;
      },
      (error) => {
        this.artistErrorMessage = 'Problem with obtaining Artists from backend';
      }
    );
  }

    // Function to navigate to the albums page when artist name is clicked
    goToAlbums(artistId: number, artistName: string): void {
      this.router.navigate(['/album', artistId, artistName]);
    }

}
