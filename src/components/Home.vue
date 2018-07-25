<!--在<template/>标签下只能有一个子节点元素-->
<template>
  <div class="container">
    <h1 class="text-center">{{title}}</h1>
    <div class="intro">{{intro}}</div>
    <div class="bottom">
      <router-link to="item" class="btn btn-primary">开始测试</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {

      return {
        title: '菲尔人格测试',
        intro: '这个测试是菲尔博士在著名主持人欧普拉的节目里做的，国际上称为“菲尔人格测试”,这已经成为很多大公司人事部门实际用人的“试金石”。'
      }
    }
  }
</script>

<style scoped lang="less">
  .intro {
    margin: 1rem 0;
    line-height: 1.7rem;
    text-indent: 20px;
    font-size: 1.1rem;
  }
</style>
