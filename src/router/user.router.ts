/*
 * @Author: lihuan
 * @Date: 2022-11-21 10:12:04
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 10:32:15
 * @Email: 17719495105@163.com
 */
import Router from 'koa-router'

import userController from '../controller/user.controller'

const userRouter = new Router({ prefix: '/user' })
userRouter.post('/', userController.create)

export default userRouter
