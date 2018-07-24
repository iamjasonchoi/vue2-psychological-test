<template>
  <section>
    <h2 class="title border-linear"></h2>
    <div class="quiz container">
      <h3 class="quiz-title"></h3>
      <ul class="quiz-optionList">
        <li class="quiz-optionItem">
          <span class="quiz-optionItemIndex"></span>
          <span class="quiz-optionItemAnswer"></span>
        </li>
      </ul>
    </div>
    <div class="bottom">
      <button type="button" class="btn btn-primary">下一题</button>
    </div>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  export default {
    name: 'item',
    data() {
      return {
        itemId: null, //题目ID
        choosedNum: null, //选中答案索引
        choosedId:null //选中答案id
      }
    },
    props:['fatherComponent'],
    computed: mapState([
      'itemNum', //第几题
      'level', //第几周
      'itemDetail', //题目详情
      'timer', //计时器
    ]),
    methods: {
      ...mapActions([
        'addNum', 'initializeData',
      ]),
      //点击下一题
      nextItem(){
        if (this.choosedNum !== null) {
          this.choosedNum = null;
          //保存答案, 题目索引加一，跳到下一题
          this.addNum(this.choosedId)
        }else{
          alert('您还没有选择答案哦')
        }
      },
      //索引0-3对应答案A-B
      chooseType: type => {
        switch(type){
          case 0: return 'A';
          case 1: return 'B';
          case 2: return 'C';
          case 3: return 'D';
        }
      },
      //选中的答案信息
      choosed(type,id){
        this.choosedNum = type;
        this.choosedId = id;
      },
      //到达最后一题，交卷，请空定时器，跳转分数页面
      submitAnswer(){
        if (this.choosedNum !== null) {
          this.addNum(this.choosedId)
          clearInterval(this.timer)
          this.$router.push('score')
        }else{
          alert('您还没有选择答案哦')
        }
      },
    },
    created(){
      //初始化信息
      if(this.fatherComponent == 'home') {
        this.initializeData();
        document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)';
      }
    }
  }
</script>

<style scoped lang="less">
  .title {
    position: relative;
    height: 2.4rem;
    margin-top: 1rem;
    background-color: #0e2b53;
    color: white;
    font-size: 1.2rem;
    line-height: 2;
    text-indent: 40px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    &::before {
      position: absolute;
      top: calc(~"(2.4rem - 10px) / 2");
      left: 20px;
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #0093f0;
    }
  }
  .quiz-title {
    font-size: 1.1rem;
    line-height: 1.5;
    text-indent: 20px;
  }
  .quiz-optionList {
    padding: 10px 20px;
  }
  .quiz-optionItem {
    margin-top: 8px;
    font-size: 1.1rem;
  }
  .quiz-optionItemIndex {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1.5rem/2;
    border: 1px solid #abdef9;
    margin-right: 3px;
    line-height: calc(~"1.5rem - 2px");
    text-align: center;
    &.active {
      background-color: #64d368;
      color: white;
    }
  }
  .quiz-optionItemAnswer {}
</style>
