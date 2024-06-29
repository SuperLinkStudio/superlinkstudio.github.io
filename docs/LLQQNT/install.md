---
title: "安装LLQQNT"
---
# 安装

::: warning 警告
此文档为 LiteLoaderQQNT 1.1.x 编写
:::

## 自动安装
> 程序来自于`Mzdyl/LiteLoaderQQNT_Install`的`1.11`版本
> Windows需要管理员权限运行\
[MAC](https://docs.superlinkstudio.top/File/install_mac.sh){target="_self"} \
[Linux](https://docs.superlinkstudio.top/File/install_linux.sh){target="_self"} \
[Windows](https://docs.superlinkstudio.top/File/install_windows.exe){target="_self"}

::: tip 更新日志
Win/Linux/mac 适配最新 LiteLoaderQQNT 1.1.0

删除插件商店安装，作者删库了

新版版本最低20667！(下次补个自动检测版本，目前也先咕咕咕

mac 目前无功能更新，打算研究下如何解除macOS限制，导致的Sandbox目录操作慢的问题，国内镜像站下载下次一起加上（咕咕咕

Win 修复了一下错误(主要我也忘修改了啥，但反正写修复错误没毛病(逃

Linux 添加 自动选择镜像站下载功能

mac/linux 终端运行脚本即可
windows 下载exe，双击运行即可，全自动安装（如遇权限问题请右击使用管理员权限运行）

如果你已经修改过文件，请复原后再使用安装器
macOS 遇到操作不允许，请检查是否授予终端完全磁盘访问权限或允许终端想要访问其他应用程序的数据。

感谢所有使用 pre-release 版本并提供错误反馈的用户
目前所有脚本均通过自动化测试和人工测试，欢迎使用和反馈
:::

## 第三方工具

一些社区开发的安装工具来帮助你快速安装，或跳过此条目来阅读官方安装教程

- https://github.com/Mzdyl/LiteLoaderQQNT_Install/



## 下载

你需要先下载 LiteLoaderQQNT 到任意位置，以下有两种方式

- **通过 Release**

  前往 LiteLoaderQQNT 仓库，在 Release 中 Latest 内，下载 `LiteLoaderQQNT.zip` 文件，将压缩包内 LiteLoaderQQNT 目录解压到任意位置

  LiteLoaderQQNT：https://github.com/LiteLoaderQQNT/LiteLoaderQQNT

- **通过 Clone**

  使用 Git 工具将 LiteLoaderQQNT 仓库 Clone 到本地任意位置

  ``` shell
  git clone --depth 1 https://github.com/LiteLoaderQQNT/LiteLoaderQQNT.git
  ```



## 安装

找到 QQNT 安装目录，编辑 `resources\app\app_launcher\index.js` 文件，在最前端插入一行``require(String.raw`此处为你 LiteLoaderQQNT 目录路径`);``

``` javascript
require(String.raw`C:\LiteloaderQQNT`); // 此处换成你 LiteLoaderQQNT 目录位置
require('./launcher.node').load('external_index', module);
```

::: warning 警告
请确保拥有 QQNT 安装目录的读写权限！如果不想给予 QQNT 安装目录读写权限

- 按照下文 `存储位置` 一节进行设置
- 将 `LiteLoaderQQNT/src/preload.js` 复制到 `QQNT/resources/app/versions/此处为版本号/application/preload.js`

LiteLoaderQQNT 会在第二步骤的文件不一致或没有文件时自动复制，也就是说在更新本体后需再进行一次这步骤
:::



## 修补

::: warning 警告
此条目仅需 Windows 用户查看，其他系统无需继续阅读此条目
:::

由于 Windows 系统平台 QQNT 被添加文件完整性验证，你需要额外步骤来解除限制,有下列三种方式：

- **DLLHijackMethod**

    在 Release 下载 dll 文件，重命名为 dbghelp.dll 放入 QQ.exe 同级目录下即可  
    https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch/tree/DLLHijackMethod

- **QQNTFileVerifyPatch**

    在 Release 下载 exe 文件，运行将弹出文件选择框，进入 QQNT 安装目录选择 QQ.exe 开始修补，每次更新都需要重新修补  
    https://github.com/LiteLoaderQQNT/QQNTFileVerifyPatch

- **PatcherNFixer**

    在 Release 下载 zip 文件，解压后运行 exe 将弹出图形化界面，根据软件界面提示选择相应选项与修补方式，每次更新都需要重新修补  
    https://github.com/xh321/LiteLoaderQQNT-PatcherNFixer

- **V8Killer**

    此方式目前过于麻烦，且需要自行寻找对应的 RVA 偏移量，只说明此方式的可行性，需自行探索使用方式  
    https://github.com/ShellWen/v8_killer


## 检查

按照上述教程完成安装后，有两种方法检查 LiteLoaderQQNT 是否成功安装

- 运行 QQNT 并打开设置，查看左侧列表是否出现 `LiteLoaderQQNT` 选项
- 使用终端运行 QQNT 查看是否有 LiteLoaderQQNT 相关内容输出显示

如果有显示，即安装成功，玩的开心！



## 存储目录

支持设置 `LITELOADERQQNT_PROFILE` 环境变量指定 `data` `plugins` `config.json` 存储位置，即可不在本体目录进行读写操作，比如 MacOS 与 Linux 平台 QQNT，以及类似于 flatpak 打包的 QQNT，让其实现成为可能

如果你想将本体与存储目录合并在一起（便携软件）需将 `LITELOADERQQNT_PROFILE` 环境变量删除，将 `data` `plugins` `config.json` 移动回本体根目录下



## 更新QQNT

每次更新 QQNT 都需要重新根据上述教程重新修补