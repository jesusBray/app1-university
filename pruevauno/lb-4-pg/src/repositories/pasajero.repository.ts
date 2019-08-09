import {DefaultCrudRepository} from '@loopback/repository';
import {Pasajero} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PasajeroRepository extends DefaultCrudRepository<
  Pasajero,
  typeof Pasajero.prototype.pasajero_id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Pasajero, dataSource);
  }
}
