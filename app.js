const highlightCodes = ["LUS", "RGM", "HEM", "LGI", "HGS", "RUI"];

const questions = [
  {
    id: 1,
    axis: "entry",
    axisLabel: "进场方式",
    title: "一开局或一复活，你最像哪种人？",
    options: [
      { letter: "A", text: "先找正面交火，能打就打。", value: "R" },
      { letter: "B", text: "先摸侧翼找角度，看看能不能偷一个。", value: "L" },
      { letter: "C", text: "先占住关键位置，边看信息边等机会。", value: "H" }
    ]
  },
  {
    id: 2,
    axis: "entry",
    axisLabel: "进场方式",
    title: "队友一群人犹犹豫豫不往前时，你通常会？",
    options: [
      { letter: "A", text: "算了，我先上去试着破局。", value: "R" },
      { letter: "B", text: "我换条路线，从侧面给压力。", value: "L" },
      { letter: "C", text: "我先稳住视野和退路，别全队一起乱。", value: "H" }
    ]
  },
  {
    id: 3,
    axis: "entry",
    axisLabel: "进场方式",
    title: "被打成人数劣势时，你更常见的思路是？",
    options: [
      { letter: "A", text: "连续找人硬打回来，不想慢慢拖。", value: "R" },
      { letter: "B", text: "拉扯换位，想办法一个个拆。", value: "L" },
      { letter: "C", text: "先守住安全位置，等对面犯错。", value: "H" }
    ]
  },
  {
    id: 4,
    axis: "entry",
    axisLabel: "进场方式",
    title: "一听到枪声、脚步或技能动静，你第一反应是？",
    options: [
      { letter: "A", text: "先压上去碰一下，能换就换。", value: "R" },
      { letter: "B", text: "先藏信息，再找机会换角度。", value: "L" },
      { letter: "C", text: "先稳住并报信息，别让局面乱掉。", value: "H" }
    ]
  },
  {
    id: 5,
    axis: "entry",
    axisLabel: "进场方式",
    title: "碰到新地图或不熟的模式时，你会？",
    options: [
      { letter: "A", text: "先靠反应和枪感玩起来。", value: "R" },
      { letter: "B", text: "先找侧路、高低差和奇怪角度。", value: "L" },
      { letter: "C", text: "先记关键点位和常见交火区。", value: "H" }
    ]
  },
  {
    id: 6,
    axis: "resource",
    axisLabel: "作战偏好",
    title: "你更愿意把精力放在哪？",
    options: [
      { letter: "A", text: "枪法、跟枪和正面对拼。", value: "G" },
      { letter: "B", text: "投掷物、技能和功能道具。", value: "U" },
      { letter: "C", text: "站位、保命和拉扯节奏。", value: "E" }
    ]
  },
  {
    id: 7,
    axis: "resource",
    axisLabel: "作战偏好",
    title: "队友喊你“帮一手”时，你通常会？",
    options: [
      { letter: "A", text: "我先补枪，把对面压回去。", value: "G" },
      { letter: "B", text: "我给技能/道具，先帮他创造空间。", value: "U" },
      { letter: "C", text: "我先找安全角度接应，别两个人一起送。", value: "E" }
    ]
  },
  {
    id: 8,
    axis: "resource",
    axisLabel: "作战偏好",
    title: "你拿到强力武器、终极技能或关键资源时，第一反应是？",
    options: [
      { letter: "A", text: "这波我来接管。", value: "G" },
      { letter: "B", text: "先配合技能/道具打一套。", value: "U" },
      { letter: "C", text: "先想怎么把收益打满，别白交。", value: "E" }
    ]
  },
  {
    id: 9,
    axis: "resource",
    axisLabel: "作战偏好",
    title: "逆风局里，你更像哪种人？",
    options: [
      { letter: "A", text: "先靠个人能力狠狠干一波。", value: "G" },
      { letter: "B", text: "用技能、道具或位移把局面搅乱。", value: "U" },
      { letter: "C", text: "先稳节奏，别继续连送。", value: "E" }
    ]
  },
  {
    id: 10,
    axis: "resource",
    axisLabel: "作战偏好",
    title: "你最看不惯哪种队友？",
    options: [
      { letter: "A", text: "明明能对枪却老往后缩的。", value: "G" },
      { letter: "B", text: "技能/道具捏到结束都不交的。", value: "U" },
      { letter: "C", text: "一上头就白给，完全不看位置的。", value: "E" }
    ]
  },
  {
    id: 11,
    axis: "persona",
    axisLabel: "队内人格",
    title: "路人局里，你开麦状态更像？",
    options: [
      { letter: "A", text: "不光报点，我还想安排节奏。", value: "I" },
      { letter: "B", text: "有必要才说，平时很安静。", value: "S" },
      { letter: "C", text: "看气氛，顺风会聊，不顺也能整活。", value: "M" }
    ]
  },
  {
    id: 12,
    axis: "persona",
    axisLabel: "队内人格",
    title: "队友空枪或白给时，你第一反应更像？",
    options: [
      { letter: "A", text: "我会忍不住复盘他哪错了。", value: "I" },
      { letter: "B", text: "心里记住，嘴上不说。", value: "S" },
      { letter: "C", text: "先来一句“没事下一把”。", value: "M" }
    ]
  },
  {
    id: 13,
    axis: "persona",
    axisLabel: "队内人格",
    title: "团灭后你最常做什么？",
    options: [
      { letter: "A", text: "立刻讲这波该怎么打。", value: "I" },
      { letter: "B", text: "直接准备下把，不想废话。", value: "S" },
      { letter: "C", text: "先把队内气氛拉回来。", value: "M" }
    ]
  },
  {
    id: 14,
    axis: "persona",
    axisLabel: "队内人格",
    title: "路人看你一整局后，最可能怎么评价你？",
    options: [
      { letter: "A", text: "临时队长/指挥哥。", value: "I" },
      { letter: "B", text: "不说话但像个高手。", value: "S" },
      { letter: "C", text: "抽象，但是队里不能没你。", value: "M" }
    ]
  },
  {
    id: 15,
    axis: "persona",
    axisLabel: "队内人格",
    title: "游戏结束后，你最常留下哪种印象？",
    options: [
      { letter: "A", text: "这人控制欲有点强但想赢。", value: "I" },
      { letter: "B", text: "这人像在单机，但关键时刻真能杀。", value: "S" },
      { letter: "C", text: "这人操作不一定最猛，但节目效果和情绪价值拉满。", value: "M" }
    ]
  }
];

