import {DefaultCrudRepository} from '@loopback/repository';
import {Bus} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BusRepository extends DefaultCrudRepository<
  Bus,
  typeof Bus.prototype.bus_id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Bus, dataSource);
  }
}
