# 用自然码辅码筛选候选词

在大多数双拼输入法中，并没有形辅的概念，这就导致了词汇尤其是两字的词汇重码量巨大。
> 比如输入 “loge”，就会有： 落格、罗哥、落个、罗格……

这个时候还是要像全拼那样去词堆里找词，很不方便。
为此，可以对词汇使用辅助码来**筛选**，比如输入 logem ，后边的 m 表示偏旁“木”，那么“落格”和“罗格”就跑到了前边，这样选起来就十分的轻松+愉快了。

现在落格输入法支持对候选词进行最长两个字母的辅码*（所谓的双辅码）*，辅码的编码方案也有多种，目前落格输入法内置的辅码方案有：
* 自然码辅码；
* 三月辅助码；
* 86版五笔辅码；
* 小牛形码。

> 其中小牛形码和三月辅助码还包含了一套单独的纯单辅方案。

你可以自由地选择其一使用，一旦启用，对所有的双拼方案中的两字词汇都可以生效！同时，如果你有更好的辅码方案，也可以轻易地导入落格输入法中。本章以自然码为例，我们一起来看看如何快速上手自然码辅码，它的优点是简单易学好理解，快速上手见效快。

## 自然码辅码

自然码是个比较古老的双拼方案了，有多古老？古老到现在不少用户都根本不知道它还有一套辅码方案。 它设计之初就是为了辅助，这就直接决定了这套方案十分容易被接受和学习！有多简单？就是偏旁部首的拼音声母嘛！ 

比如说，你要输入“编”这个字，当你输入“bm”的时候，出现在候选栏第一位的却是“边”，这个时候该怎么办呢？使用自然码辅码，把“编”拆分为“纟”和“扁”，该怎么辅码？显然就是“s”，代表“丝”的发音，显然一旦理解后都不需要记忆。
> 手心输入法的直接辅码使用的就是自然码辅码规则。

光这样按照单字举例实在是太繁琐了，考虑到现在自然码收益不佳早已倒闭多年，你可能连一本完整的自然码使用说明书也找不到了，而网络上更是连一份完整的自然码码表也难以找到，这里我就简单来解释一下自然码的各中文字拆分原理。
### 象形字

所谓象形字其实也就是单字，它们大多会作为其他比较复杂的字的偏旁部首，考虑到自然码用偏旁部首来作为辅码，你自然不能给偏旁拆偏旁，这就会引起悖论了，所以自然码其实规定了三种基本笔画，不过你应该用不到他们，这个笔画很有早些年手机上的笔画输入法，你可能用过，也可能根本没有听说过。

> 实际上，现在的 iPhone 上依旧留存这种输入法，这种输入法只有五个笔画“横竖撇点（捺）折”，优点是基本不会重码，缺点是不重码的前提是你输入的足够长……

自然码的三大笔画则是  `a` 、 `d` 、 `p`。

* 其中 `a` 代表了一切 横 、 竖 、 折（折就是笔画里的横折、竖折、横撇等）；
* 其中 `d` 代表了一切 点 （也包括捺，你懂的）；
* 其中 `p` 代表了一切 撇。

你看，有了这个规则，我们对应一个简单字的时候，就输入它的起笔和停笔即可，按照这个规则，那么“马”的辅码就是“折横”也就是“aa”，“金”的辅码就是“撇横”就是“pa”。

> 对于辅码，其实是分为单辅码和双辅码——无非就是为了更精确罢了，一般情况下你不需要使用两位辅码，因为很有可能第一位辅码字母就已经满足了你的需求。总之，这里我们的例子都是两位完整辅码，是为了方便你理解辅码的意义。

### 形声字

这类字最常见了，大部分的组词都是这样的字，它们由两部分组成，然后一部分表示声音，一部分表示意思，比如说 “想”，你看，你读它的时候发的是“相”的音，而理解的却是“心”的意思，对吧？

对于这一类的字，它们的偏旁的声母就是辅码了。 显然，“想”的部首是“心”，剩下的部分是“相”，那么“想”的辅码就是“xx”； 再来个例子，“袋”的部首是“衣”，剩下部分是“代”，那么“袋”的辅码就是“yd”。
### 会意字和转意字

说白了，这些字和上文中的形声字一样，很容易能被拆分成两部分，但区别在于你可能并不能立即就判断出来哪个部分应该是这个字的偏旁——“思、杏、如”。 

你说它“田字头”也对，说它“心字底”也对——其实，这些字本来就是可以看作有两个偏旁的。所以说，这时候，拆偏旁的规则就有点郁闷了——总之，这里你不用纠结，按照直觉随便选一个就行，所以，“思”就有两个辅码“tx”和“xt”——这都是被接受的。 

同样的“如”的辅码可以是“nk”，也可以是“kn”，“杏”的辅码是“mk”，也可以是“km”。
### 非整体合成字

这些字你往往一眼就能把它们拆成好几个部分，或者说，拆出来的部分并不是常用的小字，这就比较尴尬了——我根本不认识这个字，要怎么读出声母呢？ 

对于这些字，我们用首尾笔画和小部件来辅码，比如“录”这个字，它一眼就能看出由“彐”和“水”组成，那么“彐”就不是大多数人都能读出来的了，我们则取它的起笔“横折”，也就是“a”，那么“录”的辅码就是“au”了。 

再比如“释”，它的偏旁不是“米”，另外半个也不知道是个啥，那么我们可以取“撇”和“丰”，它的辅码就是“pf”。 “谧”则有三部分，那么取偏旁和另外两部分的末尾部分也就是那个“皿”，就是“ym”。
### 部首隐蔽的字

这一部分的字就是那些你一眼不太容易找到部首的字，那么你可以尝试字中明显的小部分，比如“鹰”是“gn”，但也可以是“n”； “颖”可以是“hy”，也可以是“yh”——“页”和“禾”在这里就不会区分的很详细避免你用起来会混淆——实际上就是混着来的，不怕你用错。
## 偏旁部首的命名

说完了字，我们来说说看部首到底怎么命名，因为不同的地方由于各种原因，对于偏旁部首的命名是不同的，所以自然码也只能取称呼比较广泛的一种来命名，但我相信你总能猜出其他的称呼，毕竟这些东西万变不离其宗的。

* 日、月、曰、目 它们都是圆的，所以用 o 表示；
* 扌这是“扶手旁”而非“提手旁”——实际上 t 也是可以的但会和“提土旁”重码；
* 彳取“行人”的意思所以用 x 表示——实际上“双人旁”也是可以的但会和“水”重码；
* 亠 叫“文字头”；
* 灬 不称为“四点底”而取“火”的变体，所以是 h。

## 实际的使用

实际上，其实由于当年自然码直到倒闭也没有公开它的码表，所以如今我们使用的自然码码表都是后人依据自然码规则重新制作的。这就导致了对于辅码编码上的严格程度会根据码表作者的心情而不同。

总之，由于自然码好学好用，所以多猜几次也不是什么难事——毕竟，一个字也就那么几种拆法，你又能和自然码的设计者差出多少去呢？