import {Entity, model, property} from '@loopback/repository';

@model()
export class Bus extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  bus_id?: number;

  @property({
    type: 'object',
  })
  bus_data?: object;

  @property({
    type: 'number',
  })
  bus_empresa_id?: number;

  @property({
    type: 'date',
  })
  bus_registrado?: string;

  @property({
    type: 'date',
  })
  bus_modificado?: string;

  @property({
    type: 'string',
  })
  bus_estado?: string;


  constructor(data?: Partial<Bus>) {
    super(data);
  }
}
