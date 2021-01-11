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
                                      .set('Authorization', 'Bearer BQBroaNx71OdsC9qA3tUaI48HvUiQZ3cl40brA5HFLZ4khNiHmu4TPONLEdkBhh0HgZpNpnw5CUa7NIbKSA');
    return this._http.get(url, { headers: headers });
  }

  getNewReleases(){

  	return this.getQuery('browse/new-releases?limit=20')
                  .pipe( map( (data : any ) => data.albums.items));
  }

  getArtistas( termino:string ){
    return this.getQuery(`search?q=${ termino }&type=artist`)
                  .pipe( map( (data: any) => data.artists.items));
  }

  getArtista( id:string ){
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id:string ){
    return this.getQuery(`artists/${ id }/top-tracks?market=CO`)
                  .pipe( map( (data : any) => data['tracks'] ) );
  }


}