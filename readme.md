# 用gulp，配置一个把scss转成css的工具。给某位小白使用。
* 安装依赖
```
npm i

```
* 生成css
```
gulp
```

# 目录
```
└─css                           // 这个目录是打包工具生成的,和scss目录是一致的
    ├─commons                   // 公用的css目录      例如:清零样式,公用的头部底部样式都可以放在zero.scss里
    └─pages                     // 页面使用的css目录
└─html                          // 页面目录
└─images                        // 图片目录
    ├─commons                   // 公用的图片目录      例如:公用的头部和底部使用到的图片可以放在这里
    └─pages                     // 页面用的图片目录
└─js                            // js目录
    ├─commons                   // 公用的js目录       例如:jq和一些touchSlide插件可以放在这里
    └─pages                     // 页面用到js目录
└─scss                          // scss目录   以后写css在这里写
    ├─commons                   // 公用的scss目录      例如:清零样式  头部底部 都可以放在zero.scss里
    └─pages                     // 页面使用的scss目录
```

# .gitkeep文件介绍
* git不会提交空目录,加上这个文件是为了可以把空目录页提交上去,当目录里有东西了,这个文件可以删掉
