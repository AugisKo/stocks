import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../Models/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  stock: any;
  constructor(private httpClient: HttpClient) {}

  public getStock(): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>('http://localhost:3000/api/stock');
  }

  public addStock(stock: Stock): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/stock', stock);
  }

  public getShowStock(code: string): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(
      'http://localhost:3000/api/stock?q=' + code
    );
  }
}
