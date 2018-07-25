// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

export default {
  // 点击进入下一题
  addItemNum(state) {

    state.itemNum++;
  },
  // 计算得分
  calcScore(state, score) {

    state.finalScore += score;
  },
  // 记录做题时间
  quizTime(state) {

    state.timer = setInterval(() => {

      state.allTime++;
    }, 1000);
  },
  // 初始化信息
  init(state) {

    state.itemNum = 1;
    state.allTime = 0;
    state.finalScore = 0;
  }
}