const dimensionMeta = {
  entry: {
    label: "进场方式",
    values: {
      R: { name: "Rush 冲脸人", desc: "信奉先抢身位再讲道理，能爆点就不想磨。", tieOrder: 0 },
      L: { name: "Lurk 老六人", desc: "爱绕、爱摸、爱 timing，存在感总在奇怪的地方出现。", tieOrder: 1 },
      H: { name: "Hold 保安人", desc: "越稳越舒服，越守越有安全感，主打一个等你来。", tieOrder: 2 }
    }
  },
  resource: {
    label: "作战偏好",
    values: {
      G: { name: "Gun 枪感派", desc: "枪法、跟枪和正面对拼是你的主菜，先把人打掉比什么都实在。", tieOrder: 0 },
      U: { name: "Utility 工具派", desc: "信任投掷物、技能和功能道具的价值，喜欢先让对面不舒服。", tieOrder: 1 },
      E: { name: "Efficiency 生存派", desc: "偏爱站位、止损和拉扯节奏，活着和打满收益比乱送更重要。", tieOrder: 2 }
    }
  },
  persona: {
    label: "队内人格",
    values: {
      I: { name: "IGL 指挥哥", desc: "不只报点，还想安排所有人站位、 timing 和情绪。", tieOrder: 0 },
      S: { name: "Silent 沉默哥", desc: "平时像闭麦修仙，关键时刻突然接管。", tieOrder: 1 },
      M: { name: "Mood 气氛哥", desc: "能不能赢另说，队里不能塌气氛是底线。", tieOrder: 2 }
    }
  }
};

