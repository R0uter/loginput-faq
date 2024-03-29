# 落格输入法的兼容性

对于落格输入法最新的的兼容性和 bug 追踪，请移步：https://trello.com/b/OjRDX0j6 

这里列出了历史以来确认的兼容性问题。


## iOS 📱

### QQ
在 iOS 版 QQ 客户端中，使用落格输入法，弹出的键盘配色有时（极少数）与 qq 程序当前配色相反，即黑色识别为白色，白色识别为黑色，导致界面文字看不清、按键颜色突兀。

这是 QQ 本身问题，似乎他们使用了什么奇怪的实现，导致系统发出的黑白配色信号出错，实在难以针对 QQ 做专门的配适。

绕过办法：
1、在候选栏下划收起键盘，再重新弹出即可。
或者
2、使用落格输入法固定黑色或者白色配色模式，不再根据 QQ 皮肤动态变换黑白配色。

### Accessibility BoldText

这个功能是辅助功能中的字体加粗，实际上落格输入法 X 的键盘字体是支持在 App 中自定义的，如果用户自定义了字体，那么不同字体的加粗名称不同，很难动态化处理，这也和自定义相矛盾，所以需要用户在开启系统加粗字体后，自己去落格输入法 X App 中设置键盘字体为任意加粗字体。

### 性能

在性能比 iPad mini 4 更低的设备上可能使用落格输入法略有卡顿。

### 输入框布局兼容性

在极其个别的微信小程序中（已知：拼多多在线客服）输入框布局可能不正常。

## macOS 💻

### VoiceOver 网页快速导航（单键导航）兼容问题

落格输入法 macOS 2 在浏览器中如果输入过文字，则当前页面下旁白的快速导航不可用，但方向键依旧可用。

这是由于系统无法正确拦截按键信号导致，第三方输入法本身无法获取快速导航（单键导航 Quick Nav 的开关状态），系统按键处理与输入法处理冲突，导致两者谁也拿不到信号，此时快速导航功能异常。

绕过办法：重新激活当前窗口即可，简单来说就是使用 cmd+tab 快捷键切换到任意app再切换回来（按两次就好了），这样单键导航就又可用了。

另外在 Chrome 中，开启单键导航还会导致输入法无法使用方向键选择候选，VoiceOver 的 Chrome 用户续谨慎购买。


### 文字判断

对于不支持 TSMDocumentAccess 的 app，落格输入法无法获取并判断输入框中的内容，这导致例如“英文和数字前后自动插入空格”等功能无法使用。

### 系统权限
系统偏好设置→安全和隐私→隐私→轻松访问中，“允许下方 app 控制你的电脑”。

如果不在此处勾选 落格输入法 macOS 2，那么一些特殊的操作可能无法完成，比如移动光标的宏以及 Capslock 切换中英文。

这是由于落格输入法无法直接控制输入点的光标导致的，我们在此处使用了“虚拟按键”的方式来绕过这个限制，但“虚拟按键”功能要求使用这个权限。如果你坚持不授权，那么你在遇到对应功能的时候会体现为功能无效，但【并不会】影响其他任何功能的使用。

使用 Capslock 或者 增强模式 时，落格输入法会使用同一套 API 从系统底层获取按键信号以及大小写锁定提示灯状态等，如果没有这个权限，则此功能无法生效。

### 底层消息传递拦截（此问题已经由“增强模式”解决）

落格输入法使用最新的 Swift 编程语言编写，由于一些我们也不知道的玄学原因，落格输入法的消息获取层级似乎没有 Objective-C 编译的层级低，这导致了一些特殊的优势和劣势，比如：

- 在一些特殊的 app 中，落格输入法无法获取 shift 按键消息以切换输入法的中英文模式，绕过办法：考虑使用 control 切换中英文模式，或者按回车输入英文。

- 在 Excel 中翻页行为与输入冲突，Excel 似乎使用了一些奇怪的底层处理来拦截用户输入，这和落格输入法产生了冲突。


### 辅助功能系统错误

在 VoiceOver 开启时，使用落格输入法，候选栏出现总会被读成 “application”，上屏后会触发输入框全文朗读，这些都是系统上游错误，目前无法处理。

对于后者，可以考虑按一下右方向键来打断朗读。

> 在 macOS 10.15.4 版本系统中，VoiceOver 会在遇到国旗 Emoji 时崩溃，某些时候无法正常选词，此时请关闭落格输入法的“智能 Emoji 候选”功能。


### 垃圾文件

理论上来讲落格输入法【不会】生成垃圾文件，但由于落格输入法 macOS 2 在运行时会长时间读取数据库，所以数据库会生成临时的缓存文件，这个文件是程序运行所必须的，许多 macOS 清理软件例如 CleanMyMac ，会清理这些缓存文件，直接导致落格输入法的词库系统损坏，或者部分功能行为异常。

解决办法：彻底删除落格输入法的所有相关文件后重新安装（覆盖安装无效）