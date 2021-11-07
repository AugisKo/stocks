import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Stock } from 'src/app/Models/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
})
export class AddStockComponent implements OnInit {
  constructor(private stockService: StockService, private router: Router) {}

  ngOnInit(): void {}

  submit(form: NgForm) {
    console.log(form.value);
    const stock: Stock = new Stock(
      form.value.name,
      form.value.code,
      form.value.price,
      form.value.previousePrice,
      form.value.exchange,
      form.value.favorite == 1
    );
    this.stockService.addStock(stock).subscribe((response: any) => {
      this.router.navigate(['/']);
    });
  }
}