const typeMeta = {
  RGI: {
    name: "爆点话事人",
    tagline: "你不是在推进点位，你是在引领局势。",
    summary: "你最爱正面接管比赛，枪法、自信和嘴上的节奏必须一起拉满。打顺了你像goat，打崩了你像现场总指挥兼第一责任人。",
    strengths: ["先手能力强，局面一停你就敢撕口子。", "喜欢接管残局，不怕正面对枪。", "队伍没节奏时你能硬把节奏拉出来。"],
    weaknesses: ["容易上头，队友一慢你就想自己开。", "指挥和干拉可能同时发生，容错有点低。"],
    impression: "像那种一边说“跟我一起rush”一边已经冲进点里的大嗓门狠人。"
  },
  RGS: {
    name: "干拉枪男",
    tagline: "你的人生信条是：能对枪解决的事，就别讲太多战术。",
    summary: "你靠枪感和胆量活着，对身位、预瞄和第一发爆头有天然执念。你话不一定多，但一到该拉枪的时候谁也拦不住。",
    strengths: ["正面对枪欲望强，能抢出空间。", "高压局里敢做决定，不怕背锅。", "关键时候容易打出很帅的镜头。"],
    weaknesses: ["容易把队友的配合当背景板。", "不太愿意慢节奏试探，容易吃信息差。"],
    impression: "像评论区里充满那种“开了吗”的典型样本。"
  },
  RGM: {
    name: "上头整活王",
    tagline: "你可能不是最稳的，但一定是最容易把队友情绪拉高的那个。",
    summary: "你能冲、能秀、能犯病，也能在一局里把节目效果和高光镜头一起做出来。赢了像天才，送了像喜剧演员，反正都很有存在感。",
    strengths: ["局势僵住时你敢第一个动。", "心态弹性大，崩了也不至于秒碎。", "朋友局里节目效果极强。"],
    weaknesses: ["手感一热就容易不看后果。", "有时会把“整活”玩成“献祭”。"],
    impression: "像那种死了都还能笑着说“没事这波我探点”的抽象选手。"
  },
  RUI: {
    name: "道具督战组",
    tagline: "你既想第一个进，也想顺手把全队流程都安排明白。",
    summary: "你不是无脑冲，你是希望每次进攻都像排练过。开路的烟闪、技能压迫和正面进点你都想兼顾，偶尔会把自己玩成半个教练。",
    strengths: ["能把道具和进场节奏绑在一起。", "会主动喊配合，不容易完全脱节。", "打有准备的爆点局很强。"],
    weaknesses: ["对队友执行度要求高，容易急。", "一旦没人跟，你的操作和情绪都可能一起炸。"],
    impression: "像那种嘴里喊着“我给了我给了，跟上啊”然后自己先飞进去的人。"
  },
  RUS: {
    name: "烟闪操作怪",
    tagline: "你是那种明明在冲脸，却还要把进攻打得很精致的人。",
    summary: "你会想办法用最实用的道具换最舒服的对枪，不愿意纯赌枪法。你看起来像枪男，细看其实是个流程控，只是流程偏激进。",
    strengths: ["道具换位、拆点和拉枪衔接自然。", "对主动找机会的嗅觉很强。", "能把单次进攻打得很完整。"],
    weaknesses: ["偶尔会高估自己的连段。", "队友一断档，整套操作就容易白给。"],
    impression: "像那种会被说“这人不是莽，他是很会莽”的狠角色。"
  },
  RUM: {
    name: "技能喜剧人",
    tagline: "你开局像导演，打着打着又像综艺嘉宾。",
    summary: "你很爱用技能和道具开场面，也乐于制造各种抽象但好看的局。你不是没想法，而是想法太多时容易顺手把整局打成节目。",
    strengths: ["脑洞大，套路多，不会只会一种打法。", "气氛好时很容易越打越顺。", "偶尔能打出对面完全看不懂的回合。"],
    weaknesses: ["执行上头后容易脱离团队。", "部分灵感型操作很吃当天手感。"],
    impression: "像那种自己都不知道下一秒要整什么活的技能流玩家。"
  },
  REI: {
    name: "破局指挥官",
    tagline: "你相信局势可以烂，但节奏绝对不能先断。",
    summary: "你习惯在局面不顺的时候也把队伍重新拽起来，哪怕资源和状态都一般，也想先打一波有存在感的回合。你最可怕的地方是，逆风时照样一脸“这把能打”。",
    strengths: ["逆风也愿意主动组织节奏。", "气势型选手，敢搏关键回合。", "能给队友一种“这把还有戏”的感觉。"],
    weaknesses: ["容易把纪律让位给冲动。", "有时会高估低配状态下的战斗力。"],
    impression: "像那种全队还在发愣，你已经开始安排下一波怎么破局的人。"
  },
  RES: {
    name: "逆风豪赌流",
    tagline: "你不喜欢被慢慢磨死，宁可狠狠干一波试着翻。",
    summary: "你不爱和烂局势讲和，经常在资源、人数或节奏都不太舒服的时候狠狠干一票。你没那么多话，但一旦决定拉出去，队友就知道你准备拿命换局面。",
    strengths: ["逆风也敢打，不容易被拖到没声音。", "关键回合存在感强。", "很适合突然打出反差，硬把气势抢回来。"],
    weaknesses: ["有时保守和激进切换得太硬。", "如果第一波没打出东西，队伍会更难受。"],
    impression: "像那种明明局势不妙，还是会突然狠狠干一波的狠人。"
  },
  REM: {
    name: "逆风气氛组",
    tagline: "你可以输回合，但你不想让全队心态先炸。",
    summary: "你对局势有数，但不会把每个逆风回合都打成沉默局。你擅长在不舒服的时候保持气氛和敢打敢拼的劲儿，属于烂局里最能稳住军心的人。",
    strengths: ["节奏判断和情绪价值兼顾。", "逆风时不容易让队伍彻底烂掉。", "很会用轻松口气化解压力。"],
    weaknesses: ["偶尔会因为太想稳住大家而少了点锋利。", "高压残局里可能偏保守。"],
    impression: "像那种会说“这波先别碎，狠狠干一把再说”的好队友。"
  },
  LGI: {
    name: "边路军师",
    tagline: "你人在边路，脑子在全图，嘴还想顺手指挥一下。",
    summary: "你最擅长从非常规方向切入，同时还想把整局脉络捋清楚。你不一定总站正面，但你总想让自己的边路动作变成全队赢点。",
    strengths: ["会找 timing，知道什么时候该给侧压。", "理解地图空间，对包夹有感觉。", "容易打出改变局势的边线突破。"],
    weaknesses: ["如果队友跟不上，你会显得像在单机。", "偶尔过于相信自己的绕后收益。"],
    impression: "像那种一边在边路偷人，一边还在语音里规划下一步的人。"
  },
  LGS: {
    name: "背身自由人",
    tagline: "你对正面对枪未必上头，但对背身和 timing 绝对真爱。",
    summary: "你最享受的是别人以为安全时被你收走的那一秒。你靠位置、耐心和开枪时机活着，看起来安静，实则全在盯机会。",
    strengths: ["找背身和 timing 的能力很强。", "不爱硬送，残局上限高。", "关键时刻容易打出低信息量击杀。"],
    weaknesses: ["团战参与感有时偏低。", "过度绕后时容易错过正面窗口。"],
    impression: "像那种让对面复盘时都会骂一句“这老六哪来的”。"
  },
  LGM: {
    name: "绕后节目组",
    tagline: "你最爱做的事，就是从所有人都不看好的路线里走出节目效果。",
    summary: "你对非常规线路、奇怪 timing 和背身收割有执念，也愿意为一波精彩的绕后承受迷路和掉点的风险。成了是天秀，没成是综艺。",
    strengths: ["路线脑洞大，不容易被读死。", "成型时能瞬间让局势翻盘。", "朋友局看点非常高。"],
    weaknesses: ["容易沉迷个人表演。", "有时队友根本等不到你发力。"],
    impression: "像那种十局里能迷路八局，但那两局能被做成集锦的人。"
  },
  LUI: {
    name: "战术老六王",
    tagline: "你最喜欢的不是赢一波枪，而是把对面的默认思路整个拆掉。",
    summary: "你是典型的地图恶心人玩家，能绕、能拖、能用道具让对面心态发毛。你对空间和时机非常敏感，擅长用最不像正面硬刚的方式决定回合。",
    strengths: ["理解 timing，擅长打错位。", "会用道具和站位把人逼出舒适区。", "残局和偷节奏能力都很强。"],
    weaknesses: ["容易让队友看不懂你的路线。", "一旦前半段亏信息，后手价值会缩水。"],
    impression: "像那种你永远不知道他在哪，但总会在最烦的时候出现的人。"
  },
  LUS: {
    name: "阴间道具哥",
    tagline: "你不一定第一个杀人，但你一定第一个把对面打烦。",
    summary: "你靠的不是纯枪，而是让对面先难受。烟、闪、雷、技能、站位、 timing 这套东西你都懂一点，而且很爱往最阴间的地方用。",
    strengths: ["很会用低成本道具打高收益。", "知道怎么用地图和工具恶心人。", "残局思路清楚，节奏感强。"],
    weaknesses: ["有时会为了“精致操作”打慢节奏。", "如果队友太急，你的价值不一定能兑现。"],
    impression: "像那种每把都没特别大声，但打完复盘大家都会想起你的人。"
  },
  LUM: {
    name: "地图魔术师",
    tagline: "你打 FPS 像在做街头魔术，转角、烟里和背后全是戏法。",
    summary: "你喜欢用技能和路线制造存在感，也很会搞一些看着离谱但真能成的操作。你不靠正面吓人，靠的是对面一直猜不到你下一秒在哪。",
    strengths: ["套路感强，打法有想象力。", "很会把地图当舞台用。", "高光回合特别有观赏性。"],
    weaknesses: ["太依赖感觉时会有点飘。", "稳定性不如纯纪律型玩家。"],
    impression: "像那种让人想说“这人到底是在打比赛还是在变戏法”的老六。"
  },
  LEI: {
    name: "止损参谋长",
    tagline: "你知道什么时候该偷、什么时候该苟、什么时候该劝全队别上头。",
    summary: "你不是纯躲，你是会计算风险的边路生存专家。你习惯从长线收益看每一回合，既想做事，也不愿意把优势和资源莫名其妙送掉。",
    strengths: ["止损意识强，不容易乱亏优势。", "很会在残局里争取最大收益。", "对节奏和风险的平衡感好。"],
    weaknesses: ["高压时可能显得不够凶。", "有时会被误解成过于谨慎。"],
    impression: "像那种全队都急了，只有你还在认真算这波到底值不值的人。"
  },
  LES: {
    name: "沉默保安六",
    tagline: "你像地图上的幽灵保安，不说话，但总能活到最后。",
    summary: "你偏安静、偏谨慎、偏会藏，擅长把自己放在能打一换一甚至一换多的位置。你不抢镜头，但非常难处理。",
    strengths: ["存在感低但威胁高。", "残局质量稳定，少犯无效错误。", "很懂如何把位置价值吃满。"],
    weaknesses: ["容易被队友觉得信息量不够。", "回合前期的主动性会偏弱。"],
    impression: "像那种麦几乎不亮，但 kill feed 里总能时不时跳出你名字的人。"
  },
  LEM: {
    name: "苟分整活怪",
    tagline: "你很懂保命，也很懂怎么在保命的同时把气氛搞起来。",
    summary: "你会绕、会藏、会偷，而且不会让自己的打法显得特别苦大仇深。你既想活到最后，也想让队友觉得这把还有点意思。",
    strengths: ["生存能力强，不容易白给。", "朋友局氛围很好，不会太沉。", "残局偷鸡和整活能力兼备。"],
    weaknesses: ["有时会为了舒服路线放慢整体节奏。", "激进度不足时容易被说太苟。"],
    impression: "像那种每次都能活挺久，还总能顺手说两句怪话逗笑队友的人。"
  },
  HGI: {
    name: "后排压力怪",
    tagline: "你看起来稳，其实内心一直在想怎么把别人都安排明白。",
    summary: "你不爱乱动，但喜欢当后排中枢，既架枪又调度，偶尔还会把一场普通防守打成带队课堂。你讲究秩序，也讲究别人别乱来。",
    strengths: ["架点稳定，容易成为防守核心。", "报点和调度意识强。", "不容易被对面第一时间打穿。"],
    weaknesses: ["有时过于相信站位纪律。", "队友不听时容易心态起伏。"],
    impression: "像那种站在后排没挪几步，但语音里已经覆盖全图的人。"
  },
  HGS: {
    name: "架点大师",
    tagline: "你最大的乐趣，就是让别人知道这道门今天真的不好过。",
    summary: "你是典型的守点型枪男，不爱多嘴，爱把角度和预瞄练到让人头疼。别人觉得 boring 的位置，你能守得像收费站。",
    strengths: ["卡点扎实，守默认点很稳。", "正面吃人时压迫感强。", "适合当防守支柱。"],
    weaknesses: ["应对复杂拉扯时机动性一般。", "过于舒服的站位容易被针对。"],
    impression: "像那种对面一看录像就想先给你一颗闪的人。"
  },
  HGM: {
    name: "站桩搞笑役",
    tagline: "你守点是真的能守，整活也是真的能整。",
    summary: "你喜欢舒服地待在熟悉位置，把进来的人一个个接住；但你又不会把自己打成木头人，偶尔会冒出一些离谱而好笑的防守决策。",
    strengths: ["熟悉点位时特别稳定。", "守点时有自己的怪招。", "不会让队伍气氛太死。"],
    weaknesses: ["一旦被针对，调整速度可能偏慢。", "容易沉迷某几个舒服点位。"],
    impression: "像那种嘴上说“我就守这里”，结果真能守半天的人。"
  },
  HUI: {
    name: "阵地总导演",
    tagline: "你最爱做的不是打出一波帅操作，而是让整套防守看起来很像一回事。",
    summary: "你在阵地战里很有秩序感，知道什么时候该拖、什么时候该交技能、什么时候该叫支援。你喜欢把局面控在自己觉得合理的范围内。",
    strengths: ["防守流程完整，失误率低。", "很会用道具争取时间和空间。", "对团队协防价值高。"],
    weaknesses: ["过于讲流程时会少一点临场锐度。", "容易对乱打的队友产生不满。"],
    impression: "像那种防守一开就已经在脑子里排完流程表的人。"
  },
  HUS: {
    name: "技能仓管哥",
    tagline: "你的道具和技能像库存管理，交得不浪费，留得有理由。",
    summary: "你不是那种喜欢花里胡哨乱交资源的人，你更像一个冷静的阵地管理员。对你来说，技能不是秀的，是用来让对面难受、让自己舒服的。",
    strengths: ["道具使用节制且有效。", "防守拖时间能力突出。", "很会把有限资源用在刀刃上。"],
    weaknesses: ["偶尔会因为太想值回票价而交得偏慢。", "进攻端的锐度没有防守端那么高。"],
    impression: "像那种打完一局你会发现他技能全都没白交的人。"
  },
  HUM: {
    name: "守位艺术家",
    tagline: "你把“稳住”这两个字，玩出了点审美。",
    summary: "你喜欢舒服节奏、熟悉空间和有掌控感的防守，但你又不是纯木头，反而很会用自己的节奏让队伍没那么紧绷。你是那种稳得住，还不无聊的人。",
    strengths: ["守位稳定，心态平缓。", "节奏舒服，队友容易跟着安心。", "很适合长局和拉扯局。"],
    weaknesses: ["爆发力不是你的第一武器。", "太稳时容易被评价“有点慢热”。"],
    impression: "像那种永远不吵不急，但大家都默认这点交给你的人。"
  },
  HEI: {
    name: "止损政委",
    tagline: "你不只是自己想稳，你还想教育大家为什么不能乱送。",
    summary: "你对回合价值和团队节奏特别敏感，最受不了的就是没必要的白给。你是那种既想守住位置，也想守住全队节奏的人。",
    strengths: ["止损判断出色，少做亏本选择。", "回合判断偏成熟，不容易乱。", "能让队伍整体更稳。"],
    weaknesses: ["队友上头时你很容易血压上来。", "偶尔会少一点搏命气。"],
    impression: "像那种残局还没结束，脑子里已经开始算下一波怎么最不亏的人。"
  },
  HES: {
    name: "沉默上分机",
    tagline: "你不怎么讲话，但你的战绩和存活率很会说话。",
    summary: "你是典型的安静稳定型玩家，爱守、会保、少犯错，通常不会成为情绪风暴中心。你可能不抢镜头，但特别适合持续上分。",
    strengths: ["稳定、纪律、少失误。", "很适合长时间稳定拿分。", "残局和守点完成度高。"],
    weaknesses: ["队友情绪崩时你不一定会主动拉一把。", "存在感偏低，容易被忽视。"],
    impression: "像那种整局话不多，但结算一看就是稳稳正收益的人。"
  },
  HEM: {
    name: "稳健气氛哥",
    tagline: "你不一定最秀，但你是那种能让全队打得像个人的存在。",
    summary: "你爱稳、懂保、会守，还很会照顾队伍情绪。你不是最炸裂的那个，却常常是最让人舒服的那个，属于大家平时嘴上不夸、排位里最想遇到的人。",
    strengths: ["纪律性和情绪价值都在线。", "适合长局、逆风和朋友局。", "团队容错会因为你明显变高。"],
    weaknesses: ["个人侵略性偏低。", "遇到需要强行接管的局时可能不够凶。"],
    impression: "像那种结束后大家会说“下次还拉他”的靠谱老哥。"
  }
};

