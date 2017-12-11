import { Component, OnInit } from '@angular/core';
import { BitcoinStatusService } from '../bitcoin-status.service';

@Component({
  selector: 'app-bitcoin-status',
  templateUrl: './bitcoin-status.component.html',
  styleUrls: ['./bitcoin-status.component.css']
})
export class BitcoinStatusComponent {
  buy: number;
  sell: number;

  constructor( private bitcoinStatusService: BitcoinStatusService    
  ) {

    this.bitcoinStatusService = bitcoinStatusService;
    this.bitcoinStatusService.btcValues().subscribe(data => {
      this.sell = data.sell;
      this.buy = data.buy;
      console.log('AQUI');
      console.log(data);

    })


   }

  ngOnInit() {
  }


}
