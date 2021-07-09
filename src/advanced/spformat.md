# 双拼方案配置格式

双拼方案配置文件是一个 `plist`文档，实际上就是特殊的`xml`文档。

你可以用任何文本编辑器打开双拼方案配置文件，配置文件是一个字典，一共有4个字段：

* `Version` 此字段内容为固定字符串 `2.0`，必须存在；
* `Sheng` 此字段包含字母对应声母的键值对，如果方案包含引导符，那么引导符单独留空；
* `Yun` 此字段包含字母对应韵母的键值对，如果一个字母对应多个韵母，那么韵母之间用竖线`|`分隔；
* `Special` 此字段用于处理一些特殊情况，当然你也可以把所有的零声母单独写在这里，此处的对应为全码对应全拼。

举例来说，一个双拼方案配置文件，大概格式如下（大牛双拼）：

```markup
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Special</key>
    <dict/>
    <key>Yun</key>
    <dict>
        <key>q</key>
        <string>ua|ian</string>
        <key>w</key>
        <string>ei|vn</string>
        <key>e</key>
        <string>e</string>
        <key>r</key>
        <string>ou</string>
        <key>t</key>
        <string>iu</string>
        <key>y</key>
        <string>un</string>
        <key>u</key>
        <string>er|u</string>
        <key>i</key>
        <string>i</string>
        <key>o</key>
        <string>uo|o</string>
        <key>p</key>
        <string>ie</string>
        <key>a</key>
        <string>a</string>
        <key>s</key>
        <string>ao</string>
        <key>d</key>
        <string>an</string>
        <key>f</key>
        <string>ang</string>
        <key>g</key>
        <string>uai|ing</string>
        <key>h</key>
        <string>ai|ue</string>
        <key>j</key>
        ...
    </dict>
    <key>Sheng</key>
    <dict>
        <key>q</key>
        <string>q</string>
        <key>w</key>
        <string>w</string>
        <key>e</key>
        <string></string>
        <key>r</key>
        <string>r</string>
        <key>t</key>
        <string>t</string>
        <key>y</key>
        <string>y</string>
        <key>u</key>
        <string>sh</string>
        <key>i</key>
        <string>ch</string>
        ...
    </dict>
    <key>Version</key>
    <string>2.0</string>
</dict>
</plist>
```

对于旧版落格输入法双拼方案配置文档，实际上就是穷举所有可能的全拼拼音，并全部写在 `Special`字段当中。新版落格输入法已经不再支持旧版配置文件格式，请知悉。

## 图形化编辑

当然，对于大部分用户来说，实际上你不需要纯手工来编辑双拼方案了，除了可以到落格输入法的“对数云”中下载其他用户预先配置的双拼方案外，你也可以在输入法中方便地以图形化界面创建和编辑双拼方案配置。

