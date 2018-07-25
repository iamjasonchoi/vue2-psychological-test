// action 提交的是 mutation，而不是直接变更状态。

export default {
  addNum({commit, state}, score) {

    // 点击下一题，判断是否是最后一题
    commit('calcScore', score);
    if (state.itemNum < state.quizList.length) {

      commit('addItemNum');
    }
  },
  initializeData({commit}) {

    commit('init');
  }
}
