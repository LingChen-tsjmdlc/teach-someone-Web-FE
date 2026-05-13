<script setup lang="ts"></script>

<template>
  <p>竖向</p>
  <div class="flex flex-col">
    <div class="bg-yellow-200 size-10"></div>
    <div class="bg-blue-200 h-20 w-10"></div>
    <div class="bg-green-200 w-10 h-30"></div>
  </div>
  <br />
  <p>横向</p>
  <div class="flex">
    <div class="bg-yellow-200 size-10"></div>
    <div class="bg-blue-200 h-20 w-10"></div>
    <div class="bg-green-200 w-10 h-30"></div>
  </div>
  <div class="flex flex-wrap">
    <div class="w-70 h-10 bg-blue-500 text-center">01</div>
    <div class="w-70 h-10 bg-blue-500 text-center">01</div>
    <div class="w-70 h-10 bg-blue-500 text-center">01</div>
  </div>

  <div class="text-4xl text-center bg-gray-300 text-blue-400 w-full h-100" font-sans>个人简历</div>

  <div class="text-3xl text-center text-gray-300 bg-gray-200">个人信息</div>
  <p>姓名：刘梓瑞</p>
  <p>电话：15997576601</p>
  <p>邮箱：2831029729@qq.com</p>
  <p>出生年月：2005.05.04</p>

  <br />
  <hr />

  <legend><h2>教育经历</h2></legend>
  <p>学校：本科湖北民族大学 本科 <b>2023.09-2027.06</b></p>
  <p>专业：视觉传达设计</p>

  <br />
  <hr />

  <legend><h2>实习经历</h2></legend>
  <p>应届生</p>
  <p>实习经历无</p>
  <a href="https://github.com/LingChen-tsjmdlc/teach-someone-Web-FE#">github官网</a>

  <legend><p>个人查看</p></legend>
  <img src="https://img.cdn1.vip/i/69fdf035a546c_1778249781.webp" alt="个人查看" width="100" />

  <legend><p>公开</p></legend>
  <img src="https://img.cdn1.vip/i/69fd731b03a18_1778217755.webp" alt="公开" width="100" />

  <legend>附加信息</legend>
  <br />
  <lable>用户名称：</lable>
  <input type="text" placeholder="请输入您的名字" />
  <br /><br />
  <laber>身份证号：</laber>
  <input type="text" placeholder="港澳台地区除外" />
  <br /><br />
  <laber>性别：</laber>

  <input type="radio" id="man" name="gender" />
  <label for="man">男</label>
  <input type="radio" id="woman" name="gender" />
  <label for="woman">女</label>
  <input type="radio" id="anther" name="gender" />
  <label for="anther"><input type="text" placeholder="如武装直升机，沃尔玛购物袋" /></label>
  <br /><br />
  <label>兴趣爱好：</label>
  <input type="checkbox" id="chang" />
  <label for="chang">唱</label>

  <input type="checkbox" id="tiao" />
  <label for="tiao">跳</label>

  <input type="checkbox" id="ruap" />
  <label for="ruap">rup</label>

  <input type="checkbox" id="篮球" />
  <label for="篮球">篮球</label>

  <input type="checkbox" id="补充" />
  <label for="补充"><input type="text" placeholder="如有其他的请补充" /></label>
  <br />

  <legend>住址</legend>
  <br />
  <lable>家庭住址：</lable>
  <input type="text" placeholder="省，市，区" />
  <br /><br />
  <label>楼栋号：</label>
  <input type="text" placeholder="xxx栋" />
  <br /><br />
  <lable>门牌号：</lable>
  <input type="number" placeholder="x单元xxx号" />
  <br /><br />
  <label>国家：</label>
  <select id="country" name="country">
    <option value="">请选择国家</option>
    <option value="中国">中国</option>
    <option value="美国">美国</option>
    <option value="日本"></option>
  </select>
  <br /><br />

  <span>卢佳伟</span>
</template>

<style scoped></style>
