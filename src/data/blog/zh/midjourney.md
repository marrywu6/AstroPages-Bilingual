---
title: '# Midjourney 提示词生成器'
pubDatetime: 2026-03-30
description: >
  一个基于 Next.js、TypeScript 和 Tailwind CSS 构建的开源 Midjourney
  提示词生成器。旨在帮助用户轻松创建富有创意和多样化的 Midjourney 提示词，激发无限的艺术可能性。
draft: false
featured: true
tags:
  - Midjourney
---
# Midjourney 提示词生成器

![GitHub stars](https://img.shields.io/github/stars/Amery2010/midjourney-prompt-generator?style=social)
![GitHub forks](https://img.shields.io/github/forks/Amery2010/midjourney-prompt-generator?style=social)
![License](https://img.shields.io/github/license/Amery2010/midjourney-prompt-generator)

[English](./README.md) · **简体中文**

一个基于 Next.js、TypeScript 和 Tailwind CSS 构建的开源 Midjourney 提示词生成器。旨在帮助用户轻松创建富有创意和多样化的 Midjourney 提示词，激发无限的艺术可能性。

## ✨ 特性

- **智能提示词优化 (文本转提示词)**：用户输入初步想法或关键词，系统将对其进行智能优化和扩展，生成高质量的 Midjourney 提示词。
- **图片转提示词 (图像描述)**：支持上传图片，系统会分析图片内容并将其转换为详细的文本描述，作为生成提示词的基础。
- **预设参数选择**：提供便捷的预设参数按钮，用户可选择常用的图片比例和多种绘画风格。这些参数将在提示词优化过程中作为基础，确保生成结果符合用户偏好。
- **直观的用户界面**：使用 Tailwind CSS 构建的简洁美观的界面，提供流畅的用户体验。
- **实时预览**：在生成提示词时提供实时预览，帮助用户快速迭代。
- **一键复制**：轻松复制生成的提示词，方便直接粘贴到 Midjourney。
- **开源且可扩展**：社区驱动，易于贡献和功能扩展。

## 🚀 技术栈

- **Next.js**：强大的 React 框架，支持服务器端渲染 (SSR) 和静态网站生成 (SSG)。
- **TypeScript**：为 JavaScript 添加静态类型，提高代码质量和可维护性。
- **Tailwind CSS**：实用至上 (Utility-first) 的 CSS 框架，快速构建自定义设计。

## ⚙️ 快速开始

### 前提条件

在开始之前，请确保您的开发环境中已安装以下软件：

- Node.js (推荐 18.18.x 或更高版本 LTS 版本)
- pnpm 或 yarn 或 npm

### 安装

1. **克隆仓库**：

   ```bash
   git clone https://github.com/Amery2010/midjourney-prompt-generator.git
   cd midjourney-prompt-generator
   ```

1. **安装依赖**：

   ```bash
   # 使用 pnpm
   pnpm install
   # 或者使用 yarn
   yarn install
   # 或者使用 npm
   npm install
   ```

1. **运行开发服务器**：

   ```bash
   # 使用 pnpm
   pnpm dev
   # 或者使用 yarn
   yarn dev
   # 或者使用 npm
   npm run dev
   ```

   项目将在 `http://localhost:3000` 启动。在浏览器中打开此地址即可开始使用。

### 环境变量

您需要将 `env.example` 这个文件名修改 `.env`，才可以在项目中使用环境变量。

- `BASE_URL`: 选填，网站网址，用于生成网站的 openGraph。
- `POLLINATIONS_AI_API_KEY`: 选填，[pollinations.ai](https://pollinations.ai/) 提供了不少免费的模型，但部分模型需要您通过[注册一个免费账号](https://auth.pollinations.ai/)获取密钥之后才可以使用。
- `AI_PROVIDER_BASE_URL`: AI 供应商的 API 网址，**仅支持 OpenAI 形式**。 默认为 "https://text.pollinations.ai/openai"。
- `AI_PROVIDER_API_KEY`: 选填. AI 供应商的 API 密钥。
- `AI_PROVIDER_DEFAULT_MODEL`: AI 供应商的基础模型 ID。默认为 "openai"。

## 💡 使用方法

打开应用程序后，您将看到一个直观的界面，可以选择以下两种主要方式来生成和优化提示词：

### 1. 文本输入优化提示词

1. **输入您的想法**：在文本输入框中键入您的初步想法、关键词或对图像的简短描述。
1. **选择预设参数 (可选)**：点击“预设参数”按钮，选择您偏好的图片比例 (例如 16:9, 1:1, 2:3) 和绘画风格 (例如赛博朋克、水彩)。这些将作为基础参数融入到最终的提示词中。
1. **生成与优化**：系统将结合您的输入、预设参数和所选元素，智能优化并生成一个详细的 Midjourney 提示词。

### 2. 图片转提示词与优化

1. **上传图片**：点击“上传图片”按钮，选择一张您希望转换为提示词的图片。
1. **图片分析**：系统将分析上传的图片，并生成一个基于图片内容的初步文本描述。
1. **选择预设参数 (可选)**：同上，选择您偏好的图片比例和绘画风格，这些将与图片描述一起作为基础。
1. **生成最终提示词**：系统将合并所有信息，为您生成一个用于 Midjourney 的综合提示词。

### 统一操作

- **一键复制**：点击“复制”按钮，将生成的提示词复制到剪贴板。
- **粘贴到 Midjourney**：将复制的提示词粘贴到 Midjourney 聊天或机器人中，即可生成您的图像。

## 部署

您可以选择将此项目部署到 Vercel 或 Cloudflare Workders 等平台。

### 🚀 部署到 Vercel

![Deploy with Vercel](https://vercel.com/button)

Vercel 是 Next.js 的创建者，提供了零配置部署 Next.js 应用程序的最佳体验。

1. **准备您的应用**：确保您的 Next.js 应用已准备好部署，并在本地构建成功（运行 `npm run build`）。
1. **推送到 Git 仓库**：将您的项目代码推送到一个 Git 仓库（如 GitHub, GitLab, Bitbucket）。
1. **创建 Vercel 账户**：如果您还没有 Vercel 账户，请访问 [vercel.com](https://vercel.com/) 注册一个。
1. **导入项目**：
   - 登录 Vercel Dashboard。
   - 点击 "New Project" (新项目) 按钮。
   - 您将被提示从 Git 仓库导入项目。选择您的 "Midjourney Prompt Generator" 仓库。
   - Vercel 会自动检测这是一个 Next.js 项目，并预设构建设置。对于大多数情况，您可以保留默认设置。
   - 如果您的应用需要环境变量，可以在部署前在 Vercel 项目设置中添加它们。
1. **部署**：点击 "Deploy" (部署) 按钮。Vercel 将开始构建和部署您的应用程序。
1. **访问应用**：部署完成后，Vercel 会提供一个唯一的 URL 来访问您的实时应用程序。Vercel 默认支持持续部署，每次推送到连接的分支时都会自动重新部署。

### ☁️ 部署到 Cloudflare Workers

Cloudflare Workers 提供了一个简单免费的方式来托管您的应用程序，具有全球 CDN 和快速加载的优势。

1. **推送到 Git 仓库**：确保您的 Next.js 应用已推送到一个 GitHub 仓库。
1. **创建 Cloudflare 账户**：如果您还没有 Cloudflare 账户，请访问 [cloudflare.com](https://www.cloudflare.com/) 注册一个。
1. **创建新项目**：
   - 登录 Cloudflare Dashboard。
   - 导航到 "Workers & Pages" > "Create" (创建) > "Workers" > "Connect to Git" (连接到 Git)。
   - 授权 Cloudflare 访问您的 GitHub 账户。
1. **选择您的 Git 仓库**：选择您的 "Midjourney Prompt Generator" 仓库。
1. **配置您的项目**：
   - 提供一个项目名称。
     - **Deploy command (部署命令)**: 将部署命令修改为 `pnpm run deploy`。
     - **环境变量**: 如果您的应用需要，可以在 Cloudflare Workers 项目设置中添加环境变量。
1. **部署**：点击 "Create and Deploy" (创建并部署) 按钮。Cloudflare Workers 将安装依赖、构建项目并将其部署到全球网络。
1. **访问应用**：部署完成后，Cloudflare 会提供一个子域名。您也可以在项目设置中配置自定义域名。

### 🚢 使用 Docker 部署

> Docker 版本需为 20 或更高版本，否则会提示找不到镜像。

```bash
docker pull ghcr.io/Amery2010/midjourney-prompt-generator:latest
docker run -d --name midjourney-prompt-generator:latest -p 8721:3000 ghcr.io/Amery2010/midjourney-prompt-generator:latest
```

您还可以指定其他环境变量：

```bash
docker run -d --name midjourney-prompt-generator \
  -p 8721:3000 \
  -e BASE_URL=您的网站网址 \
  -e POLLINATIONS_AI_API_KEY=pollinations-auth-key \
  ghcr.io/Amery2010/midjourney-prompt-generator:latest
```

或者构建您自己的 docker 镜像：

```bash
docker build -t midjourney-prompt-generator .
docker run -d --name midjourney-prompt-generator -p midjourney-prompt-generator:latest
```

如果您需要指定其他环境变量，请在以上命令中添加 `-e key=value` 进行指定。

使用 `docker-compose.yml` 部署：

```bash
docker compose -f docker-compose.yml build
```

## 🤝 贡献

我们欢迎并感谢任何形式的贡献！如果您有改进建议、发现了 bug 或想添加新功能，请：

1. Fork 此仓库。
1. 创建您的功能分支 (`git checkout -b feature/AmazingFeature`)。
1. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)。
1. 推送到分支 (`git push origin feature/AmazingFeature`)。
1. 打开一个 Pull Request。

请确保您的代码遵循项目的编码规范，并附上必要的测试。

## 📄 许可证

本项目根据 MIT 许可证发布。详见 [LICENSE](LICENSE) 文件。
