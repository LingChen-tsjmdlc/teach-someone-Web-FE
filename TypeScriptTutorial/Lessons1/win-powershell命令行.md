# 🎯 PowerShell 基础

## 1. 基础操作（每天用）

```powershell
# 查看当前文件夹的内容 (ls 和 dir 是一样的，推荐记忆 ls)
# 速记: 英文单词 list 的缩写
ls
dir

# 切换文件夹
# 语法: cd <想要切换的文件或文件夹路径>
# 速记: 英文单词 change directory 的缩写
cd 文件夹名      # 进入
cd ..           # 返回上一级
cd ~            # 回到用户目录
cd /            # 回到当前盘根目录
cd D:\          # 进入D盘
cd              # 查看当前路径

# 创建文件夹
# 语法: mkdir <要创建的文件夹名称>
# 速记: 英文单词 make directory 的缩写
mkdir my-project  # 创建一个文件夹叫 my-project
mkdir frontend src css json # 创建多个文件夹叫 分别叫 frontend src css json

# 创建文件 (ni 和 touch 是一样的，推荐记忆 touch)
# 语法 ni 的速记: 英文单词 new Item 的缩写 (还有一种说法:No Idea,不知道取什么名字，没想法，那就叫 "没想法" 吧，也就是 "no idea")
# 语法 touch: 本来的功能是“更新时间戳”，文件不存在时顺带创建 (“我用 touch摸了一下文件，它要是没出生，我就生一个；要是已经在了，我就给它盖个‘刚被碰过’的章。”)
# 语法: ni <要创建的文件名> 或者 touch <要创建的文件名>
ni index.html
ni style.css
ni app.js
touch index.html
```

## 2. 文件操作（必须会）

```powershell
# 复制文件 (copy 的 简写 就是 cp)
copy index.html E:\index.html  # 语法: copy <从什么路径> <到什么路径>
cp index.html E:\index.html # 比如这个就是 从 当前目录下的 index.html 复制到 E盘下的index.html
cp index.html E:\aaa.html # [其实也有复制并重命名的功能] 这个的意思是:从 当前目录下的 index.html 复制到E盘的同时重命名为 aaa.html

# 移动/重命名 (move 的 简写 就是 mv)
move old.html new.html # 语法: copy <旧的文件路径> <新的文件路径>
mv old.css new.css # 但是你会发现这一行命令就是从当前目录下的 old.css 移动到当前目录下的 new.css，那不就是重命名吗

# 删除文件 (del 和 rm 是一样的，推荐记忆 rm)
del test.txt # 语法 del <文件路径>
rm test.txt

# 删除文件夹 (rmdir 和 rm 是一样的，推荐记忆 rm)
rmdir node_modules
rm -r node_modules       # -r 的意思是强制删除
```

## 3. 查看内容（调试用）

```powershell
# 查看文件内容 (cat 和 type 是一样的，推荐记忆 cat)
# 速记: 查看文件是猫
# cat 其实是 concatenate 的缩写（连接），它的核心能力是 合并多个文件并输出，当只有一个文件的时候不就是查看这个文件吗
cat package.json
type README.md

# 清屏 (推荐记忆 cls)
# 速记: cls 是 英文单词 CLear Screen 的缩写
cls
Clear-Host
```

## 4. 实用技巧

```powershell
# 1. 用Tab自动补全
cd De<Tab>      # 自动补全为 Desktop

# 2. 用上下箭头切换历史命令
↑ 上一条命令
↓ 下一条命令

# 3. 查看进程
# 速记: task 是任务的意思，list 是列表的意思。查看当前的所有任务就是查看当前所有的进程
tasklist

# 结束进程
# 语法 taskkill /IM <进程的名称>
# 速记: task kill 是杀死的意思。把一个任务杀死了就是结束了这个进程
# /IM= Image Mame（镜像名称），也就是可执行文件名（如 node.exe, notepad.exe），会杀掉所有同名进程
# /F = Force（强制）
# /PID = Process ID，按唯一编号结束，只杀指定进程，更精准
taskkill /F /IM node.exe # 【注意!这个会杀死所有同名的，全部杀死!】
taskkill /PID 2412
```
