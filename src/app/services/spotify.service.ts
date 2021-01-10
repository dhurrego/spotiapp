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
                                      .set('Authorization', 'Bearer BQBZI60m8zmiGJb5W-DA12fqxd6sz-MsuRJV69Lc1BIquW9v6iwDDk7lfM3F0APEBJOFmHC3Is75JTOtY_A');
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