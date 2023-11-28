// artist.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtistService {
  private apiUrl = 'http://localhost:8080/api/v1/artist';

  constructor(private http: HttpClient) {}

  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError((error) => {
        if (error.status === 0) {
          console.error('Problem with obtaining Artists from backend');
        }
        return throwError(error);
      })
    );
  }


}
