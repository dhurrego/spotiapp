import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {
  
  artista: any = [];
  topTracks: any[] = [];
  loading: boolean;

  constructor(
  		private _route: ActivatedRoute,
  		private _router: Router,
  		private _spotifyService: SpotifyService,
  	) {
  		this.loading = true;
  		this._route.params.subscribe( params => {
  			this.getArtista(params['id']);
        this.getTopTracks(params['id']);
  		});
  }

  ngOnInit(): void {


  }

  getArtista( id:string ){
  	this.loading = true;
  	this._spotifyService.getArtista( id ).subscribe(
  			(artista: any) => {
  				console.log(artista);
  				this.artista = artista;
  				this.loading = false;
  			}
  		)
  }

  getTopTracks( id:string ){
    this._spotifyService.getTopTracks(id).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
