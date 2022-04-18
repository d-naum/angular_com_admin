import { Order } from "./order.interface";

export interface Link{
    id:number;
    code:string;
    orders:Order[];
}