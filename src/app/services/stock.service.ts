import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../Models/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private httpClient: HttpClient) {}

  public getStock(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>('http://localhost:3000/api/stock');
  }
}
