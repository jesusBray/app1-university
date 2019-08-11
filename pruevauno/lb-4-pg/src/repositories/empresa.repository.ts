import {DefaultCrudRepository} from '@loopback/repository';
import {Empresa} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmpresaRepository extends DefaultCrudRepository<
  Empresa,
  typeof Empresa.prototype.empresa_id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Empresa, dataSource);
  }
}
