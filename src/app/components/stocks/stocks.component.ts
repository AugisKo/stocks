import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/Models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss'],
})
export class StocksComponent implements OnInit {
  public stocks: Stock[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stockService.getStock().subscribe((response: Stock[]) => {
      this.stocks = response;
    });
  }
}
