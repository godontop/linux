* [配置](#配置)  
	* [vim](#vim)
		* [vim插件](#vim插件)


# 配置
Git 守护进程 systemd 配置文件  
[git-daemon.service](https://github.com/godontop/linux/blob/master/etc/systemd/system/git-daemon.service)

gitweb 配置文件  
[git.conf](https://github.com/godontop/linux/blob/master/etc/httpd/conf.d/git.conf)

Apache 代理 GitLab 服务器的配置  
[gitlab.conf](https://github.com/godontop/linux/blob/master/etc/httpd/conf.d/gitlab.conf)  

## vim
在vim中输入下面的指令，看vim是否支持python或python3，返回1则表示支持

```vim
:echo has('python') || has('python3')
```

显示当前文件的文件类型

```vim
:set ft?
```

查看你的 `completeopt` 的设置状态

```vim
:set completeopt?
```

**查找**  
在Normal模式下按下`/`，然后输入要查找的字符并按下回车键，vim便会跳转到第一个匹配位置，按`n`查找下一个，按`N`查找上一个。

### vim插件
#### YouCompleteMe
##### 命令
**`:YcmDebugInfo`**  
可以查看用于当前文件的编译命令  
