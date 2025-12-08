# 🎯 PowerShell 基础

## 1. 基础操作（每天用）

```powershell
# 查看当前文件夹
ls
dir

# 切换文件夹
cd 文件夹名      # 进入
cd ..           # 返回上一级
cd ~            # 回到用户目录
cd /            # 回到C盘根目录
cd D:\          # 进入D盘
cd              # 查看当前路径

# 创建文件夹
mkdir my-project
mkdir frontend src css js

# 创建文件
ni index.html
ni style.css
ni app.js
touch index.html
```

## 2. 文件操作（必须会）

```powershell
# 复制文件
copy index.html about.html
cp index.html about.html

# 移动/重命名
move old.html new.html
mv old.css new.css

# 删除文件
del test.txt
rm test.txt

# 删除文件夹
rmdir node_modules
rm -r node_modules       # 强制删除
```

## 3. 查看内容（调试用）

```powershell
# 查看文件内容
cat package.json
type README.md

# 清屏
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
tasklist
# 结束进程
taskkill /IM node.exe
```
