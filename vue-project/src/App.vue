<script setup lang="ts"></script>

<template>
  <div class="grid place-items-center py-5">
    <button
      class="size-20 rounded-2xl bg-gradient-to-r from-yellow-400 to-red-400 hover:blur-[5px] focus:outline-10 focus:outline-offset-2 focus:outline-blue-100 active:bg-blue-900"
    ></button>
  </div>
  <div class="grid grid-cols-2 gap-10 w-max mx-auto"></div>
  <div class="grid place-items-center">
    <div
      class="flex items-center justify-center w-24 h-24 rounded-xl text-white font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 transition duration-300 hover:blur-[10px]"
    >
      01
    </div>
  </div>
  <div class="grid place-items-center w-24 h-24 bg-purple-500 rounded-xl text-white mx-auto">
    01
  </div>
  <p>网格</p>
  <div class="grid grid-cols-3 grid-flow-row gap-4 place-content-center">
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center blur-xl">
      01
    </div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">02</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">03</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">04</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">05</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">06</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">07</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">08</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid text-white place-items-center">09</div>
  </div>

  <div class="grid grid-flow-col grid-rows-3 gap-4">
    <div class="bg-blue-200 rounded-xl">01</div>
    <div class="bg-blue-200 rounded-xl">02</div>
    <div class="bg-blue-200 rounded-xl">03</div>
    <div class="bg-blue-200 rounded-xl">04</div>
    <div class="bg-blue-200 rounded-xl">05</div>
    <div class="bg-blue-200 rounded-xl">06</div>
    <div class="row-span-3 grid grid-rows-subgrid gap-4 bg-amber-200">
      <div class="row-start-2 bg-amber-600">999</div>
      <div class="row-start-1 bg-blue-300">444</div>
    </div>
    <div class="bg-blue-200 rounded-xl">07</div>
    <div class="bg-blue-200 rounded-xl">08</div>
  </div>

  <div
    class="grid grid-cols-2 gap-4 h-80 w-100 place-content-center bg-gradient-to-r from-blue-400 to-fuchsia-400 rounded-2xl"
  >
    <div class="bg-white size-20 rounded-2xl grid place-items-center blur-[10px]">01</div>
    <div class="bg-white size-20 rounded-2xl grid place-items-center">02</div>
    <div class="bg-white size-20 rounded-2xl grid place-items-center">03</div>
    <div class="bg-white size-20 rounded-2xl grid place-items-center">04</div>
  </div>
  <div class="flex place-content-center gap-3">
    <div class="bg-fuchsia-600 size-20 rounded-2xl flex items-center justify-center">01</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl grid place-items-center">02</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl">03</div>
    <div class="bg-fuchsia-600 size-20 rounded-2xl">04</div>
  </div>

  <p>竖向</p>
  <div class="flex flex-col space-y-4">
    <div class="bg-yellow-200 size-10 mt-10"></div>
    <div class="bg-blue-200 h-20 w-10"></div>
    <div class="bg-green-200 w-10 h-30"></div>
  </div>
  <br />
  <p>横向</p>
  <div class="flex space-x-4">
    <div class="bg-yellow-200 size-10"></div>
    <div class="bg-blue-200 h-20 w-10"></div>
    <div class="bg-green-200 w-10 h-30"></div>
  </div>
  <div class="flex flex-wrap">
    <div class="w-70 h-10 bg-blue-500 text-center">01</div>
    <div class="w-70 h-10 bg-blue-500 text-center">01</div>
    <div class="w-70 h-10 bg-blue-500 text-center">01</div>
  </div>

  <div
    class="text-4xl text-center bg-gray-200 text-blue-400 h-100 mt-3 mx-[10%] pt-3 rounded-2xl shadow-2xl shadow-blue-400/40 inset-shadow-sm/15"
  >
    个人简历
    <div
      class="text-2xl text-lef text-blue-300 mt-2 bg-gray-300 mx-[20%] rounded-2xl h-9 inset-shadow-sm/20"
    >
      <p>个人信息</p>
    </div>
    <div class="text-xl text-left text-gray-600 px-[5%]">
      <p>姓名：刘梓瑞</p>
      <p>电话：15997576601</p>
      <p>邮箱：2831029729@qq.com</p>
      <p>出生年月：2005.05.04</p>
      <div class="text-center text-2xl text-blue-300">教育经历</div>
      <p>学校：本科湖北民族大学 本科</p>
      <b>2023.09-2027.06</b>
      <p>专业：视觉传达设计</p>
    </div>
  </div>
  <br />
  <div class="text-3xl text-center text-gray-300 bg-gray-200">个人信息</div>

  <br />
  <hr />

  <legend><h2>教育经历</h2></legend>

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
