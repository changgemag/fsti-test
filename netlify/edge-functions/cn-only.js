export default async function handler(request, context) {
  const countryCode = context.geo?.country?.code;

  if (countryCode === "CN") {
    return context.next();
  }

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>暂不可访问</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #0b1118;
      --panel: rgba(18, 28, 40, 0.92);
      --text: #f4f7fb;
      --muted: #9aa9bb;
      --line: rgba(255, 255, 255, 0.08);
      --accent: #b8ff3b;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      font-family: "Segoe UI Variable Display", "Trebuchet MS", "PingFang SC", "Microsoft YaHei", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at top left, rgba(184, 255, 59, 0.08), transparent 28%),
        radial-gradient(circle at bottom right, rgba(120, 216, 255, 0.1), transparent 24%),
        linear-gradient(180deg, #091018 0%, #101826 42%, #0a0d12 100%);
    }
    .card {
      width: min(560px, 100%);
      padding: 28px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: var(--panel);
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.28);
    }
    .eyebrow {
      margin: 0 0 12px;
      color: var(--accent);
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }
    h1 {
      margin: 0 0 12px;
      font-size: clamp(28px, 5vw, 42px);
      line-height: 1.02;
    }
    p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
      font-size: 16px;
    }
  </style>
</head>
<body>
  <main class="card">
    <p class="eyebrow">FSTI / ACCESS LIMITED</p>
    <h1>当前仅对中国大陆开放测试</h1>
    <p>这个测试页目前只给中国大陆用户体验。如果你是误拦截，可以稍后换网络再试。</p>
  </main>
</body>
</html>`;

  return new Response(html, {
    status: 403,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}
