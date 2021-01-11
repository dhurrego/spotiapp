import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  
  artistas: any[] = [];
  loading: boolean;

  constructor( private _spotify: SpotifyService ) {
    this.loading = false;
  }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.loading = true;
  	this._spotify.getArtistas( termino ).subscribe(
  		response => {
        this.artistas = response;
        console.log(response);
        this.loading = false;
      },
      error => console.log(<any>error)
  	);
  }
}
