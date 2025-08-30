# 贡献指南

[中文说明](./CONTRIBUTING.zh.md) | [English](./CONTRIBUTING.md)

感谢你愿意为 **章鱼速贴 用户指南** 做出贡献！

---

## 📌 如何贡献

### Fork 并克隆

 ```bash
 git clone https://github.com/YOUR_NAME/octoclip-guides.git
 ```

### 创建分支

 ```bash
 git checkout -b add-cloud-sync-guide
 ```

### 编辑文档

- 在 `docs/` 或 `docs/zh/` 中添加或修改 Markdown 文件
- 遵循 [写作原则](README.zh.md#✍️-写作原则)

### 提交与推送

 ```bash
 git commit -m "docs: 添加云同步故障排查"
 ```

### 发起 Pull Request

- 清楚说明改动内容
- 如有相关 issue，请一并引用

---

## ✍️ 写作风格

- 仅使用 **Markdown**
- 优先英文，中文保持同步
- 使用 **短段落** 与 **列表**
- 平台差异请使用 VitePress 提示块：

```md
::: tip macOS
需要开启辅助功能权限。
:::
```

---

## 🌐 多语言支持

- 英文文档在 `/docs/`
- 中文文档在 `/docs/zh/`
- 保持目录结构一致

---

## ⚖️ 许可与署名

- 文档：采用 [CC BY 4.0 协议](https://creativecommons.org/licenses/by/4.0/deed.zh)
- 代码片段：MIT 协议

---

## 📝 提交日志规范

本项目采用简化版 **Conventional Commits** 风格：

```plaintext
<type>(<scope>): <short summary>
```

### 常用类型

- **docs**: 文档改动（指南、FAQ、示例等）
- **fix**: 修复文档中的错误或不正确信息
- **style**: 格式调整（排版、空格、Markdown 表格等）
- **chore**: 构建、工具或配置改动

### scope（可选）

- 目录或功能名，例如：`getting-started`、`features`、`faq`

### 示例

```plaintext
docs: 添加云同步故障排查章节
docs(getting-started): 更新 macOS 安装步骤
fix: 修正快速输入指南中的拼写错误
style: 调整 FAQ 表格排版
chore: 更新 VitePress 中文语言配置
```

### 高级用法

- **多语言改动**：在日志中注明语言
- `docs: update clip history page [en]`
- `docs: 更新剪贴历史页面 [zh]`
- **关联 issue/PR**：在正文中标注

```plaintext
docs: 添加 Android 剪贴板限制相关 FAQ

关联 #42
```

保持提交信息一致，有助于维护清晰的历史记录，并自动生成更新日志。
