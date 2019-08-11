import {Entity, model, property} from '@loopback/repository';

@model()
export class Empresa extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  empresa_id?: number;

  @property({
    type: 'object',
  })
  empresa_data?: object;

  @property({
    type: 'date',
  })
  empresa_registrado?: string;

  @property({
    type: 'date',
  })
  empresa_modificado?: string;

  @property({
    type: 'string',
  })
  empresa_estado?: string;


  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}
