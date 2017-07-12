import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titoli',
  templateUrl: './iteration3.component.html',
  styleUrls: ['./iteration3.component.css']
})
export class Iteration3Component implements OnInit {
titles: Object[] = [
  {
    year: 2001,
    title: 'Scudetto',
    titleLogo: '/assets/images/Scudetto.png',
    best_players: ['Gabriel Batistuta', 'Vincenzo Montella', 'Francesco Totti', 'Emerson', 'Walter Samuel']
  },
  {
    year: 2007,
    title: 'Supercoppa Italiana',
    titleLogo: '/assets/images/coppa.png',
    best_players: ['Francesco Totti', 'Daniele De Rossi','David Pizarro', 'Simone Perrotta', 'Max Tonetto']

  },
  {
    year: 2008,
    title: 'Coppa Italia',
    titleLogo: '/assets/images/Coppaitalia.png',
    best_players: ['Francesco Totti', 'Mancini', 'Mirko Vučinić', 'Simone Perrotta', 'Philippe Mexès']
  }
  

]
constructor() { }

  ngOnInit() {
  }

}
