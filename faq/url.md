# 落格输入法都支持哪些 URL Scheme？

落格输入法 X 目前还不支持任何 URL Scheme，但最新版本的 落格输入法 macOS 2 已经支持了 URL Scheme，具体如下：

## 落格输入法 macOS 2

落格输入法 macOS 2 的 URL Scheme 为 `loginputmac2://`，你可以直接用这个协议头来调用落格输入法的设置 app

> 注意：第一次使用此 URL Scheme 可能无法成功调起，由于系统注册原因，你需要先启动一次设置，方能正常使用。

- `loginputmac2://tab/one`  打开设置的第一个页面，此功能对应的还有`two`,`three`,`four`,`five`,`six`；
- `loginputmac2://functions/*` 直接打开“系统”页面的各种功能设置菜单，其中包括了：
  - `silence` 静默列表；
  - `bootButton` 点划引导；
  - `customCodetable` 自定义编码；
  - `extended` 扩展词库；
  - `puncMap` 符号映射。

> 当然，在你调起对应界面时，记得先在设置中开启对应功能。

## 落格输入法 X

_更多快捷 URL Scheme 即将上线。_



