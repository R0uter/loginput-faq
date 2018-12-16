# fcitx-remote-for-osx 兼容

要安装 fcitx-remote-for-osx 的落格输入法兼容，请直接在终端执行：

`brew install fcitx-remote-for-osx --with-input-method=loginput2` 

---
> 感谢 ArchCST 的详细教程，原文在[这里](https://archcst.github.io/blog/2018/08/29/loginput-with-frfo/)。

Mac 下使用 Vim 或 Spacemacs 的用户可能需要在退出 Insert Mode 进入 Normal Mode 的时候自动切换回英文输入法，避免中文输入法截断快捷键的输入。 fcitx-remote-for-osx 插件可以实现这个功能。

这里只提一下官方还没有支持的落格输入法如何实现。

## 准备工作

MAS 安装 Xcode，启用 Command Line Tool。

## 操作步骤

克隆 fcitx-remote-for-osx 仓库：

```text
$ cd ~/git
$ git clone https://github.com/CodeFalling/fcitx-remote-for-osx $ cd fcitx-remote-for-osx
```

如果之前已经使用过 homebrew 安装过 fcitx-remote-for-osx 可以通过 `fcitx-remote -n` 查询到落格输入法的识别名称为 `com.logcg.inputmethod.LogInputMac2.LogInputMac2SP`，然后就可以自行编译了：

```text
$ xcodebuild GCC_PREPROCESSOR_DEFINITIONS='$GCC_PREPROCESSOR_DEFINITIONS CHINESE_KEYBOARD_LAYOUT=@\"com.logcg.inputmethod.LogInputMac2.LogInputMac2SP\"' install
```

编译中遇到以下报错：

```text
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools'  is a command line tools instance
```

可以通过以下代码解决：

```text
$ sudo xcode-select  -s /Applications/Xcode.app/Contents/Developer
```

## 检测安装是否成功

使用以下代码检测是否安装成功：

```text
$ fcitx-remote -c # 切换回英文  Changing to com.apple.keylayout.US # 成功 
$ fcitx-remote -o # 切换到中文  Changing to com.logcg.inputmethod.LogInputMac2.LogInputMac2SP  # 成功
```

Enjoy

