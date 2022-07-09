interface IVehicleAdd {
    name: string;
    description: string;
    plate: string;
    year: number;
    color: string;
    price: number;
}
 
 interface IVehicle {
    id: number;
    name: string;
    description: string;
    plate: string;
    isFavorite: boolean;
    year: number;
    color: string;
    price: number;
    createdAt: Date;
}

 interface IselectObj {
    marca:string[];
    cor:string[];
    ano:number[];
}

export type {IVehicle, IselectObj, IVehicleAdd }