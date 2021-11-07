import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Stock } from 'src/app/Models/stock';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss'],
})
export class AddStockComponent implements OnInit {
  constructor() {}

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
  }
}
