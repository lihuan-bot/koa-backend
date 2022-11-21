/*
 * @Author: lihuan
 * @Date: 2022-11-20 15:50:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-21 10:45:19
 * @Email: 17719495105@163.com
 */

import type { Context, Next } from 'koa'

import app from './app'
import { APP_PORT } from './app/config'
import './app/database'

app.use(async (ctx: Context, next: Next) => {
  ctx.body = 'test'
  await next()
})

app.listen(APP_PORT, () => {
  console.log(`服务启动成功：${APP_PORT}`)
})
