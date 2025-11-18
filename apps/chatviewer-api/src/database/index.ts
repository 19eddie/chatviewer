// Copyright (c) 2022 Sri Lakshmi Kanthan P
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Sequelize, Options } from 'sequelize';
import * as env from '../env/env';

const options: Options = {};

if (env.isDatabaseSslEnabled()) {
  options.dialectOptions = { ssl: { require: true, rejectUnauthorized: false } };
}

// create the database connection
const sequelize: Sequelize = new Sequelize(env.getDatabaseUrl(), options);

// export the sequelize object
export { sequelize };
