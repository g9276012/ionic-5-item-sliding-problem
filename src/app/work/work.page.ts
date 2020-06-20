import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: 'work.page.html',
  styleUrls: ['work.page.scss'],
})
export class WorkPage implements OnInit {

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
