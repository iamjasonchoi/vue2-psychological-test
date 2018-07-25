<template>
  <div class="container">
    <h2 class="title">得分：{{finalScore}}<!-- 总共用时：{{allTime}}--></h2>
    <div class="analysis">
      <h3>得分分析</h3>
      <ul class="analysisList">
        <li class="analysisListItem" v-for="(item, index) in analysisScore">
          <span class="analysisListItem-level">{{index + 1}}、{{item.level}}</span>
          <span class="analysisListItem-cont">{{item.cont}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'Vuex';
  export default {
    name: "Score",
    data() {

      return {
        analysisScore: [
          {
            level: '低于21分：内向的悲观者',
            cont: '你是一个害羞的、神经质的、优柔寡断的人，是需要人照顾、永远要别人为你做决定、不想与任何事或任何人有关的人，你是一个杞人忧天者，一个永远看不到存在的问题的人。你令人乏味，只有那些深知你的人知道你不是这样的人。'
          },
          {
            level: '21～30分：缺乏信心的挑剔者',
            cont: '你的朋友认为你勤勉刻苦、很挑剔。他们认为你是一个谨慎的、十分小心的人，如果你做任何冲动的或无准备的事，都会令他们大吃一惊。他们认为你会从各个角度仔细地检查一切之后仍经常决定不做。他们认为对你的这种反应一部分是因为你小心的天性所引起的。'
          },
          {
            level: '31～40分：以牙还牙的自我保护者',
            cont: '有人认为你是一个明智、谨慎、注重实效的人。也有人认为你是一个伶俐、有天赋、有才干且谦虚的人。你不会很快、很容易和人成为朋友，但却是一个对朋友非常忠诚的人，同时要求朋友对你也有忠诚的回报。那些真正有机会了解你的人会知道要动摇你对朋友的信任是很难的，但相应的，一旦这信任被破坏，会使你很难过。'
          },
          {
            level: '41～50分：平衡的中道者',
            cont: '你是一个新鲜的、有活力的、有魅力的、好玩的、讲究实际又永远有趣的人;经常是群众注意力的焦点。你又是一个足够平衡的人，不至于因此而昏了头。你亲切、和蔼、体贴、能谅解人，是一个永远会使人高兴起来并会帮助别人的人。'
          },
          {
            level: '51～60分：吸引人的冒险家',
            cont: '你具有令人兴奋的、高度活泼的、相当易冲动的个性;你是一个天生的领袖、一个会很快做决定的人，虽然你的决定不总是对的。你是大胆的、冒险的，愿意试做任何事;是一个愿意尝试机会而欣赏冒险的人。因为你散发的刺激，人们喜欢跟你在一起。'
          },
          {
            level: '60分以上：傲慢的孤独者',
            cont: '别人认为对你必须“小心处理”。在他人的眼中，你是自负的、以自我为中心的，是极端有支配欲、统治欲的。他人可能钦佩你，希望能多像你一点，但不会永远相信你，会对与你更深入的来往有所踌躇及犹豫。'
          }
        ]
      }
    },
    computed: mapState(['finalScore', 'allTime']),
  }
</script>

<style scoped lang="less">
  .title {
    color: #b94868;
  }
  .analysis, .analysisListItem {
    margin-top: 10px;
  }
  .analysisListItem {

  }
  .analysisListItem-level,  .analysisListItem-cont{
    display: block;
  }
  .analysisListItem-level {
    font-size: 0.9rem;
  }
  .analysisListItem-cont {
    margin-top: 7px;
    font-size: 0.8rem;
    line-height: 1.3rem;
    text-indent: 20px;
  }
</style>
