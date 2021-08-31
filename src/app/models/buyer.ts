export enum Buyerstatus{
    person ='person',
    enterprise ='enterprise'
}
export class Buyer {
    idBuyer!:number
    firstNameB!:string
    lastNameB!:string
    birthDayB!:Date
    Address_idAddress!:number
    emailBuyer!:string
    phoneBuyer!:string
    buyerStatus!:Buyerstatus
    registerCommercialNumberB!:string
    taxIdentificationNumberB!:string
}
