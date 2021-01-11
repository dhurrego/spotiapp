import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private _spotify: SpotifyService ) {

    this.loading = true;
    this.error = false;
    this.mensajeError = '';

  	this._spotify.getNewReleases().subscribe( 
  		response => {
        this.nuevasCanciones = response;
        this.loading = false;
        this.error = false;
      },
  		errorServicio => {
        console.log(<any>errorServicio);
        this.mensajeError = errorServicio.error.error.message;
        this.loading = false;
        this.error = true;
      }
    );;

  }

  ngOnInit(): void {
  	
  }

}
