/*
 * @Author: lihuan
 * @Date: 2022-11-20 15:50:11
 * @LastEditors: lihuan
 * @LastEditTime: 2022-11-20 17:19:02
 * @Email: 17719495105@163.com
 */

import type { Context, Next } from 'koa'

import Koa from 'koa'

const app = new Koa()

app.use(async (ctx: Context, next: Next) => {
  ctx.body = 'test'
  await next()
})
const POST = 8000
app.listen(POST, () => {
  console.log(`服务启动成功：${POST}`)
})
