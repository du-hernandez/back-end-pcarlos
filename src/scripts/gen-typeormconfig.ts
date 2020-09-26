import { databaseConnectionService } from '../config/database-connection.service';
import fs = require('fs');

fs.writeFileSync('ormconfig.json',
    JSON.stringify(databaseConnectionService.createTypeOrmOptions(), null, 2)
);