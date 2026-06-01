# Mark 的个人博客

这是一个 Hugo 静态博客项目，适合用 Typora 写 Markdown，再通过 GitHub Pages 发布。

## 本地预览

先进入博客目录：

```powershell
cd D:\blog
```

然后启动预览：

```powershell
D:\Program\Hugo\bin\hugo.exe server -D
```

访问：

```text
http://localhost:1313/
```

## 新建文章

在 `D:\blog` 目录里运行：

```powershell
D:\Program\Hugo\bin\hugo.exe new content content/posts/my-new-post/index.md
```

然后用 Typora 打开 `index.md` 写作。发布前确认文章头部是：

```toml
draft = false
```

## 发布

推送到 GitHub 的 `main` 分支后，GitHub Actions 会自动构建并发布到 GitHub Pages。
