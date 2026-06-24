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
categories = ['优化与算法']
summary = '一句话摘要，显示在列表页。'
+++
```

`categories` 请从以下三项中选择一项：

| 分类 | 适用内容 |
|------|----------|
| `逻辑与写作` | 论证、写作、阅读方法 |
| `地理与遥感` | 遥感、地理分析、空间数据 |
| `优化与算法` | 优化、机器学习、算法实现 |

## 发布

```powershell
git add .
git commit -m "Add: 文章标题"
git pull
git push
```

推送到 `main` 后，GitHub Actions 会自动构建并发布到 GitHub Pages。
