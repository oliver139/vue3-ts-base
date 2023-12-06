# vue-ts-base

[![en](https://img.shields.io/badge/lang-en-e83f6f.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.md)
[![zh-hant](https://img.shields.io/badge/lang-繁体中文-2274a5.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.zh-hant.md)
[![zh-hans](https://img.shields.io/badge/lang-简体中文-32936f.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.zh-hans.md)
[![ja](https://img.shields.io/badge/lang-日本语-ffbf00.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.ja.md)


一个已预先设置了多个常用功能的Vue 3模板，可用于克隆以开始新的网站开发。使用了Vite + Vue 3组合API + TypeScript。

## 目录
* [设置](#设置)
* [已包括的功能](#已包括的功能)
  - [Vue](#vue)
  - [Unplugin](#unplugin)
  - [CSS](#css)
  - [JavaScript / TypeScript](#javascript--typescript)
  - [Git](#git)
  - [Vite](#vite)
* [语言国际化](#语言国际化)
  - [转换语言](#转换语言)
* [项目设置](#项目设置)

## 设置
### 推荐的 IDE 设置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用 Vetur）+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 已包括的功能

### Vue
* [Vue router](https://router.vuejs.org/zh/)
* [Pinia](https://pinia.vuejs.org/zh/)（全局状态管理库）
* [Iconify](https://icon-sets.iconify.design/)（开源图标库，商业用可）
* [VueUse](https://www.vueusejs.com/)（很有用的功能库）
* [vue-i18n](https://vue-i18n.intlify.dev/)（语言国际化）
* [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) [可选 `--no-optional`]（链接Google Analytics）

### Unplugin
* [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)，可以在不`import`的情况下使用以下的关键字：
  - Vue（`ref`, `reactive`, `computed` 等等）
  - Vue Router（`useRoute`, `useRouter` 等等）
  - Vue i18n（[详细请看下面](#multi-language-support-with-vue-i18n)）
    - `usei18n()`
    - `$t`, `$d`, `$n`, `$local`
    - `_changeLang`
  - VueUse（`@vueuse/core` 里的方法）
* [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)，可以在不`import`的情况下使用组件
  - 所有在 `/src/components` 里面的 `.vue`
  - [VueUse](https://vueuse.org/)（组件 和 [指令(Directives)](https://vuejs.org/api/built-in-directives.html)）
  - 类型（Types）:
    - `vue-router`
    - `@iconify/vue`

### CSS
* [normalize.css](https://necolas.github.io/normalize.css/)（重置CSS）
* [SCSS](https://sass-lang.com/)

### JavaScript / TypeScript
* [ESLint](https://zh-hans.eslint.org/) 设置了蛮严厉的代码风格规则，详情可参考 [`.eslintrc.cjs`](https://github.com/oliver139/vue3-ts-base/blob/main/.eslintrc.cjs)
* [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility)（提供a11y的提示）

### Git
感谢以下的套件，代码的风格会在 `git commit` 前自动修正：
* [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)
* [lint-staged](https://github.com/okonet/lint-staged)

### Vite
以下代码会在`build`的时候自动删除
- `debugger`
- `console.log`
- `console.debug` 

## 语言国际化

使用了`vue-i18n`套件来达成，以下方法已被`unplugin-auto-import`自动引入，因此可以直接不`import`就使用：
- [usei18n()](https://vue-i18n.intlify.dev/guide/advanced/composition.html#basic-usage)
- [$t](https://vue-i18n.intlify.dev/guide/advanced/composition.html#message-translation)
- [$d](https://vue-i18n.intlify.dev/guide/advanced/composition.html#datetime-formatting)
- [$n](https://vue-i18n.intlify.dev/guide/advanced/composition.html#number-formatting)
- `_changeLang`

### 转换语言
如果你想转换语言的话，请使用 `_changeLang(**目标语言代码**)`
```ts
function _changeLang(targetLocale:string) {
  i18n.global.locale.value = targetLocale;
  localStorage.site_lang = targetLocale;
  document.documentElement.setAttribute("lang", targetLocale);
}
```
这方法会帮你更改以下的数值：
This function helps change:
- The `locale` value in `vue-i18n` 里的 `locale` 数值
- `LocalStorage` 里 `site_lang` 的数值
- `<html>` 里 `lang` 属性的数值

### 增加更多语言
多得vite的 `import.meta.glob` 功能的帮助，你只需要在 `/src/i18n` 文件夹里增加新的 `<locale>.json`，然后就会被自动加载

## 项目设置

套件管理：[pnpm](https://pnpm.io/)

NodeJS版本：20.10.0

### 安装

```sh
pnpm install
```

### 启动本地服务器进行开发

```sh
pnpm dev
```

### 构建生产版本

```sh
pnpm build
```

### 通过[ESLint](https://eslint.org/)进行代码风格检查

```sh
pnpm lint
```
