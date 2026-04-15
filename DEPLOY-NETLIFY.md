# FSTI 发布说明

这套网页是一个静态网站。

它的意思是：

- 页面内容是 `index.html`
- 样式是 `styles.css`
- 交互逻辑是 `app.js`
- 不需要数据库
- 不需要后端程序
- 不需要你自己买云服务器

## 你真正需要的东西

你现在只需要两个账号：

- GitHub 账号：用来存放网站文件
- Netlify 账号：用来把这些文件变成别人能访问的网址

## 为什么这次不用自己买服务器

传统网站常见做法是：

- 你租一台服务器
- 把网站文件传上去
- 自己配置域名、证书、运行环境

但你这次这个测试页不需要后端，所以可以直接交给静态托管平台。

Netlify 就相当于：

- 帮你保存发布后的网页
- 帮你提供公网访问地址
- 帮你自动配 HTTPS
- 你以后每次更新 GitHub，它自动重新上线

所以这次你不需要单独买服务器。

## 我已经帮你做好的内容

项目里已经有这些文件：

- `index.html`
- `styles.css`
- `app.js`
- `netlify.toml`
- `netlify/edge-functions/cn-only.js`

其中：

- `netlify.toml` 告诉 Netlify：这个网站的发布目录就是当前文件夹
- `cn-only.js` 会限制只有中国大陆 IP 才能访问

## 最推荐的上线方式

推荐路线：

`GitHub -> Netlify -> 公开网址`

这样以后你改题目、改结果文案，只要更新 GitHub，Netlify 会自动重新发布。

---

## 第一步：在 GitHub 创建仓库

1. 打开 `https://github.com`
2. 登录你的 GitHub 账号
3. 点右上角 `+`
4. 选 `New repository`
5. 仓库名建议填：`fsti-test`
6. 公开或私有都可以
7. 点 `Create repository`

## 第二步：把这个文件夹上传到 GitHub

如果你不会 Git 命令，最简单的是网页上传。

1. 进入你刚创建的仓库页面
2. 点击 `uploading an existing file`
3. 把这个文件夹里的所有文件拖进去

你需要上传的核心内容包括：

- `index.html`
- `styles.css`
- `app.js`
- `netlify.toml`
- `netlify` 文件夹

4. 页面下方写提交说明，比如：
   - `init fsti site`
5. 点击 `Commit changes`

## 第三步：用 GitHub 账号登录 Netlify

1. 打开 `https://app.netlify.com`
2. 选择 `Log in with GitHub`
3. 授权 Netlify 读取你的 GitHub 仓库

## 第四步：把 GitHub 仓库接到 Netlify

1. 登录 Netlify 后，点击：
   - `Add new project`
   - `Import an existing project`
2. 选择 `GitHub`
3. 找到你刚才创建的仓库，比如 `fsti-test`
4. 点击进入部署设置

## 第五步：部署设置怎么填

如果页面里出现构建设置，你按下面填：

- Build command：留空
- Publish directory：`.`

然后点击 `Deploy`

## 第六步：等待上线

部署成功后，Netlify 会给你一个公开网址，通常长这样：

`https://xxxx.netlify.app`

别人只要打开这个网址，就能访问你的网站。

## 第七步：验证中国大陆限制

这套项目已经加了“中国大陆访问限制”。

逻辑是：

- 中国大陆访问：正常打开测试页
- 其他地区访问：显示限制访问提示页

注意：

- 这是按 IP 地理位置判断的
- VPN 或代理可能绕过
- 极少数情况下可能有误判

---

## 以后你怎么更新网站

以后如果你想改：

- 首页文案
- 题目
- 结果页文案
- 样式

你只需要：

1. 修改文件
2. 再上传到 GitHub 同一个仓库
3. Netlify 会自动重新发布

---

## 这次你最容易卡住的地方

### 1. 不知道要不要买服务器

这次不用买。

### 2. 不会 Git 命令

没关系，直接用 GitHub 网页上传文件就行。

### 3. Netlify 的构建设置不会填

你的项目是纯静态页，所以：

- Build command 留空
- Publish directory 填 `.`

### 4. 上传时忘了 `netlify` 文件夹

这个文件夹不能漏，因为里面是“中国大陆访问限制”的逻辑。

---

## 如果你想继续让我带你一步一步做

你下一步只要告诉我下面任意一种情况，我就继续接着带：

- `我已经创建好 GitHub 仓库了`
- `我已经把文件上传到 GitHub 了`
- `我现在卡在 Netlify 这一步`

我会按你当前卡住的位置继续往下讲，不让你自己瞎试。
