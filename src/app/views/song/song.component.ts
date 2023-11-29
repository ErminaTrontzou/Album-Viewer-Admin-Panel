import { SongService } from './../../service/song/song.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit{
  songs: any[] = [];
  albumId: number = 0;
  artistName: string = '';
  albumName: string = '';
  songErrorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private songService: SongService,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.albumId = +params['id']; // Convert to number
      this.albumName = params['albumName'];
      this.artistName = params['artistName'];
      //console.log(params);
      this.loadSongs();
    });
  }

  loadSongs(): void {
    this.songService.getSongsFromAlbum(this.albumId).subscribe(
      (data) => {
        this.songs = data;
      },
      (error) => {
        this.songErrorMessage = 'Problem with obtaining Songs from backend';
      }
    );
  }

}
