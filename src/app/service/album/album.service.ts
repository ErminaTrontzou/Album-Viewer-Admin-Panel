import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService { 

  private apiUrl = 'http://localhost:8080/api/v1/album/artist_id/';

  constructor(private http: HttpClient) { }

  getAlbumByArtistId(artistId: number): Observable<any[]> {
    const url = `${this.apiUrl}${artistId}`;
    return this.http.get<any[]>(url).pipe(
      catchError((error) => {
        if (error.status === 0) {
          console.error('Problem with obtaining Albums from backend');
        }
        return throwError(error);
      })
    )
  }
}
