# Mark 的个人博客

学术风格的 Hugo 静态博客，支持三个固定分类：

- **逻辑与写作**
- **地理与遥感**
- **优化与算法**

## 本地预览

```powershell
cd D:\blog
D:\Program\Hugo\bin\hugo.exe server -D
```

访问 `http://localhost:1313/`。

## 新建文章

```powershell
cd D:\blog
D:\Program\Hugo\bin\hugo.exe new posts/my-new-post/index.md
```

用 Typora 打开生成的 `content/posts/my-new-post/index.md`，设置分类与摘要：

```toml
+++
title = '文章标题'
date = 2026-06-17T20:00:00+08:00
draft = false
categories = ['optimization-algorithms']
summary = '一句话摘要，显示在列表页。'
+++
```

`categories` 请从以下 slug 中选择一项（括号内为页面显示名称）：

| slug | 显示名称 |
|------|----------|
| `logic-writing` | 逻辑与写作 |
| `geo-remote-sensing` | 地理与遥感 |
| `optimization-algorithms` | 优化与算法 |

示例：

```toml
categories = ['geo-remote-sensing']
```

## 发布

```powershell
git add .
git commit -m "Add: 文章标题"
git pull
git push
```

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。

## 版权与授权

- **文章内容**：采用「知识共享 署名-非商业性使用-禁止演绎 4.0 国际（CC BY-NC-ND 4.0）」协议授权。转载需署名作者并保留原文链接，禁止商用与改编；如需超出协议范围使用，请先联系作者授权。
- **网站代码**：采用 MIT 协议。
- 详见根目录 [`LICENSE`](./LICENSE)。
- 每篇文章底部会自动生成版权声明（作者、发布时间、原文链接、授权协议），页面 `<head>` 中也写入了 `canonical` 规范链接与 Open Graph 元数据，用于向搜索引擎声明原始出处。

### 维权 / 取证建议

1. **git 历史即时间戳**：每次发布都会在 GitHub 留下带时间的提交记录，是原创时间的有力证据，请勿强制改写历史。
2. **可信时间戳**：重要文章可上传到「联合信任 TSA 时间戳服务中心」获取司法认可的时间戳。
3. **区块链存证**：可用「保全网」等服务对博客 URL 自动存证，便于后续取证。
4. **著作权登记**：对特别重要的文章，可到中国版权保护中心做著作权登记。
5. 发现整站搬运时，可向对方平台投诉，或对 Google 收录提交 DMCA 删除请求。
