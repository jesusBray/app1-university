export class Passenger {
    pasajero_id: number;
    pasajero_data: {
        ci:number,
        nit: number,
        edad: number,
        nombre: string,
        celular: number,
        apellido_materno: string,
        apellido_paterno: string
    };
    pasajero_bus_id: number;
    pasajero_registrado: string;
    pasajero_modificado: string;
    pasajero_estado: string;
}
