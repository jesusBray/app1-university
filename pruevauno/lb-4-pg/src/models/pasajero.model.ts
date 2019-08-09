import {Entity, model, property} from '@loopback/repository';

@model()
export class Pasajero extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  pasajero_id?: number;

  @property({
    type: 'object',
  })
  pasajero_data?: object;

  @property({
    type: 'number',
  })
  pasajero_bus_id?: number;

  @property({
    type: 'date',
  })
  pasajero_registrado?: string;

  @property({
    type: 'date',
  })
  pasajero_modificado?: string;

  @property({
    type: 'string',
  })
  pasajero_estado?: string;


  constructor(data?: Partial<Pasajero>) {
    super(data);
  }
}
