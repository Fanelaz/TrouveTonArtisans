// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artisans } from './artisans.model'; // Importez l'interface Product

@Injectable({
  providedIn: 'root'
})
export class ArtisansService {

  constructor(private http: HttpClient) { }

  getartisans(): Observable<Artisans[]> {
    return this.http.get<Artisans[]>('./assets/data/datas.json');
  }
}
