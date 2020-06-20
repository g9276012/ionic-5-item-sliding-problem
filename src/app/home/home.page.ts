import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  fundsList = [];
  ngOnInit(): void {
    this.fundsList = [
      {
        remark: 'data1',
        buy: 'buy'
      },
      {
        remark: 'data2',
        buy: 'buy2'
      },
      {
        remark: 'data3',
        buy: 'buy3'
      }
    ];
  }

  constructor() { }

}
