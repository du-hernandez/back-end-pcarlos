import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_DB } = process.env;

console.log("-----------------------------------------------: ", process.env)

@Injectable()
class DatabaseConnectionService implements TypeOrmOptionsFactory {

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            name: 'default',
            type: 'postgres',
            host: DATABASE_HOST,
            port: Number(DATABASE_PORT),
            username: DATABASE_USER,
            password: DATABASE_PASSWORD,
            database: DATABASE_DB,
            synchronize: false,
            dropSchema: false,
            /**
             * Conocer más acerca de `logging`: https://github.com/typeorm/typeorm/blob/master/docs/logging.md#enabling-logging
             * 
             * El parámetro `logging` es particularmente útil para el registro de todos los registros y errores que ocurran en
             * la ejecución de la aplicación.
             * Con `logging: ["query", "error"]` como valor, se registrarán las consultas que se hagan y los posibles errores
             * que ocurran, respectivamente.
             * Se pueden espablecer las siguientes opciones:
             * 
             * query: registra todas las consultas.
             * error: registra todas las consultas fallidas y errores.
             * schema: registra el proceso de compilación del esquema.
             * warn: registra advertencias de orm's internos.
             * info: registra mensajes informativos de orm's internos.
             * log: registra mensajes de registro de orm's internos.
             * 
             * Si desea incorporar todo el conjunto de opciones, puede preferir usar `logging: "all"` como valor
             * 
             * Si hay consultas que tardan demasiado tiempo en ejecutarse, puede rastrearlas con el elemento `maxQueryExecutionTime: 1000` de `TypeOrmModuleOptions`
             */
            // maxQueryExecutionTime: 1000, // Registrará todas las consultas que tomen más de 1 segundo en ejecutarse.
            /**
             * La siguiente propiedad establece que todos los registros se escribirán en el archivo `ormlogs.log` en la carpeta raíz del proyecto. Otros valores que
             * puede tomar son los siguientes:
             * 
             * advanced-console: registrador predeterminado que registra todos los mensajes en la consala usando resultado de sintaxis sql con color
             * simple-console: igual que anterior, sólo que no colorea la sintaxis. Se puede usar si tiene algún problema con el anterior.
             * debug: utiliza el paquete de depuración. Para activar el registro, configure la variable de entorno `DEBUG=typeorm:*`
             */
            logger: "file",
            logging: 'all',
            entities: ['dist/entities/*.entity{.ts,.js}'],
            migrations: ['src/migrations/*.ts'],
            cli: {
                migrationsDir: 'src/migrations'
            },
            migrationsTableName: 'migrations',
            // ssl: { rejectUnauthorized: false }, // Configuración para PostgreSQL en Heroku
            ssl: false,

        };
    }
}

const databaseConnectionService = new DatabaseConnectionService();

export { databaseConnectionService };