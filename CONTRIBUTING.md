# Contributing Guide

[中文说明](./CONTRIBUTING.zh.md) | [English](./CONTRIBUTING.md)

Thank you for your interest in contributing to **Octoclip Guides**!

---

## 📌 How to Contribute

### Fork & Clone

 ```bash
 git clone https://github.com/YOUR_NAME/octoclip-guides.git
 ```

### Create a Branch

 ```bash
 git checkout -b add-cloud-sync-guide
 ```

### Edit Docs

- Add or edit Markdown files in `docs/`
- Follow the [Writing Principles](README.md#✍️-writing-principles)

### Commit & Push

 ```bash
 git commit -m "docs: add troubleshooting for cloud sync"
 ```

### Open a Pull Request

- Describe your changes clearly
- Reference related issues if applicable

---

## ✍️ Writing Style

- Use **Markdown** only
- English first, Chinese translation if available
- Use **short paragraphs** and **lists**
- For platform-specific notes, use VitePress blocks:

```md
::: tip macOS
Requires Accessibility Permission.
:::
```

---

## 🌐 Multi-language

- English docs in `/docs/`
- Chinese docs in `/docs/zh/`
- Keep structure aligned between languages

---

## ⚖️ License & Attribution

- Docs: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- Code snippets: MIT License

---

## 📝 Commit Message Guidelines

We follow a simplified **Conventional Commits** style:

```plaintext
<type>(<scope>): <short summary>
```

### Types

- **docs**: Documentation changes (guides, FAQ, examples, etc.)
- **fix**: Fixing an error or incorrect info in docs
- **style**: Non-content changes (formatting, spacing, markdown tables)
- **chore**: Build, tooling, or config changes

### Scope (optional)

- Directory or feature name, e.g. `getting-started`, `features`, `faq`

### Examples

```plaintext
docs: add troubleshooting section for cloud sync
docs(getting-started): update installation steps for macOS
fix: correct typo in quick input guide
style: reformat tables in faq.md
chore: update VitePress config for zh locale
```

### Advanced Tips

- **Multi-language edits**: mark language in brackets
- `docs: update clip history page [en]`
- `docs: 更新剪贴历史页面 [zh]`
- **Related issues/PRs**: mention them in the body

```plaintext
docs: add FAQ for Android clipboard restrictions

Related to #42
```

Keeping commit messages consistent helps us maintain a clear history and generate changelogs automatically.
