import { Buyer } from './buyer';
import { Entreprise } from './entreprise';
import { Product } from './product';
export enum OrderStatus {
    reserved='reserved' ,
    cancel= 'cancel',
    waiting='waiting' ,
    paid='paid' ,
    pending= 'pending'
  }
export class Order {
    idOrder!: number;
    orderNumber!: string;
    dateOrder!: Date;
    Enterprise_idEnterprise!: Entreprise;
    Buyer_idBuyer!: Buyer;
    orderStatus!:OrderStatus
    orderTotal!: number
    totalOutsideTax!:number
    listproducts!:Product[]
    tva!:number
}
