<template>
  <section>
    <h2 class="title border-linear">第{{itemNum}}题</h2>
    <div class="quiz container">
      <h3 class="quiz-title">{{quizList[itemNum - 1].title}}</h3>
      <ul class="quiz-optionList">
        <li class="quiz-optionItem"
            v-for="option in quizList[itemNum - 1].optionList"
            @click="choosed(option.index, option.score)"
        >
          <span class="quiz-optionItemIndex"
                :class="{'active': option.index == choosedOption}">{{option.index}}</span>
          <span class="quiz-optionItemAnswer">{{option.answer}}</span>
        </li>
      </ul>
      <div class="err-msg" v-if="showErr">请选择相关答案</div>
    </div>
    <div class="bottom">
      <button type="button" class="btn btn-primary" @click="nextItem" v-if="itemNum < quizList.length">下一题</button>
      <button type="button" class="btn btn-error" @click="submitAnswer" v-else>完成测试</button>
    </div>
  </section>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  export default {
    name: 'item',
    data() {

      return {
        choosedOption: null, // 选中答案索引
        choosedScore: 0, // 选中答案分值
        showErr: false // 是否显示 未选择相关项的错误提示消息
      }
    },
    computed: mapState(['itemNum', 'quizList', 'timer']),
    methods: {
      ...mapActions(['addNum', 'initializeData']),
      // 点击下一题
      nextItem() {

        if (null == this.choosedOption) return this.showErr = true;

        // 保存答案, 题目索引加一，跳到下一题
        this.choosedOption = null;
        this.addNum(this.choosedScore);
      },
      // 选中的答案信息
      choosed(index, score) {

        this.showErr = false;
        this.choosedOption = index;
        this.choosedScore = score;
      },
      // 到达最后一题，交卷，清空定时器，跳转分数页面
      submitAnswer() {

        if (null == this.choosedOption) return this.showErr = true;

        this.addNum(this.choosedScore);
        this.$router.push('score');
        clearInterval(this.timer);
      }
    },
    created() {

      this.initializeData();
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
    margin-top: 10px;
    font-size: 1rem;
    cursor: pointer;
  }
  .quiz-optionItemIndex {
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 1.3rem/2;
    border: 1px solid #abdef9;
    margin-right: 3px;
    line-height: calc(~"1.3rem - 2px");
    text-align: center;
    &.active {
      background-color: #64d368;
      color: white;
    }
  }
  .quiz-optionItemAnswer {}
  .err-msg {
    margin: 20px 0 0 20px;
    color: #b94868;
    font-size: 12px;
  }
</style>
