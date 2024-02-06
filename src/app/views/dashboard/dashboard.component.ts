import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../service/album/album.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  totalAlbums: number = 0;
  pieChartData: number[] = [];
  pieChartLabels: string[]= [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.albumService.getTotalAlbumCount().subscribe((totalAlbums) => {
      this.totalAlbums = totalAlbums;
    });
    this.albumService.getAlbumsByArtistCount().subscribe((data) => {
      this.pieChartData = data.map((item) => item[1]); // Extract the totalAlbums
      this.pieChartLabels = data.map((item) => item[0]); // Extract the artistName
      console.log(data);
    });
  }
  

  chartHovered(event: any): void {
    // Do something on hover
  }

  chartClicked(event: any): void {
    // Do something on click
  }
}
