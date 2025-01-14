/* 变量 */

import { Schedule, Settings, TaskStatusType, TaskType } from '../types';
import { reactive, ref, shallowReactive } from '../utils/composition';
import { getCookie } from '../utils/utils';

/**
 * @description 链接
 */
const href = window.location.href;

/**
 * @description 任务配置
 */
const taskConfig = reactive([
  {
    title: '文章选读',
    currentScore: 0,
    dayMaxScore: 0,
    need: 0,
    status: false,
    tip: '每有效阅读一篇文章积1分，上限6分。有效阅读文章累计1分钟积1分，上限6分。每日上限积12分。',
    percent: 0,
    score: 0,
    index: TaskType.READ,
    active: true,
  },
  {
    title: '视听学习',
    currentScore: 0,
    dayMaxScore: 0,
    need: 0,
    status: false,
    tip: '每有效一个音频或观看一个视频积1分，上限6分。有效收听音频或观看视频累计1分钟积1分，上限6分。每日上限积12分。',
    percent: 0,
    score: 0,
    index: TaskType.WATCH,
    active: true,
  },
  {
    title: '每日答题',
    currentScore: 0,
    dayMaxScore: 0,
    need: 0,
    status: false,
    tip: '每组答题每答对1道积1分。每日上限积5分。',
    percent: 0,
    score: 0,
    index: TaskType.PRACTICE,
    active: false,
  },
  {
    title: '专项练习',
    currentScore: 0,
    dayMaxScore: 0,
    need: 0,
    status: false,
    tip: '每组答题每答对1道积1分，同组答题不重复积分；每日仅可获得一组答题积分，5道题一组的上限5分，10道题一组的上限10分。',
    percent: 0,
    score: 0,
    index: TaskType.PAPER,
    active: false,
  },
]);

/**
 * @description 设置
 */
const settings = reactive<Settings>([
  false,
  false,
  false,
  false,
  false,
  false,
  false,
]);

/**
 * @description 总分
 */
const totalScore = ref(0);

/**
 * @description 当天分数
 */
const todayScore = ref(0);

/**
 * @description 用户信息
 */
const userinfo = reactive({
  nick: '',
  avatar: '',
});

/**
 * @description 进度
 */
const taskStatus = ref(TaskStatusType.LOADING);

/**
 * @description 答题暂停
 */
const examPause = ref(false);

/**
 * @description 登录
 */
const login = ref(!!getCookie('token'));

/**
 * @description 窗口id
 */
const id = ref('');

/**
 * @description 定时刷新列表
 */
const scheduleList = shallowReactive<Schedule[]>([]);

/**
 * @description 推送token
 */
const pushToken = ref('');

/**
 * @description 刷新次数
 */
const refreshCount = ref(0);

/**
 * @description 窗口关闭
 */
const frame = reactive<{
  title: string;
  show: boolean;
  exist: boolean;
  closed: boolean;
  ele: HTMLIFrameElement | undefined;
  src: string;
}>({
  title: '',
  show: false,
  exist: false,
  closed: true,
  ele: undefined,
  src: '',
});

/**
 * @description 页面
 */
const page = ref<Tampermonkey.OpenTabObject | undefined>(undefined);

/**
 * @description 开始登录
 */
const loginQRCodeShow = ref(false);

/**
 * @description 最大选读时长
 */
const maxRead = ref(100);

/**
 * @description 最大视听时长
 */
const maxWatch = ref(120);

export {
  href,
  taskConfig,
  settings,
  todayScore,
  totalScore,
  userinfo,
  taskStatus,
  examPause,
  login,
  id,
  scheduleList,
  pushToken,
  refreshCount,
  loginQRCodeShow,
  frame,
  page,
  maxRead,
  maxWatch,
};
