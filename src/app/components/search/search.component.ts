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

  constructor( private _spotify: SpotifyService ) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
  	this._spotify.getArtista( termino ).subscribe(
  		response => this.artistas = response,
      error => console.log(<any>error)
  	);
  }
}
