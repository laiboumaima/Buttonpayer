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
  Order_idOrder !:  number;
  Address_idAddress !: number;
  endDateDelivery!: Date;
  deliveryStatus !: DeliveryStatus;
  deliveryType!:DeliveryType
  deliveryDuration!:number;
  linkGPS!: string;

}
