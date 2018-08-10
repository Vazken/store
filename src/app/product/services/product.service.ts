import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Product } from '../models/product';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

const baseUrl = `${environment.apiUrl}/products`;
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}/${id}`);
  }
}
