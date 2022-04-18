import { OrderItem } from "./order-item.interface";

export interface Order{
    reduce(arg0: (s: any, o: any) => any, arg1: number): number;
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    total:number;
    orderItem:OrderItem[];
}