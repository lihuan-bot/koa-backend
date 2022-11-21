/*
 * @Author: lihuan
 * @Date: 2022-11-21 09:44:46
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 10:39:01
 * @Email: 17719495105@163.com
 */
import dotenv from 'dotenv'

import type { ICfg } from '../types/config'

dotenv.config()

export const { APP_PORT, MYSQL_HOST, MYSQL_DATABASE, MYSQL_PASSWORD, MYSQL_PORT, MYSQL_USER } =
  process.env as any as ICfg
