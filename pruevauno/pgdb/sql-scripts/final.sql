
CREATE TABLE empresa
(
  empresa_id serial PRIMARY KEY,
  empresa_data jsonb,
  empresa_registrado timestamp without time zone NOT NULL DEFAULT now(),
  empresa_modificado timestamp without time zone NOT NULL DEFAULT now(),
  empresa_estado text NOT NULL DEFAULT 'activo'
);

CREATE TABLE bus
(
  bus_id serial PRIMARY KEY,
  bus_data jsonb,
  bus_empresa_id integer,
  bus_registrado timestamp without time zone NOT NULL DEFAULT now(),
  bus_modificado timestamp without time zone NOT NULL DEFAULT now(),
  bus_estado text NOT NULL DEFAULT 'activo'
);


CREATE TABLE pasajero
(
  pasajero_id serial PRIMARY KEY,
  pasajero_data jsonb,
  pasajero_bus_id integer,
  pasajero_registrado timestamp without time zone NOT NULL DEFAULT now(),
  pasajero_modificado timestamp without time zone NOT NULL DEFAULT now(),
  pasajero_estado text NOT NULL DEFAULT 'activo'
);

CREATE TABLE asiento
(
  asiento_id serial PRIMARY KEY,
  asiento_data jsonb,
  asiento_pasajero_id integer,
  asiento_registrado timestamp without time zone NOT NULL DEFAULT now(),
  asiento_modificado timestamp without time zone NOT NULL DEFAULT now(),
  asiento_estado text NOT NULL DEFAULT 'activo'
);
--INSERTAR LOS DATOS TABLA EMPRESA

insert into  empresa (empresa_data) values ('{"nombre":"COSMOS"}');

--INSERTAR LOS DATOS TABLA BUS

insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-200","destino":"tarija","hora":"10:00","capacidad":"55"}',1);
insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-201","destino":"la paz","hora":"11:00","capacidad":"50"}',1);
insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-202","destino":"beni","hora":"12:00","capacidad":"60"}',1);
insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-203","destino":"oruro","hora":"10:00","capacidad":"53"}',1);
insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-204","destino":"potosi","hora":"15:00","capacidad":"56"}',1);
insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-205","destino":"la paz","hora":"12:00","capacidad":"54"}',1);
insert into  bus (bus_data,bus_empresa_id) values ('{"nombre":"CO-205","destino":"tarija","hora":"20:00","capacidad":"52"}',1);

--INSERTAR LOS DATOS TABLA PASAJERO

insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"jose","apellido_paterno":"perez","apellido_materno":"perez","ci":"112222","edad":"22","nit":"443432","celular":"77723777"}',1);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"juan","apellido_paterno":"mamani","apellido_materno":"perez","ci":"23223","edad":"19","nit":"222131232","celular":"77723711"}',1);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"esteban","apellido_paterno":"zeballos","apellido_materno":"laura","ci":"456456","edad":"22","nit":"2226552","celular":"77723722"}',2);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"luis","apellido_paterno":"teran","apellido_materno":"mamani","ci":"111232","edad":"26","nit":"2222222","celular":"77723776"}',2);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"jesus","apellido_paterno":"camacho","apellido_materno":"benavidez","ci":"374598","edad":"40","nit":"22223422","celular":"77723777"}',3);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"brayan","apellido_paterno":"teran","apellido_materno":"teran","ci":"334343","edad":"34","nit":"22287652","celular":"77723711"}',3);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"adrian","apellido_paterno":"perez","apellido_materno":"teran","ci":"12312313","edad":"55","nit":"27775222","celular":"77723700"}',4);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"maria","apellido_paterno":"valencia","apellido_materno":"torrez","ci":"4564564","edad":"22","nit":"2220092","celular":"77723565"}',4);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"maria","apellido_paterno":"estrada","apellido_materno":"valencia","ci":"353533","edad":"21","nit":"2266722","celular":"77723987"}',5);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"elias","apellido_paterno":"quispe","apellido_materno":"torrez","ci":"4564564","edad":"22","nit":"2220092","celular":"77723565"}',8);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"elias","apellido_paterno":"mamani","apellido_materno":"valencia","ci":"353533","edad":"21","nit":"2266722","celular":"77723987"}',6);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"jorge","apellido_paterno":"morales","apellido_materno":"torrez","ci":"4564564","edad":"22","nit":"2220092","celular":"77723565"}',7);
insert into  pasajero(pasajero_data,pasajero_bus_id) values ('{"nombre":"jorge","apellido_paterno":"perez","apellido_materno":"valencia","ci":"353533","edad":"21","nit":"2266722","celular":"77723987"}',7);

--INSERTAR LOS DATOS TABLA PASAJERO

insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"1","color":"rojo"}',1);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"2","color":"rojo"}',1);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"3","color":"rojo"}',1);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"4","color":"rojo"}',1);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"5","color":"rojo"}',1);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"6","color":"rojo"}',1);

insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"1","color":"azul"}',2);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"2","color":"azul"}',2);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"3","color":"azul"}',2);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"4","color":"azul"}',2);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"5","color":"azul"}',2);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"6","color":"azul"}',2);

insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"1","color":"verde"}',3);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"2","color":"verde"}',3);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"3","color":"verde"}',3);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"4","color":"verde"}',3);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"5","color":"verde"}',3);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"6","color":"verde"}',3);

insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"1","color":"guindo"}',4);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"2","color":"guindo"}',4);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"3","color":"guindo"}',4);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"4","color":"guindo"}',4);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"5","color":"guindo"}',4);
insert into  asiento (asiento_data,asiento_pasajero_id) values ('{"numero_asiento":"6","color":"guindo"}',4);