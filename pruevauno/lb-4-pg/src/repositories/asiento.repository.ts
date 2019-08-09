import {DefaultCrudRepository} from '@loopback/repository';
import {Asiento} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AsientoRepository extends DefaultCrudRepository<
  Asiento,
  typeof Asiento.prototype.asiento_id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Asiento, dataSource);
  }
}
