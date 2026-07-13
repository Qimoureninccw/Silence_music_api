// _worker.js - 加载并运行网易云音乐 API

export default {
  async fetch(request, env, ctx) {
    try {
      // 动态导入你的 Express 应用（入口文件是 app.js）
      const { default: app } = await import('./app.js')

      // 获取请求的路径和方法，用于日志
      const url = new URL(request.url)
      console.log(`收到请求: ${request.method} ${url.pathname}`)

      // 由于 Cloudflare Pages 环境和标准 Node.js 不同，
      // 直接运行 Express 需要适配器。
      // 目前返回一个提示，表明 app.js 已成功加载。
      return new Response(
        JSON.stringify({
          status: 'app.js 已成功加载！',
          message: '下一步需要添加 Express 适配器来完整运行 API',
          note: '你可以访问 /banner 测试，但目前会返回此消息',
          path: url.pathname,
          method: request.method,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    } catch (error) {
      // 如果加载失败，返回详细的错误信息
      return new Response(
        JSON.stringify({
          error: '无法加载 app.js',
          message: error.message,
          stack: error.stack,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }
  },
}
