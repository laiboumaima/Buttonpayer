import { Buyer } from './buyer';
import { Order } from './order';
import { Entreprise } from './entreprise';

export enum DeliveryStatus {
    inProgress = 'inProgress',
    waiting= 'waiting',
    delivered= 'delivered'
  }
  
export enum DeliveryType {
    home ='home',
    adaptedPoint='adaptedPoint',
    pointSeller='pointSeller'
  }
export class Livrasioninformation {
    idDelivery!: number;
  deliveryNumber!:  number;
  startDateDelivery!:Date;
  Enterprise!:  Entreprise;
      Buyer!:Buyer
  Order_idOrder !:  Order;
  Address_idAddress !: number;
  endDateDelivery!: Date;
  deliveryStatus !: DeliveryStatus;
  deliveryType!:DeliveryType
  deliveryDuration!:number;
  linkGPS!: string;

}
