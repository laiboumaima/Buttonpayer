

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Orders,livrasioninformation, entreprise} from '../services/dummydata';
@Component({
  selector: 'app-buttonpayer',
  templateUrl: './buttonpayer.component.html',
  styleUrls: ['./buttonpayer.component.scss']
})
export class ButtonpayerComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  Data :any  = {Orders,entreprise,livrasioninformation}
  sendData(): void {
    this.service.sendData(this.Data).subscribe(
      data =>{
        console.log(data.json)
      },
      error =>{
        console.log(error)
      }
    )

  }

}
