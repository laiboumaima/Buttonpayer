import { Vendeur } from './vendeur';
export enum PublicPrivate{
   public = 'public',
   private =  'private'
}
export class Entreprise {
    idEnterprise!:number
    enterpriseName!:string
    town!:string
    Contact_idContact!:Vendeur
    Address_idAddress!:number
    webSite!:string
    taxIdentificationNumberS!:number
    registerCommercialNumberS!:string
    accountNumber!:string
    accountType!:string
    publicPrivate!:PublicPrivate
    logoImage!:string
    transportCosts!:number
    deliveryTime!:number
    reservationTime!:number


}
