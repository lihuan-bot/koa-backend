/*
 * @Author: lihuan
 * @Date: 2022-11-21 09:39:51
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 10:30:59
 * @Email: 17719495105@163.com
 */

import Koa from 'koa'
import bodyparser from 'koa-bodyparser'

import userRouter from '../router/user.router'

const app = new Koa()

app.use(bodyparser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
export default app
