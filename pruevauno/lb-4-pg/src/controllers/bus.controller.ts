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
import {Bus} from '../models';
import {BusRepository} from '../repositories';

export class BusController {
  constructor(
    @repository(BusRepository)
    public busRepository : BusRepository,
  ) {}

  @post('/buses', {
    responses: {
      '200': {
        description: 'Bus model instance',
        content: {'application/json': {schema: {'x-ts-type': Bus}}},
      },
    },
  })
  async create(@requestBody() bus: Bus): Promise<Bus> {
    return await this.busRepository.create(bus);
  }

  @get('/buses/count', {
    responses: {
      '200': {
        description: 'Bus model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Bus)) where?: Where,
  ): Promise<Count> {
    return await this.busRepository.count(where);
  }

  @get('/buses', {
    responses: {
      '200': {
        description: 'Array of Bus model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Bus}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Bus)) filter?: Filter,
  ): Promise<Bus[]> {
    return await this.busRepository.find(filter);
  }

  @patch('/buses', {
    responses: {
      '200': {
        description: 'Bus PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() bus: Bus,
    @param.query.object('where', getWhereSchemaFor(Bus)) where?: Where,
  ): Promise<Count> {
    return await this.busRepository.updateAll(bus, where);
  }

  @get('/buses/{id}', {
    responses: {
      '200': {
        description: 'Bus model instance',
        content: {'application/json': {schema: {'x-ts-type': Bus}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Bus> {
    return await this.busRepository.findById(id);
  }

  @patch('/buses/{id}', {
    responses: {
      '204': {
        description: 'Bus PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() bus: Bus,
  ): Promise<void> {
    await this.busRepository.updateById(id, bus);
  }

  @put('/buses/{id}', {
    responses: {
      '204': {
        description: 'Bus PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() bus: Bus,
  ): Promise<void> {
    await this.busRepository.replaceById(id, bus);
  }

  @del('/buses/{id}', {
    responses: {
      '204': {
        description: 'Bus DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.busRepository.deleteById(id);
  }
}
