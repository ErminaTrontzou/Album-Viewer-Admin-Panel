// album.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../../service/album/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
})
export class AlbumComponent implements OnInit {
  albums: any[] = [];
  artistId: number = 0;
  artistName: string = '';
  albumErrorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.artistId = +params['id']; // Convert to number
      this.artistName = params['artistName'];
      //console.log(params);
      this.loadAlbums();
    });
  }



  loadAlbums(): void {
    this.albumService.getAlbumByArtistId(this.artistId).subscribe(
      (data) => {
        this.albums = data;
      },
      (error) => {
        this.albumErrorMessage = 'Problem with obtaining Albums from backend';
      }
    );
  }
}
