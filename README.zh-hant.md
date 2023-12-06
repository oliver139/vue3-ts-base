# vue-ts-base

[![en](https://img.shields.io/badge/lang-en-e83f6f.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.md)
[![zh-hant](https://img.shields.io/badge/lang-繁體中文-2274a5.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.zh-hant.md)
[![zh-hans](https://img.shields.io/badge/lang-簡體中文-32936f.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.zh-hans.md)
[![ja](https://img.shields.io/badge/lang-日本語-ffbf00.svg)](https://github.com/oliver139/vue3-ts-base/blob/main/README.ja.md)


一個已預先設定了多個常用功能的Vue 3模板，可用於克隆以開始新的網站開發。使用了Vite + Vue 3組合API + TypeScript。

## 目錄
* [設定](#設定)
* [已包括的功能](#已包括的功能)
  - [Vue](#vue)
  - [Unplugin](#unplugin)
  - [CSS](#css)
  - [JavaScript / TypeScript](#javascript--typescript)
  - [Git](#git)
  - [Vite](#vite)
* [語言國際化](#語言國際化)
  - [轉換語言](#轉換語言)
* [專案設定](#專案設定)

## 設定
### 推薦的 IDE 設定

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（並禁用 Vetur）+ [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## 已包括的功能

### Vue
* [Vue router](https://router.vuejs.org/zh/)
* [Pinia](https://pinia.vuejs.org/zh/)（全域性狀態管理庫）
* [Iconify](https://icon-sets.iconify.design/)（開源圖示庫，商業用可）
* [VueUse](https://www.vueusejs.com/)（很有用的功能庫）
* [vue-i18n](https://vue-i18n.intlify.dev/)（語言國際化）
* [vue-gtag](https://matteo-gabriele.gitbook.io/vue-gtag/) [可選 `--no-optional`]（連結Google Analytics）

### Unplugin
* [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)，可以在不`import`的情況下使用以下的關鍵字：
  - Vue（`ref`, `reactive`, `computed` 等等）
  - Vue Router（`useRoute`, `useRouter` 等等）
  - Vue i18n（[詳細請看下面](#multi-language-support-with-vue-i18n)）
    - `usei18n()`
    - `$t`, `$d`, `$n`, `$local`
    - `_changeLang`
  - VueUse（`@vueuse/core` 裡的方法）
* [unplugin-vue-components](https://github.com/unplugin/unplugin-vue-components)，可以在不`import`的情況下使用元件
  - 所有在 `/src/components` 裡面的 `.vue`
  - [VueUse](https://vueuse.org/)（元件 和 [指令(Directives)](https://vuejs.org/api/built-in-directives.html)）
  - 型別（Types）:
    - `vue-router`
    - `@iconify/vue`

### CSS
* [normalize.css](https://necolas.github.io/normalize.css/)（重置CSS）
* [SCSS](https://sass-lang.com/)

### JavaScript / TypeScript
* [ESLint](https://zh-hans.eslint.org/) 設定了蠻嚴厲的程式碼風格規則，詳情可參考 [`.eslintrc.cjs`](https://github.com/oliver139/vue3-ts-base/blob/main/.eslintrc.cjs)
* [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility)（提供a11y的提示）

### Git
感謝以下的套件，程式碼的風格會在 `git commit` 前自動修正：
* [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks)
* [lint-staged](https://github.com/okonet/lint-staged)

### Vite
以下程式碼會在`build`的時候自動刪除
- `debugger`
- `console.log`
- `console.debug` 

## 語言國際化

使用了`vue-i18n`套件來達成，以下方法已被`unplugin-auto-import`自動引入，因此可以直接不`import`就使用：
- [usei18n()](https://vue-i18n.intlify.dev/guide/advanced/composition.html#basic-usage)
- [$t](https://vue-i18n.intlify.dev/guide/advanced/composition.html#message-translation)
- [$d](https://vue-i18n.intlify.dev/guide/advanced/composition.html#datetime-formatting)
- [$n](https://vue-i18n.intlify.dev/guide/advanced/composition.html#number-formatting)
- `_changeLang`

### 轉換語言
如果你想轉換語言的話，請使用 `_changeLang(**目標語言程式碼**)`
```ts
function _changeLang(targetLocale:string) {
  i18n.global.locale.value = targetLocale;
  localStorage.site_lang = targetLocale;
  document.documentElement.setAttribute("lang", targetLocale);
}
```
這方法會幫你更改以下的數值：
This function helps change:
- The `locale` value in `vue-i18n` 裡的 `locale` 數值
- `LocalStorage` 裡 `site_lang` 的數值
- `<html>` 裡 `lang` 屬性的數值

### 增加更多語言
多得vite的 `import.meta.glob` 功能的幫助，你只需要在 `/src/i18n` 資料夾裡增加新的 `<locale>.json`，然後就會被自動載入

## 專案設定

套件管理：[pnpm](https://pnpm.io/)

NodeJS版本：20.10.0

### 安裝

```sh
pnpm install
```

### 啟動本地伺服器進行開發

```sh
pnpm dev
```

### 構建生產版本

```sh
pnpm build
```

### 透過[ESLint](https://eslint.org/)進行程式碼風格檢查

```sh
pnpm lint
```
