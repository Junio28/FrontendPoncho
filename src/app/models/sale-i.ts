export interface SaleI {
    id?: number;
    date: Date;
    discount: Float32Array;
    subtotal:Float32Array;
    total:Float32Array;
    created: string;
    updated:string;
    userId:number;
    clientId:number;
}
