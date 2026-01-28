# 图片下载扩展 (Image Download Extension)

一个功能强大的 Chrome 浏览器扩展，帮助您轻松从任何网页采集、预览和批量下载图片。

## ✨ 主要功能

### 🖼️ 图片采集
- **自动扫描**：自动检测并采集当前网页中的所有图片
- **实时更新**：支持动态加载的图片，实时更新采集列表
- **智能过滤**：自动过滤重复和无效的图片链接

### 👁️ 图片预览
- **大图预览**：点击图片即可全屏预览
- **快速切换**：支持左右箭头按钮或键盘快捷键（←/→）切换图片
- **循环浏览**：支持循环切换（最后一张→第一张，第一张→最后一张）
- **索引显示**：显示当前图片位置（如：3/10）
- **快捷键支持**：
  - `←` / `→`：切换上一张/下一张图片
  - `ESC`：关闭预览

### 🎯 智能筛选
- **格式筛选**：支持按图片格式筛选（PNG、JPG、JPEG、GIF、WEBP）
- **尺寸筛选**：支持按图片尺寸范围筛选
- **多选支持**：可同时选择多个筛选条件

### 📥 批量下载
- **选择性下载**：只下载您选中的图片
- **批量处理**：支持一次性下载多张图片
- **智能命名**：自动处理文件名，避免特殊字符冲突
- **下载进度**：实时显示下载状态

### 🎨 用户界面
- **现代化设计**：采用杂志/编辑风格的 UI 设计
- **响应式布局**：适配不同屏幕尺寸
- **流畅动画**：优雅的过渡和交互动画
- **中文优化**：完美支持中文字体显示

## 🚀 快速开始

### 安装方式

#### 方式一：从源码构建（推荐）

1. **克隆仓库**
   ```bash
   git clone <repository-url>
   cd download-image-extension
   ```

2. **安装依赖**
   ```bash
   pnpm install
   # 或
   npm install
   # 或
   yarn install
   ```

3. **构建项目**
   ```bash
   pnpm build
   # 或
   npm run build
   ```

4. **加载扩展**
   - 打开 Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 开启"开发者模式"
   - 点击"加载已解压的扩展程序"
   - 选择项目的 `dist` 目录

#### 方式二：从 Chrome Web Store 安装（待发布）

> 扩展正在准备发布到 Chrome Web Store，敬请期待！

### 使用方法

1. **打开扩展**
   - 点击浏览器工具栏中的扩展图标
   - 或使用快捷键（如果已配置）

2. **采集图片**
   - 扩展会自动扫描当前标签页的图片
   - 等待扫描完成，图片列表将自动显示

3. **筛选图片**
   - 使用顶部的筛选选项：
     - 选择图片格式（PNG、JPG、GIF 等）
     - 设置尺寸范围
   - 筛选结果会实时更新

4. **预览图片**
   - 点击任意图片即可全屏预览
   - 使用箭头按钮或键盘快捷键切换图片

5. **下载图片**
   - 勾选要下载的图片
   - 点击"下载"按钮
   - 图片将保存到浏览器的默认下载目录

## 🛠️ 技术栈

- **前端框架**：React 18.3
- **开发语言**：TypeScript 5.2
- **构建工具**：Vite 5.3
- **UI 框架**：Chakra UI 2.8
- **动画库**：Framer Motion 11.2
- **扩展 API**：Chrome Extension Manifest V3

### 核心依赖

```json
{
  "@chakra-ui/react": "^2.8.2",
  "react": "^18.3.1",
  "typescript": "^5.2.2",
  "vite": "^5.3.1",
  "webextension-polyfill": "^0.12.0"
}
```

## 📁 项目结构

```
download-image-extension/
├── download/                 # 主应用代码
│   ├── components/          # React 组件
│   │   ├── image-wrapper/   # 图片包装组件
│   │   └── preview/         # 预览组件
│   ├── config/              # 配置文件
│   │   ├── env.ts          # 环境配置
│   │   └── theme.ts        # UI 主题配置
│   ├── util/               # 工具函数
│   │   ├── download.ts     # 下载逻辑
│   │   ├── log.ts          # 日志工具
│   │   └── native.ts       # 原生 API 封装
│   ├── App.tsx             # 主应用组件
│   └── main.tsx            # 应用入口
├── public/                  # 静态资源
│   ├── hook.js             # Content Script
│   ├── manifest.json       # 扩展清单文件
│   └── icon.png            # 扩展图标
├── dist/                    # 构建输出目录
├── package.json            # 项目配置
└── vite.config.ts          # Vite 配置
```

## 🔧 开发指南

### 开发环境设置

1. **安装依赖**
   ```bash
   pnpm install
   ```

2. **启动开发服务器**
   ```bash
   pnpm dev
   ```

3. **构建生产版本**
   ```bash
   pnpm build
   ```

4. **代码检查**
   ```bash
   pnpm lint
   ```

### 开发注意事项

- **Content Script 注入**：扩展使用动态脚本注入，确保在特殊页面（如 `chrome://`）上正确处理错误
- **消息传递**：使用 `chrome.tabs.sendMessage` 进行通信，需要处理连接失败的情况
- **权限管理**：扩展需要 `downloads`、`tabs` 和 `scripting` 权限

## 🐛 常见问题

### Q: 扩展无法采集图片？
**A:** 请确保：
- 当前页面已完全加载
- 页面不是特殊页面（如 `chrome://`、`about:` 等）
- 刷新目标页面后重试

### Q: 下载按钮不显示？
**A:** 下载按钮仅在选中图片时显示。请先勾选要下载的图片。

### Q: 预览功能无法使用？
**A:** 请确保：
- 图片已成功加载
- 浏览器支持相关 API
- 尝试刷新页面后重试

### Q: 如何批量选择图片？
**A:** 目前需要逐个点击图片进行选择。批量选择功能正在开发中。

## 📝 更新日志

### v1.0.0 (2026-01-28)

#### ✨ 新功能
- 图片预览功能，支持左右切换和键盘快捷键
- 循环切换图片（最后一张→第一张）
- 图片索引指示器（当前/总数）
- 下载按钮条件显示（仅在有选中图片时显示）

#### 🐛 修复
- 修复 `useDisclosure` hook 引用错误
- 优化 Content Script 注入逻辑
- 改进错误处理和用户提示

#### 🎨 优化
- 优化 UI 样式和动画效果
- 改进中文字体显示
- 压缩顶部区域高度，增加图片显示空间

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 👤 作者

**再见孙悟空**

## 🙏 致谢

- [Chakra UI](https://chakra-ui.com/) - 优秀的 React UI 组件库
- [Vite](https://vitejs.dev/) - 快速的构建工具
- [React](https://react.dev/) - 强大的前端框架

## 📮 反馈与支持

如果您在使用过程中遇到问题或有任何建议，欢迎：
- 提交 [Issue](https://github.com/your-repo/issues)

---

**⭐ 如果这个项目对您有帮助，请给个 Star！**
