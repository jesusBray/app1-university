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
import {Asiento} from '../models';
import {AsientoRepository} from '../repositories';

export class AsientoController {
  constructor(
    @repository(AsientoRepository)
    public asientoRepository : AsientoRepository,
  ) {}

  @post('/asientos', {
    responses: {
      '200': {
        description: 'Asiento model instance',
        content: {'application/json': {schema: {'x-ts-type': Asiento}}},
      },
    },
  })
  async create(@requestBody() asiento: Asiento): Promise<Asiento> {
    return await this.asientoRepository.create(asiento);
  }

  @get('/asientos/count', {
    responses: {
      '200': {
        description: 'Asiento model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Asiento)) where?: Where,
  ): Promise<Count> {
    return await this.asientoRepository.count(where);
  }

  @get('/asientos', {
    responses: {
      '200': {
        description: 'Array of Asiento model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Asiento}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Asiento)) filter?: Filter,
  ): Promise<Asiento[]> {
    return await this.asientoRepository.find(filter);
  }

  @patch('/asientos', {
    responses: {
      '200': {
        description: 'Asiento PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() asiento: Asiento,
    @param.query.object('where', getWhereSchemaFor(Asiento)) where?: Where,
  ): Promise<Count> {
    return await this.asientoRepository.updateAll(asiento, where);
  }

  @get('/asientos/{id}', {
    responses: {
      '200': {
        description: 'Asiento model instance',
        content: {'application/json': {schema: {'x-ts-type': Asiento}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Asiento> {
    return await this.asientoRepository.findById(id);
  }

  @patch('/asientos/{id}', {
    responses: {
      '204': {
        description: 'Asiento PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() asiento: Asiento,
  ): Promise<void> {
    await this.asientoRepository.updateById(id, asiento);
  }

  @put('/asientos/{id}', {
    responses: {
      '204': {
        description: 'Asiento PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() asiento: Asiento,
  ): Promise<void> {
    await this.asientoRepository.replaceById(id, asiento);
  }

  @del('/asientos/{id}', {
    responses: {
      '204': {
        description: 'Asiento DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.asientoRepository.deleteById(id);
  }
}
