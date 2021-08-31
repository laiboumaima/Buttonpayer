import { Entreprise, PublicPrivate } from './../models/entreprise';
import { Vendeur } from './../models/vendeur';
import { Product } from './../models/product';

import { Livrasioninformation ,DeliveryStatus,DeliveryType} from "../models/livrasioninformation";

import { Order ,OrderStatus} from '../models/order';
export const vendeur: Vendeur= {id:1,fname:"ali",lname:"ben",birthDate:new Date(1999, 8, 22),Address_idAddress:1,
email:"ali@gmail.com",
Phone:"002135422362121"}
export const PRODUCTS: Product[] = [
  {idProduct:9,productRef: '11D0GF5V00555',productName: 'Regular medicines',Enterprise_idEnterprise: 1,price: '120000',unit: 'DZD', category:'CA2',productImage: 'image/product1/CA2/pro5.jpg', quantityStock:215,productDescription: 'moyen product bla bla bla bla'},
  {idProduct:1,productRef: '11D0GF5V00565',productName: 'Regular',Enterprise_idEnterprise: 1,price: '120000',unit: 'DZD', category:'CA2',productImage: 'image/product1/CA2/pro5.jpg', quantityStock:215,productDescription: 'moyen product bla bla bla bla'},
  {idProduct:2,productRef: '11D0GF5V00565',productName: 'Regular',Enterprise_idEnterprise: 1,price: '120000',unit: 'DZD', category:'CA2',productImage: 'image/product1/CA2/pro5.jpg', quantityStock:215,productDescription: 'moyen product bla bla bla bla'},
  


  ];
export const Orders: Order = {idOrder:1,orderNumber:'gggggg',dateOrder:new Date(2020, 8, 22),Enterprise_idEnterprise:1,Buyer_idBuyer:2,orderStatus: OrderStatus.pending,orderTotal:22,totalOutsideTax:30,listproducts:PRODUCTS,tva:22}


export const entreprise: Entreprise= {idEnterprise:1,
  enterpriseName:"alibaba",town:"blablabla",
  Contact_idContact:vendeur,Address_idAddress:1,
webSite:"www.alibaba.com",
taxIdentificationNumberS:2,
registerCommercialNumberS:"ssssssss",
accountNumber:"blablabla",
accountType:"typeaccount",
publicPrivate:PublicPrivate.private,
logoImage:"image.png",
transportCosts:2,
deliveryTime:3,
reservationTime:2}     
    
export const livrasioninformation: Livrasioninformation = 
  {idDelivery:1,deliveryNumber:11,startDateDelivery:new Date(2021, 8, 22),Enterprise:entreprise,
    Order_idOrder:2,Address_idAddress:2,endDateDelivery:new Date(2021, 9, 22),deliveryStatus: DeliveryStatus.inProgress,deliveryType:DeliveryType.home,deliveryDuration:22,linkGPS:"https://goo.gl/maps/XSPvzZjV1SdfkUQL8"}



  
    
