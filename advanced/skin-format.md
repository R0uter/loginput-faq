# 提示皮肤配置格式

如同 [双拼方案配置格式](https://docs.logcg.com/advanced/spformat.html) 中所描述的那样，提示皮肤的配置文件其实也是一个`plist`，只不过为了区别，我们特殊约定提示皮肤的配置文件必须以`_rev.plist`结尾，否则程序将不予以识别。

你可以使用任意文本编辑器打开落格输入法的皮肤配置文件，它就是一个单纯的键值对集合，每一个英文字母对应了键盘按键按钮上将要显示的提示内容。

> 值得注意的是作为字母的 key 是不能重复的，否则会导致程序错误。

有些用户喜欢手动做出类似上下两行的皮肤效果，这就需要你在值中加入回车——不需要任何转义符号，你只需要直接输入回车即可。

比如，这是一份提示皮肤示例（大牛双拼）：

```markup
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>a</key>
    <string>zh</string>
    <key>b</key>
    <string>in</string>
    <key>c</key>
    <string>ian</string>
    <key>d</key>
    <string>an</string>
    <key>f</key>
    <string>ang</string>
    <key>g</key>
    <string>ing
uai</string>
    <key>h</key>
    <string>ue
ai</string>
    <key>i</key>
    <string>ch</string>
    <key>j</key>
    <string>eng
van</string>
    <key>k</key>
    <string>ia
en</string>
    <key>l</key>
    <string>ong
iong</string>
    <key>m</key>
    <string>iao</string>
    <key>n</key>
    <string>iang
ui</string>
    <key>o</key>
    <string>uo
zh</string>
    <key>p</key>
    <string>ie</string>
    <key>q</key>
    <string>ua
ian</string>
    <key>r</key>
    <string>ou</string>
    <key>s</key>
    <string>ao</string>
    <key>t</key>
    <string>iu</string>
    <key>u</key>
    <string>er
sh</string>
    <key>v</key>
    <string>ui
sh</string>
    <key>w</key>
    <string>ei
vn</string>
    <key>x</key>
    <string>uang
ve</string>
    <key>y</key>
    <string>un</string>
    <key>z</key>
    <string>uan</string>
</dict>
</plist>
```

## 图形化编辑

落格输入法支持你在 app 中直接编辑或创建按键提示皮肤，所以大部分情况下你可能不需要手动来修改或撰写这个配置文件，如果你要在图形化编辑模式输入一个回车，可以尝试长按回车按钮来键入一个换行符。

