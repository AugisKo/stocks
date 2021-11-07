import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/Models/stock';
import { StockService } from 'src/app/services/stock.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-stock',
  templateUrl: './show-stock.component.html',
  styleUrls: ['./show-stock.component.scss'],
})
export class ShowStockComponent implements OnInit {
  public stock!: Stock;
  constructor(
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.stockService
      .getShowStock(this.route.snapshot.params['code'])
      .subscribe((response: Stock[]) => {
        this.stock = response[0];
        console.log(this.stock);
      });
  }
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
