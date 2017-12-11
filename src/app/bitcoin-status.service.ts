import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class BitcoinStatusService {
  blinkTradeAPIURL: string;

  constructor(private http: HttpClient) {
    this.blinkTradeAPIURL = 'http://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC';
  }

  btcValues () {
    return this.http.get<any>(this.blinkTradeAPIURL);
  }

}
