// _worker.js
export default {
  async fetch(request, env, ctx) {
    // 这是一个诊断响应，证明 _worker.js 已被加载
    return new Response(JSON.stringify({
      status: 'Worker is running',
      message: '请求已到达 _worker.js，正在尝试启动 API 服务...',
      url: request.url,
      method: request.method
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
