

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Orders,Ordersnull,livrasioninformation, entreprise} from '../services/dummydata';
@Component({
  selector: 'app-buttonpayer',
  templateUrl: './buttonpayer.component.html',
  styleUrls: ['./buttonpayer.component.scss']
})
export class ButtonpayerComponent implements OnInit {

  constructor(private service:ServiceService) { }
 error :boolean  = false;
 messageerror :string=""
  ngOnInit(): void {
  }

  Data :any  = {orders:Ordersnull,entreprise,livrasioninformation}
  sendData(): void {
  
  
    if ( typeof this.Data.orders != 'undefined'&& this.Data.orders ) {
      this.service.sendData(this.Data).subscribe(
        data =>{
          console.log(data.json)
        },
        error =>{
          console.log(error)
        }
      )
    }else{
      this.messageerror="commande cant be null "
     this.error  =true;
    }
  

  }

}
