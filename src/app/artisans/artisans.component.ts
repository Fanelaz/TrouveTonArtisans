import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArtisansService } from './artisans.service';
import { Artisans } from './artisans.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artisans',
  templateUrl: './artisans.component.html',
  styleUrls: ['./artisans.component.scss'],
})
export class ArtisansComponent implements OnInit {
  artisans!: Artisans; // Utilisez l'interface Product pour typer la propriété product

  constructor(
    private artisansService: ArtisansService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Récupérez les informations du produit depuis l'état de la navigation
    this.artisans = history.state.artisans;
  }

  goBack() {
    this.router.navigate(['/']); // Rediriger vers la page précédente (peut-être la page d'accueil)
  }

}
