import { Entreprise } from './entreprise';
export class Product {
    idProduct!: number;
  productRef!:string;
  productName!:string;
  Enterprise_idEnterprise!: Entreprise;
  price !:string;
  unit!:string;
  category!:string;
  productImage!:string;
  quantity!: number;
  productDescription!:string;
}
