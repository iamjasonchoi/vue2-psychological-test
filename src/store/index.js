import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  itemNum: 1, // 当前正在做第几题
  allTime: 0, // 总共用时
  timer: '', // 定时器
  finalScore: 0, // 最终得分
  quizList: [
    {
      index: 1,
      title: '你何时感觉最好？',
      optionList: [
        {
          index: 'A',
          answer: '早晨',
          score: 2
        },
        {
          index: 'B',
          answer: '下午及傍晚',
          score: 4
        },
        {
          index: 'C',
          answer: '夜里',
          score: 6
        }
      ]
    },
    {
      index: 2,
      title: '你走路时是……',
      optionList: [
        {
          index: 'A',
          answer: '大步快走',
          score: 6
        },
        {
          index: 'B',
          answer: '小步快走',
          score: 4
        },
        {
          index: 'C',
          answer: '不快，仰着头面对着世界',
          score: 7
        },
        {
          index: 'D',
          answer: '不快，低着头',
          score: 2
        },
        {
          index: 'E',
          answer: '很慢',
          score: 1
        }
      ]
    },
    {
      index: 3,
      title: '和人说话时，你……',
      optionList: [
        {
          index: 'A',
          answer: '手臂交叠地站着',
          score: 4
        },
        {
          index: 'B',
          answer: '双手紧握着',
          score: 2
        },
        {
          index: 'C',
          answer: '一只手或两手放在臀部',
          score: 5
        },
        {
          index: 'D',
          answer: '碰着或推着与你说话的人',
          score: 7
        },
        {
          index: 'E',
          answer: '玩着你的耳朵、摸着你的下巴或用手整理头发',
          score: 6
        }
      ]
    },
    {
      index: 4,
      title: '坐着休息时，你的……',
      optionList: [
        {
          index: 'A',
          answer: '两膝盖并拢',
          score: 4
        },
        {
          index: 'B',
          answer: '两腿交叉',
          score: 6
        },
        {
          index: 'C',
          answer: '两腿伸直',
          score: 2
        },
        {
          index: 'D',
          answer: '一腿蜷在身下',
          score: 1
        }
      ]
    },
    {
      index: 5,
      title: '碰到你感到发笑的事时，你的反应是……',
      optionList: [
        {
          index: 'A',
          answer: '一阵欣赏的大笑',
          score: 6
        },
        {
          index: 'B',
          answer: '笑着，但不大声',
          score: 4
        },
        {
          index: 'C',
          answer: '轻声的、咯咯的笑',
          score: 3
        },
        {
          index: 'D',
          answer: '羞怯的微笑',
          score: 5
        }
      ]
    },
    {
      index: 6,
      title: '当你去参加一个派对或社交场合时，你……',
      optionList: [
        {
          index: 'A',
          answer: '很大声地入场，以引起注意',
          score: 6
        },
        {
          index: 'B',
          answer: '安静地入场，找你认识的人',
          score: 4
        },
        {
          index: 'C',
          answer: '非常安静地入场，尽量保持不被注意',
          score: 2
        }
      ]
    },
    {
      index: 7,
      title: '当你非常专心工作时，有人打断你，你会……',
      optionList: [
        {
          index: 'A',
          answer: '欢迎他',
          score: 6
        },
        {
          index: 'B',
          answer: '感到非常恼怒',
          score: 2
        },
        {
          index: 'C',
          answer: '在以上两极端之间',
          score: 4
        }
      ]
    },
    {
      index: 8,
      title: '下列颜色中，你最喜欢哪一种颜色?',
      optionList: [
        {
          index: 'A',
          answer: '红色或橘色',
          score: 6
        },
        {
          index: 'B',
          answer: '黑色',
          score: 7
        },
        {
          index: 'C',
          answer: '黄色或浅蓝色',
          score: 5
        },
        {
          index: 'D',
          answer: '绿色',
          score: 4
        },
        {
          index: 'E',
          answer: '深蓝色或紫色',
          score: 3
        },
        {
          index: 'F',
          answer: '白色',
          score: 2
        },
        {
          index: 'G',
          answer: '棕色或灰色',
          score: 1
        }
      ]
    },
    {
      index: 9,
      title: '临入睡的前几分钟，你在床上的姿势是……',
      optionList: [
        {
          index: 'A',
          answer: '仰躺，伸直',
          score: 7
        },
        {
          index: 'B',
          answer: '仰躺，伸直',
          score: 6
        },
        {
          index: 'C',
          answer: '侧躺，微蜷',
          score: 4
        },
        {
          index: 'D',
          answer: '头枕在一手臂上',
          score: 2
        },
        {
          index: 'E',
          answer: '被盖过头',
          score: 1
        }
      ]
    },
    {
      index: 10,
      title: '你经常梦到你在……',
      optionList: [
        {
          index: 'A',
          answer: '落下',
          score: 4
        },
        {
          index: 'B',
          answer: '打架或挣扎',
          score: 2
        },
        {
          index: 'C',
          answer: '找东西或人',
          score: 3
        },
        {
          index: 'D',
          answer: '飞或漂浮',
          score: 5
        },
        {
          index: 'E',
          answer: '你平常不做梦',
          score: 6
        },
        {
          index: 'F',
          answer: '你的梦都是愉快的',
          score: 1
        }
      ]
    }
  ]
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
