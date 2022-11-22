/*
 * @Author: lihuan
 * @Date: 2022-11-21 10:25:07
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 15:55:18
 * @Email: 17719495105@163.com
 */
import connection from '../app/database'
import type { IUser } from '../types/user'
class UserService {
  async create(user: IUser) {
    const { username, password } = user
    const statement = `INSERT INTO user (username, password) VALUES (?,?);`
    const result = await connection.execute(statement, [username, password])
    return result
  }
}

export default new UserService()
