# 1. HTML

## 1.1 简介

HTML(Hyper Text Markup Language): 超文本标记语言

1. 用于创建网页的标准标记语言
2. 描述网页的结构，由一系列元素组成，这些元素告诉浏览器如何显示内容

## 1.2 HTML 基础结构

```html
  <!-- 文档类型声明 -->
  <html lang="en">
      <!-- 头部 -->
      <head>
          <!-- 元数据 -->
          <title>页面标题</title>
      </head>
      <!-- 主体 -->
      <body>
        <a href="https://example.com" class="p-1">链接</a>
      </body>
  </html>
```

## 1.3 HTML元素组成

### (1) 开始标签(Opening Tag)

- 以 `<` 开头
- 包含元素名称
- 可包含属性
- 以 `>` 结尾

### (2) 结束标签(Closing Tag)

- 以 `</` 开头
- 包含与开始标签相同的元素名称
- 以 `>` 结尾
- 不包含任何属性

### (3) 内容(Content)

- 位于开始标签和结束标签之间
- 可以是 **文本** 或 **其他 HTML** 元素

### (4) 属性(Attributes)

- 提供元素的额外信息
- 位于开始标签中
- 格式为：属性名="属性值"
- 多个属性用空格分隔

### (5) 常见属性

- class - 定义元素的类名
- id - 定义唯一标识符
- style - 定义CSS内联样式
- title - 定义额外信息(工具提示)
- data-* - 存储自定义数据
- hidden - 隐藏元素
- lang - 定义语言代码
- tabindex - 定义tab键顺序
- contenteditable - 使元素可编辑

## 1.4 基本HTML结构

```html
<html lang="en"></html>
```

## 1.5 Meta标签与字符编码

```html
<meta charset="UTF-8" />
```

说明：
1. 用于指定HTML文档的字符编码
2. 推荐使用UTF-8编码以支持多语言字符
3. 应该放在head标签的最前面
4. 在HTML5中，声明UTF-8编码可以简化为这样

## 1.6 HTML常用标签

### (1)文档结构标签

- ``<html>`` HTML文档根元素
- ``<head>`` HTML文档头部
- ``<body>`` HTML文档主体
- ``<script>`` 用于嵌入或引用JavaScript
- ``<style>`` 用于定义CSS样式

### (2)文本内容标签

- ``<h1>``到``<h6>`` 标题(h1最大，h6最小)
- ``<p>`` 段落
- ``<br>`` 换行
- ``<hr>`` 水平线
- ``<pre>`` 预格式化文本(保留空格和换行)
- ``<code>`` 代码片段

### (3)文本格式化标签

- ``<b>`` 加粗
- ``<strong>`` 强调(语义更强)
- ``<i>`` 斜体
- ``<em>`` 强调(语义更强)
- ``<mark>`` 标记/高亮
- ``<small>`` 小号字
- ``<del>`` 删除线
- ``<sub>`` 下标
- ``<sup>`` 上标
- ``<span>`` 行内容器(无语义)

### (4)链接与图片

- ``<a>`` 超链接
  href 链接地址
  target 打开方式(_blank新窗口)
- ``<img>`` 图片
  src 图片路径
  alt 替代文本
  width/height 宽高
