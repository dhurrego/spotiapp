import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private _http: HttpClient ) { }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                      .set('Authorization', 'Bearer BQBn-V0xWVDDlO7lsfoZWEXdjOsoSHd0OV-AE5bz2GhurSCZI90Uhs4P8ZE6lqtA6dmXq-2vVxV42zmF-g0');
    return this._http.get(url, { headers: headers });
  }

  getNewReleases(){

  	return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map( (data : any ) => data.albums.items));
  }

  getArtista( termino:string ){
    return this.getQuery(`search?q=${ termino }&type=artist`)
                  .pipe( map( (data: any) => data.artists.items));
  }
}