import { Component } from '@angular/core';
import { ArtistsService } from '../app/artists.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angualr vistual-scroll';

  constructor(public artistService: ArtistsService) {}

  artists = [];
      ngOnInit() {
       this.getArtists();
      }
      getArtists (){
       this.artists = this.artistService.getArtists();
       }
}
