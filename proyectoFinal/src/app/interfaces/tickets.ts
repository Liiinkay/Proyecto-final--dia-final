export interface Tickets {
    id:number;
    estado:string;
    prioridad:string;
    categoria:string;
    asunto:string;
    descripcion:string;
}

export const ListaTickets:Array<Tickets>=[
    {   
        id:1,
        estado:"Abierto",
        prioridad:"Alta",
        categoria:"dos",
        asunto:"Problema",
        descripcion:"Buenas xxdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    },
    {   
        id:2,
        estado:"Cerrado",
        prioridad:"Baja",
        categoria:"dossss",
        asunto:"Incidente",
        descripcion:"ojalas funcione cristo pls"
    },
]