import {Entity, model, property} from '@loopback/repository';

@model()
export class Asiento extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  asiento_id?: number;

  @property({
    type: 'object',
  })
  asiento_data?: object;

  @property({
    type: 'number',
  })
  asiento_pasajero_id?: number;

  @property({
    type: 'date',
  })
  asiento_registrado?: string;

  @property({
    type: 'date',
  })
  asiento_modificado?: string;

  @property({
    type: 'string',
  })
  asiento_estado?: string;


  constructor(data?: Partial<Asiento>) {
    super(data);
  }
}
