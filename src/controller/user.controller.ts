/*
 * @Author: lihuan
 * @Date: 2022-11-21 10:14:52
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 15:57:06
 * @Email: 17719495105@163.com
 */
import { Context, Next } from 'koa'

import userService from '../service/user.service'
import type { IUser } from '../types/user'

class UserController {
  async create(ctx: Context, next: Next) {
    const user = ctx.request.body
    const result = await userService.create(user as IUser)
    ctx.body = result
  }
}

export default new UserController()