const state = {
  currentQuestionIndex: 0,
  answers: Array(questions.length).fill(null)
};

const heroHighlight = document.getElementById("hero-highlight");
const introPanel = document.getElementById("intro-panel");
const quizPanel = document.getElementById("quiz-panel");
const resultPanel = document.getElementById("result-panel");
const questionCounter = document.getElementById("question-counter");
const questionAxis = document.getElementById("question-axis");
const questionTitle = document.getElementById("question-title");
const optionsWrap = document.getElementById("options");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const prevBtn = document.getElementById("prev-btn");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const copyBtn = document.getElementById("copy-btn");
const optionTemplate = document.getElementById("option-template");

function rotateHighlight() {
  const code = highlightCodes[Math.floor(Math.random() * highlightCodes.length)];
  heroHighlight.textContent = code;
}

function showPanel(panel) {
  [introPanel, quizPanel, resultPanel].forEach((item) => item.classList.remove("active"));
  panel.classList.add("active");
}

function renderQuestion() {
  const question = questions[state.currentQuestionIndex];
  const selected = state.answers[state.currentQuestionIndex];
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  questionCounter.textContent = `第 ${state.currentQuestionIndex + 1} / ${questions.length} 题`;
  questionAxis.textContent = question.axisLabel;
  questionTitle.textContent = question.title;
  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${Math.round(progress)}%`;
  prevBtn.disabled = state.currentQuestionIndex === 0;

  optionsWrap.innerHTML = "";
  question.options.forEach((option) => {
    const fragment = optionTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".option-btn");
    const letter = fragment.querySelector(".option-letter");
    const text = fragment.querySelector(".option-text");

    letter.textContent = option.letter;
    text.textContent = option.text;
    button.dataset.value = option.value;

    if (selected === option.value) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      state.answers[state.currentQuestionIndex] = option.value;
      button.classList.add("selected");
      optionsWrap.querySelectorAll(".option-btn").forEach((item) => {
        item.disabled = true;
      });

      window.setTimeout(() => {
        if (state.currentQuestionIndex === questions.length - 1) {
          renderResult();
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        state.currentQuestionIndex += 1;
        renderQuestion();
      }, 140);
    });

    optionsWrap.appendChild(fragment);
  });
}

function chooseWithTieBreaker(axisKey, values, rangeStart) {
  const entries = Object.entries(values);
  const max = Math.max(...entries.map((entry) => entry[1]));
  const tied = entries.filter((entry) => entry[1] === max).map((entry) => entry[0]);

  if (tied.length === 1) {
    return tied[0];
  }

  for (let i = rangeStart; i < rangeStart + 5; i += 1) {
    const answer = state.answers[i];
    if (tied.includes(answer)) {
      return answer;
    }
  }

  return tied.sort((left, right) => {
    const leftOrder = dimensionMeta[axisKey].values[left].tieOrder;
    const rightOrder = dimensionMeta[axisKey].values[right].tieOrder;
    return leftOrder - rightOrder;
  })[0];
}

function calculateResult() {
  const scores = {
    entry: { R: 0, L: 0, H: 0 },
    resource: { G: 0, U: 0, E: 0 },
    persona: { I: 0, S: 0, M: 0 }
  };

  questions.forEach((question, index) => {
    const answer = state.answers[index];
    if (answer) {
      scores[question.axis][answer] += 1;
    }
  });

  const entryCode = chooseWithTieBreaker("entry", scores.entry, 0);
  const resourceCode = chooseWithTieBreaker("resource", scores.resource, 5);
  const personaCode = chooseWithTieBreaker("persona", scores.persona, 10);
  const code = `${entryCode}${resourceCode}${personaCode}`;

  return {
    code,
    meta: typeMeta[code],
    dimensions: [
      { axis: "entry", code: entryCode, score: scores.entry[entryCode] },
      { axis: "resource", code: resourceCode, score: scores.resource[resourceCode] },
      { axis: "persona", code: personaCode, score: scores.persona[personaCode] }
    ]
  };
}

function renderResult() {
  const result = calculateResult();
  const codeNode = document.getElementById("result-code");
  const nameNode = document.getElementById("result-name");
  const taglineNode = document.getElementById("result-tagline");
  const summaryNode = document.getElementById("result-summary");
  const strengthsNode = document.getElementById("result-strengths");
  const weaknessesNode = document.getElementById("result-weaknesses");
  const impressionNode = document.getElementById("result-impression");
  const dimensionGrid = document.getElementById("dimension-grid");

  codeNode.textContent = result.code;
  nameNode.textContent = result.meta.name;
  taglineNode.textContent = result.meta.tagline;
  summaryNode.textContent = result.meta.summary;
  impressionNode.textContent = result.meta.impression;

  strengthsNode.innerHTML = "";
  result.meta.strengths.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    strengthsNode.appendChild(li);
  });

  weaknessesNode.innerHTML = "";
  result.meta.weaknesses.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    weaknessesNode.appendChild(li);
  });

  dimensionGrid.innerHTML = "";
  result.dimensions.forEach((dimension) => {
    const meta = dimensionMeta[dimension.axis].values[dimension.code];
    const card = document.createElement("article");
    card.className = "dimension-card";
    card.innerHTML = `
      <h3>${dimensionMeta[dimension.axis].label}</h3>
      <strong>${dimension.code} · ${meta.name}</strong>
      <p>${meta.desc}</p>
      <p>本维度命中 ${dimension.score} / 5</p>
    `;
    dimensionGrid.appendChild(card);
  });

  copyBtn.dataset.shareText = [
    `我的 FSTI 是：${result.code}｜${result.meta.name}`,
    result.meta.tagline,
    `一句话诊断：${result.meta.summary}`,
    `路人局评价：${result.meta.impression}`
  ].join("\n");

  showPanel(resultPanel);
}

function resetQuiz() {
  state.currentQuestionIndex = 0;
  state.answers = Array(questions.length).fill(null);
  renderQuestion();
  showPanel(introPanel);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

startBtn.addEventListener("click", () => {
  state.currentQuestionIndex = 0;
  renderQuestion();
  showPanel(quizPanel);
});

prevBtn.addEventListener("click", () => {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    renderQuestion();
  }
});

restartBtn.addEventListener("click", resetQuiz);

copyBtn.addEventListener("click", async () => {
  const text = copyBtn.dataset.shareText || "";

  try {
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = "已复制，快发给队友";
  } catch (error) {
    copyBtn.textContent = "复制失败，请手动复制";
  }

  window.setTimeout(() => {
    copyBtn.textContent = "复制结果文案";
  }, 2200);
});

rotateHighlight();
renderQuestion();
