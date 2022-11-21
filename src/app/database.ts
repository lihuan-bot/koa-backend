/*
 * @Author: lihuan
 * @Date: 2022-11-21 10:33:53
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 11:12:43
 * @Email: 17719495105@163.com
 */
import mysql from 'mysql2'

import { MYSQL_HOST, MYSQL_PORT, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD } from './config'

const connection = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD
})

connection.getConnection((error, conn) => {
  if (error) {
    console.log('数据库连接失败', error)
    return
  }
  conn.connect((err) => {
    if (err) {
      console.log('数据库连接失败', err)
      return
    }

    console.log('数据库连接成功')
  })
})

export default connection.promise()
