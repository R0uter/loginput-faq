# 落格输入法都支持哪些 URL Scheme？

落格输入法 X 和 落格输入法 macOS 2 都支持 URL Scheme，具体如下：

## 落格输入法 X

落格输入法 X 目前仅支持通过 URL Scheme 快速打开各种设置界面，并不支持直接通过 URL Scheme 修改或添加配置。

落格输入法 X 的 URL Scheme 为 [`loginputx://`](loginputx://)。如果直接使用此地址，则单纯打开 App。

- `preferences` 打开“偏好设置”界面（[`loginputx://preferences`](loginputx://preferences)）；
- `lgcloud` 打开“对数云”界面（[`loginputx://lgcloud`](loginputx://lgcloud)）；
- `system` 打开“系统设置”界面（[`loginputx://system`](loginputx://system)）；
- `other` 打开“其他”界面（[`loginputx://other`](loginputx://other)）。

### preferences/*

在此路径下，还包括了如下三个选项：

- `interface` 打开“界面调整”界面；
- `function` 打开“功能定制”界面；
- `license` 打开“授权管理”界面。

> 比如：[`loginputx://preferences/interface`](loginputx://preferences/interface)

#### interface/*
在此路径下，用户可进一步直达界面调整中特定的选项设置界面：

- `skn` 打开“提示皮肤”设置界面；
- `layout` 打开“键盘布局”设置界面；
- `font` 打开“键盘字体”设置界面；
- `keyboardcolor` 打开“键盘配色”设置界面；
- `bufferstyle` 打开“Buffer 风格”设置界面；
- `puncstyle` 打开“符号键盘风格”设置界面；
- `candidatestyle` 打开“候选风格”设置界面；
- `buttoneffect` 打开“按键风格”设置界面；
- `background` 打开“键盘背景”设置界面；
- `colorful` 打开“炫彩键盘”设置界面；
- `onehand` 打开“单手键盘”设置界面。

> 比如：[`loginputx://preferences/interface/skn`](loginputx://preferences/interface/skn)

#### function/*

在此路径下，用户可进一步直达功能定制中特定的选项设置界面

- `s2t` 打开“输简出繁”设置界面；
- `clicksound` 打开“按键音反馈”设置界面；
- `vibratefeedback` 打开“按键振动反馈”设置界面；
- `voiceover` 打开“VoiceOver 旁白”设置界面；
- `shift` 打开“Shift 键额外功能”设置界面。

> 比如：[`loginputx://preferences/function/s2t`](loginputx://preferences/function/s2t)

### lgcloud/*

在此路径下，还包括了如下七个选项：

- `img` 打开对数云“键盘背景图”列表；
- `ext` 打开对数云“扩展词库”列表；
- `sp` 打开对数云“双拼方案”列表；
- `ct` 打开对数云“主码表”列表；
- `ast` 打开对数云“词汇辅码”列表；
- `skn` 打开对数云“键盘提示皮肤”列表；
- `boot` 打开对数云“点划引导配置”列表。

> 比如：[`loginputx://lgcloud/img`](loginputx://lgcloud/img)

### system/*

在此路径下，还包括了如下 11 个选项：

- `pinyin` 打开“拼音方案”设置界面；
- `codetable` 打开“主码表”设置界面；
- `assist` 打开“辅码码表”设置界面；
- `fuzzypy` 打开“模糊音”设置界面；
- `bootbutton` 打开“点划引导”设置界面；
- `customcode` 打开“自定义编码”设置界面；
- `quickmsg` 打开“快捷短语”设置界面；
- `extended` 打开“扩展词库”设置界面；
- `security` 打开“安全和隐私”设置界面；
- `reset` 打开“重置或修复”设置界面；
- `backup` 打开“备份恢复”设置界面。

> 比如：[`loginputx://system/pinyin`](loginputx://system/pinyin)

### other/*

在此路径下，还包括了如下五个选项：

- `lab` 打开“实验室”设置界面；
- `icon` 打开“App 图标”设置界面；
- `tint` 打开“App 高亮色彩”设置界面；
- `theme` 打开“App 配色主题”设置界面；
- `components` 打开“组件管理”设置界面。

> 比如：[`loginputx://other/lab`](loginputx://other/lab)

## 落格输入法 macOS 2

落格输入法 macOS 2 的 URL Scheme 为 [`loginputmac2://`](loginputmac2://)，你可以直接用这个地址来调用落格输入法的设置 App。

> 注意：第一次使用此 URL Scheme 可能无法成功调起，由于系统注册原因，你需要先启动一次设置，方能正常使用。

- [`loginputmac2://tab/one`](loginputmac2://tab/one)  打开设置的第一个页面，此功能对应的还有`two`,`three`,`four`,`five`,`six`；
- [`loginputmac2://functions/*`](loginputmac2://functions/silence) 直接打开“系统”页面的各种功能设置菜单，其中包括了：
  - `silence` 静默列表；
  - `bootButton` 点划引导；
  - `customCodetable` 自定义编码；
  - `extended` 扩展词库；
  - `puncMap` 符号映射。

> 当然，在你调起对应界面时，记得先在设置中开启对应功能。




