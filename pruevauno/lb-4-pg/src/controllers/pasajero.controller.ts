import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Pasajero} from '../models';
import {PasajeroRepository} from '../repositories';

export class PasajeroController {
  constructor(
    @repository(PasajeroRepository)
    public pasajeroRepository : PasajeroRepository,
  ) {}

  @post('/pasajeros', {
    responses: {
      '200': {
        description: 'Pasajero model instance',
        content: {'application/json': {schema: {'x-ts-type': Pasajero}}},
      },
    },
  })
  async create(@requestBody() pasajero: Pasajero): Promise<Pasajero> {
    return await this.pasajeroRepository.create(pasajero);
  }

  @get('/pasajeros/count', {
    responses: {
      '200': {
        description: 'Pasajero model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Pasajero)) where?: Where,
  ): Promise<Count> {
    return await this.pasajeroRepository.count(where);
  }

  @get('/pasajeros', {
    responses: {
      '200': {
        description: 'Array of Pasajero model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Pasajero}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Pasajero)) filter?: Filter,
  ): Promise<Pasajero[]> {
    return await this.pasajeroRepository.find(filter);
  }

  @patch('/pasajeros', {
    responses: {
      '200': {
        description: 'Pasajero PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() pasajero: Pasajero,
    @param.query.object('where', getWhereSchemaFor(Pasajero)) where?: Where,
  ): Promise<Count> {
    return await this.pasajeroRepository.updateAll(pasajero, where);
  }

  @get('/pasajeros/{id}', {
    responses: {
      '200': {
        description: 'Pasajero model instance',
        content: {'application/json': {schema: {'x-ts-type': Pasajero}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Pasajero> {
    return await this.pasajeroRepository.findById(id);
  }

  @patch('/pasajeros/{id}', {
    responses: {
      '204': {
        description: 'Pasajero PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() pasajero: Pasajero,
  ): Promise<void> {
    await this.pasajeroRepository.updateById(id, pasajero);
  }

  @put('/pasajeros/{id}', {
    responses: {
      '204': {
        description: 'Pasajero PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pasajero: Pasajero,
  ): Promise<void> {
    await this.pasajeroRepository.replaceById(id, pasajero);
  }

  @del('/pasajeros/{id}', {
    responses: {
      '204': {
        description: 'Pasajero DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pasajeroRepository.deleteById(id);
  }
}
