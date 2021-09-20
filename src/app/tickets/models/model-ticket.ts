export interface Ticket {
  email: string,
  phone: string,
  address :{
    street: string,
    postalCode: string,
  },
  tickets: Ticket2[]

}

export interface Ticket2 {
    name:string,
    age:number
}
