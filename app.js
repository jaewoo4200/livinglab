
const personas = {
  junho: {
    id: 'junho',
    name: '박준호',
    title: '20대 남성 · 첫 자취 4개월차 대학생',
    avatar: 'JH',
    photo: 'assets/personas/junho.jpg',
    color: '#234c62',
    quote: '혼자 살기 시작하니까 사소한 일까지 다 내가 챙겨야 해서 은근 버겁다.',
    summary: '생활 운영 경험이 적어 집안일·지출 관리·기초 수리에 시행착오를 겪는 유형',
    tags: ['원룸 자취', '월 예산 70만원', '디지털 숙련도 높음'],
    priorities: ['전입신고 / 입주 체크', '공과금·고정비 관리', '집안일 루틴 만들기'],
    risk: '무엇을 언제 해야 하는지 구조화되지 않으면 생활 루틴이 쉽게 무너진다.',
    quickAction: '첫 자취 체크리스트 시작',
    moduleHint: '온보딩 + 생활 관리 + 수리 가이드'
  },
  seoyeon: {
    id: 'seoyeon',
    name: '김서연',
    title: '20대 여성 · 자취 6개월차 사회초년생',
    avatar: 'SY',
    photo: 'assets/personas/seoyeon.jpg',
    color: '#ca634d',
    quote: '모르는 것도 많은데 혼자 해결해야 해서, 특히 아프거나 문제가 생기면 겁부터 나요.',
    summary: '생활 시스템 이해와 주거 안전 민감성이 동시에 큰 유형',
    tags: ['오피스텔 원룸', '평균 퇴근 8~9시', '안전감 우선'],
    priorities: ['야간 귀가 안전', '병원·약국·수리처 연결', '도움 요청 템플릿'],
    risk: '정보보다도 누구에게 연락해야 할지 모르는 순간 행동이 지연된다.',
    quickAction: '안전 센터 바로 열기',
    moduleHint: '도움 요청 + 안전 센터'
  },
  jeongsuk: {
    id: 'jeongsuk',
    name: '이정숙',
    title: '독거노인 · 74세 · 고령 1인가구',
    avatar: 'JS',
    photo: 'assets/personas/jeongsuk.jpg',
    color: '#5b8454',
    quote: '갑자기 몸이 안 좋아질 때 가장 무서운 건, 바로 연락할 사람이 없다는 거예요.',
    summary: '신체적 취약성, 디지털 접근 장벽, 정서적 고립이 동시에 존재하는 유형',
    tags: ['임대아파트 거주', '디지털 숙련도 낮음', '가족 타 지역'],
    priorities: ['원터치 도움 요청', '큰 글씨·음성 안내', '정기 안부 체크'],
    risk: '새 기능이 많아질수록 사용성이 떨어지고, 사람과의 연결이 끊기면 취약해진다.',
    quickAction: '케어 모드 켜기',
    moduleHint: '케어 모드 + 안전 센터'
  },
  jenny: {
    id: 'jenny',
    name: '김제니',
    title: '22세 · 현대무용 전공 러시아인 유학생',
    avatar: 'JN',
    photo: 'assets/personas/jenny.jpg',
    color: '#2b64c7',
    quote: '배달은 정말 편리하지만, 가끔 의사소통이나 주소 때문에 스트레스 받아요.',
    summary: '언어 장벽, 한국식 서비스 흐름의 낯설음, 생활 맥락 이해 부족이 동시에 작동하는 초기 정착 사용자',
    tags: ['러시아인 유학생', '원룸 거주', '배달 주 3~5회', '디지털 속도 높음'],
    priorities: ['간편한 주문 과정', '번역·채팅 중심 의사소통', '정확한 ETA와 다국어 생활 가이드'],
    risk: '기사님 전화, 주소 입력, 고객센터 흐름이 낯설면 주문 진행 정보가 불안으로 이어진다.',
    quickAction: '글로벌 모드 열기',
    moduleHint: '글로벌 모드 + 배달/생활 가이드'
  }
};

const onboardingTasks = [
  { id: 'move_in', title: '입주 직후 해야 할 일 확인', desc: '전입신고, 확정일자, 관리비 납부 방식, 도어락 점검 순서 안내', persona: ['junho', 'seoyeon', 'jenny'] },
  { id: 'garbage', title: '우리 동네 분리수거 규칙 저장', desc: '거주 지역별 배출 요일, 음식물봉투, 대형폐기물 처리 가이드', persona: ['junho', 'seoyeon', 'jenny'] },
  { id: 'supplies', title: '필수 생필품 체크', desc: '침구, 수건, 세제, 멀티탭, 구급약, 소화기 등 입주 기본 세트', persona: ['junho', 'seoyeon'] },
  { id: 'utility', title: '공과금 리마인더 설정', desc: '월세, 관리비, 가스비, 전기세, 인터넷 납부일 알림', persona: ['junho', 'seoyeon', 'jenny'] },
  { id: 'contacts', title: '도움 요청 연락처 저장', desc: '가족, 친구, 관리실, 집주인, 복지사, 응급 연락망 등록', persona: ['seoyeon', 'jeongsuk'] },
  { id: 'safety', title: '주거 안전 점검', desc: '공동현관, 창문 잠금, 화재 대비, 응급약, 야간 동선, 택배 수령 체크', persona: ['seoyeon', 'jeongsuk'] },
  { id: 'language', title: '다국어 생활 모드 초기 설정', desc: '한국어/영어/러시아어 UI, 자주 쓰는 표현, 주소 포맷 저장', persona: ['jenny'] },
  { id: 'care', title: '큰 글씨/케어 모드 준비', desc: '폰트 확대, 원터치 도움 요청, 안부 체크 주기 설정', persona: ['jeongsuk'] }
];

const billItems = [
  { id: 'rent', title: '월세', amount: '₩350,000', due: '매월 05일', state: '고정비', note: '자동이체 권장' },
  { id: 'maintenance', title: '관리비', amount: '₩68,000', due: '매월 08일', state: '변동', note: '냉난방 사용량 반영' },
  { id: 'gas', title: '가스 / 전기', amount: '₩52,000', due: '매월 10일', state: '변동', note: '절약 팁 보기' },
  { id: 'mobile', title: '통신비 / 인터넷', amount: '₩39,000', due: '매월 15일', state: '고정비', note: '알뜰 요금제 비교' }
];

const helpScenarios = {
  admin: {
    title: '행정 / 생활 제도',
    audience: '첫 자취생 · 외국인 유학생',
    summary: '전입신고, 확정일자, 관리비 납부, 분리수거 같은 생활 제도를 단계별로 안내합니다.',
    steps: [
      '현재 거주 형태와 주소를 입력한다.',
      '해야 할 일 목록을 우선순위(오늘 / 이번 주 / 이번 달)로 분류한다.',
      '각 항목별 준비물, 방문 장소, 온라인 링크, 주의사항을 확인한다.'
    ],
    checklist: ['신분증 또는 외국인등록증', '임대차계약서', '거주지 주소', '관리실/집주인 연락처'],
    template: '안녕하세요. 새로 입주한 세입자입니다. 관리비 납부 방식과 분리수거 규칙을 안내받고 싶습니다. 가능하신 시간에 문자로 알려주실 수 있을까요?',
    nearby: ['주민센터 / 행정복지센터', '학교 국제처', '관리실', '생활관/기숙사 행정실'],
    result: '정보를 여러 곳에서 찾는 대신, 생활 제도를 하나의 순서도로 묶어주는 것이 핵심입니다.'
  },
  repair: {
    title: '집수리 / 고장 대응',
    audience: '20대 남녀 자취생',
    summary: '전등, 수도, 배수구, 도어락 문제를 발견했을 때 누구에게 어떤 말로 요청할지 도와줍니다.',
    steps: [
      '문제 유형을 선택하고 사진 또는 증상을 기록한다.',
      '집주인/관리실/수리업체 중 누구에게 연락해야 하는지 분기한다.',
      '복붙 가능한 요청 문구와 예상 비용 체크리스트를 제공한다.'
    ],
    checklist: ['문제 사진 1~2장', '발생 시간', '증상 설명', '계약서상 수리 책임 조항'],
    template: '안녕하세요. 현재 집에서 [전등/수도/배수구] 문제로 불편을 겪고 있습니다. 사진과 함께 증상을 보내드립니다. 확인 후 수리 가능 시간과 진행 방법을 알려주실 수 있을까요?',
    nearby: ['관리실', '집주인', '지역 수리 파트너', '학교 생활 민원 창구'],
    result: '문제 자체보다 연락 자체가 부담스러운 사용자가 많기 때문에, 템플릿과 분기 안내가 중요합니다.'
  },
  medical: {
    title: '아플 때 / 응급 판단',
    audience: '20대 여성 · 독거노인',
    summary: '증상 강도에 따라 병원·약국·119 중 무엇을 먼저 해야 하는지 빠르게 판단합니다.',
    steps: [
      '증상을 경증 / 중간 / 응급으로 먼저 분류한다.',
      '현재 시간과 이동 가능 여부를 확인한다.',
      '전화, 채팅, 보호자 공유 중 가장 빠른 행동을 추천한다.'
    ],
    checklist: ['현재 증상', '복용 중인 약', '가까운 병원/약국', '보호자 연락처'],
    template: '현재 [열/복통/어지럼증]이 있고 혼자 있어서 판단이 어렵습니다. 가까운 진료 가능 병원이나 약국을 안내받고 싶어요.',
    nearby: ['24시간 약국', '응급실', '지역 병원', '보호자/친구'],
    result: '정확한 정보만으로는 부족하고, 혼자 판단하는 부담을 줄여주는 흐름 설계가 필요합니다.'
  },
  delivery: {
    title: '배달 / 주소 / 기사 연락',
    audience: '외국인 유학생',
    summary: '한국어 메뉴, 옵션, 기사님 연락, 주소 입력 방식, 고객센터 흐름을 이해하기 쉽게 바꿔줍니다.',
    steps: [
      '선호 언어를 선택하고 자주 가는 주소를 저장한다.',
      '주문 단계에서 복잡한 옵션을 쉬운 표현으로 다시 보여준다.',
      '기사님께 보낼 메시지를 번역/복사하고 정확한 ETA와 문의 흐름을 설명한다.'
    ],
    checklist: ['건물명 + 상세주소', '공동현관 출입 방식', '문 앞 요청 문구', '결제 수단'],
    template: '안녕하세요. 한국어가 조금 서툴러서 문자로 부탁드립니다. 문 앞에 두고 가 주세요. 건물 비밀번호는 [0000]입니다. 감사합니다.',
    nearby: ['배달앱 고객센터', '국제학생 상담센터', '기숙사/관리실', '학교 주변 음식점'],
    result: '단순 번역보다도 한국식 주문 흐름과 맥락을 함께 설명해 주는 것이 핵심입니다.'
  },
  safety: {
    title: '야간 귀가 / 주거 안전',
    audience: '20대 여성 · 독거노인',
    summary: '안심 귀가, 방문자 대응, 문 앞 택배, 원터치 구조 요청을 한 화면에서 처리합니다.',
    steps: [
      '안전이 필요한 상황(야간 귀가 / 방문자 / 이상 소리 / 위급 상황)을 선택한다.',
      '즉시 행동할 버튼을 2개만 보여준다.',
      '필요하면 보호자/친구/복지사에게 현재 상태를 공유한다.'
    ],
    checklist: ['신뢰 연락처 3명', '관리실/경비실', '현관 비밀번호', '귀가 예상 시간'],
    template: '지금 혼자 있고 조금 불안합니다. [현재 위치/상황]이고, 10분 뒤 다시 연락드릴게요. 답이 없으면 확인 부탁드립니다.',
    nearby: ['보호자·친구', '관리실·경비실', '112/119', '복지관·돌봄센터'],
    result: '정보 제공을 넘어 현재 상태 공유와 후속 확인까지 묶어줘야 합니다.'
  }
};

const translations = {
  ko: {
    label: '한국어',
    context: [
      'ETA는 정확한 도착 약속보다 “대략적인 진행 상황”인 경우가 많아요.',
      '기사님이 전화하는 이유는 주소 확인, 공동현관 출입, 문 앞 요청 확인 때문인 경우가 많아요.',
      '“문 앞”과 “직접 전달” 옵션은 건물 구조에 따라 다르게 작동할 수 있어요.'
    ]
  },
  en: {
    label: 'English',
    context: [
      'ETA often means an estimated progress status rather than an exact promise.',
      'Drivers usually call for address confirmation, gate entry, or handoff preference.',
      'Door delivery options can vary depending on the building and security rules.'
    ]
  },
  ru: {
    label: 'Русский',
    context: [
      'ETA обычно означает примерный статус доставки, а не точное обещанное время.',
      'Курьер обычно звонит, чтобы уточнить адрес, вход в подъезд или способ передачи.',
      'Опции “оставить у двери” и “передать лично” могут работать по-разному в зависимости от здания.'
    ]
  }
};

const phraseCards = [
  {
    id: 'door',
    label: '문 앞 요청',
    ko: '문 앞에 두고 가 주세요.',
    translated: {
      ko: '문 앞에 두고 가 주세요.',
      en: 'Please leave it at the door.',
      ru: 'Пожалуйста, оставьте у двери.'
    },
    context: '배달 수령 방식이 헷갈릴 때 전화 대신 문자로 전달하기 좋은 문장'
  },
  {
    id: 'text',
    label: '전화 회피',
    ko: '전화보다 문자 부탁드립니다.',
    translated: {
      ko: '전화보다 문자 부탁드립니다.',
      en: 'Please text me instead of calling.',
      ru: 'Пожалуйста, напишите сообщение вместо звонка.'
    },
    context: '한국어 통화가 부담스러울 때 기사님께 의사소통 방식을 먼저 제안'
  },
  {
    id: 'gate',
    label: '공동현관 안내',
    ko: '건물 비밀번호는 0000입니다.',
    translated: {
      ko: '건물 비밀번호는 0000입니다.',
      en: 'The building password is 0000.',
      ru: 'Пароль от входа в здание: 0000.'
    },
    context: '공동현관 출입이 필요한 건물에서 주소 오류나 재전화 가능성을 줄임'
  },
  {
    id: 'eta',
    label: 'ETA 문의',
    ko: '지금 어디쯤 오고 있나요?',
    translated: {
      ko: '지금 어디쯤 오고 있나요?',
      en: 'How long will it take to arrive?',
      ru: 'Сколько примерно осталось до прибытия?'
    },
    context: '도착 예정 시간이 바뀌었을 때 진행 상황을 부드럽게 확인'
  }
];

const roadmap = [
  {
    phase: '기본 생활',
    goal: '흩어진 생활 정보를 한 화면에서 정리한다.',
    features: ['첫 자취 체크리스트', '생활비/공과금 카드', '기본 도움 요청 템플릿', '외국인 배달 가이드'],
    limit: '개별 기능은 있지만, 서로 연결되지 않아 “지금 당장 무엇을 해야 하는지”까지는 못 끌어준다.'
  },
  {
    phase: '상황 대응',
    goal: '상황 판단, 행동 추천, 연락 연결, 후속 관리까지 이어지는 흐름형 플랫폼으로 확장한다.',
    features: ['페르소나별 대시보드', '지역 정보 + 근처 연결', '안전 센터', '글로벌 모드', '케어 모드', '활동 이력'],
    limit: '처음에는 검증된 지역 정보와 연락처 큐레이션을 중심으로 빠르게 안내한다.'
  },
  {
    phase: '지역 연결',
    goal: '학교/지자체/복지기관/관리실/병원/수리 파트너를 연결한 생활 안전 생태계로 발전한다.',
    features: ['실시간 파트너 연동', 'PWA 푸시 알림', '운영 관리자 대시보드', '데이터 기반 정책 리포트'],
    limit: '제도 연동, 개인정보 보호, 운영 파트너 확보가 선행되어야 한다.'
  }
];

const moduleCatalog = [
  { view: 'dashboard', label: '오늘 홈', always: true },
  { view: 'onboarding', label: '정착 체크', personas: ['junho', 'seoyeon', 'jenny'] },
  { view: 'life', label: '생활 관리', personas: ['junho', 'seoyeon'] },
  { view: 'help', label: '도움 요청', personas: ['junho', 'seoyeon', 'jenny'] },
  { view: 'safety', label: '안전 센터', personas: ['seoyeon', 'jeongsuk'] },
  { view: 'global', label: '글로벌 모드', personas: ['jenny'] },
  { view: 'care', label: '케어 모드', personas: ['jeongsuk'] },
  { view: 'activity', label: '활동 이력', always: true },
  { view: 'roadmap', label: '서비스 구조', always: true }
];

const preferredViews = {
  junho: 'onboarding',
  seoyeon: 'safety',
  jenny: 'global',
  jeongsuk: 'care'
};

const personaQuickActions = {
  junho: [
    { view: 'onboarding', label: '정착 체크' },
    { view: 'life', label: '생활비 관리' },
    { view: 'help', label: '수리 요청' }
  ],
  seoyeon: [
    { view: 'safety', label: '안전 센터' },
    { view: 'help', label: '병원·수리 연결' },
    { view: 'onboarding', label: '도움망 저장' }
  ],
  jenny: [
    { view: 'global', label: '번역 문구' },
    { view: 'help', label: '생활 제도 안내' },
    { view: 'onboarding', label: '정착 설정' }
  ],
  jeongsuk: [
    { view: 'care', label: '큰 버튼 모드' },
    { view: 'safety', label: '119·보호자' },
    { view: 'activity', label: '안부 이력' }
  ]
};

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : fallback;
  } catch (error) {
    localStorage.removeItem(key);
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function savedPersona() {
  const personaId = localStorage.getItem('honjaonPersona');
  if (personaId === 'wooho') return 'jenny';
  return personas[personaId] ? personaId : 'junho';
}

const state = {
  persona: savedPersona(),
  view: 'dashboard',
  scenario: 'admin',
  language: 'ru',
  timerRunning: false,
  remainingSeconds: 30 * 60,
  timerId: null,
  checklist: loadJSON('honjaonChecklist', {}),
  activities: loadJSON('honjaonActivities', [])
};

const app = document.getElementById('app');
const personaGrid = document.getElementById('personaGrid');
const appNav = document.getElementById('appNav');
const toast = document.getElementById('toast');

function activeModulesFor(personaId = state.persona) {
  return moduleCatalog.filter(module => module.always || module.personas.includes(personaId));
}

function isViewAvailable(view, personaId = state.persona) {
  return activeModulesFor(personaId).some(module => module.view === view);
}

function moduleLabel(view) {
  const module = moduleCatalog.find(item => item.view === view);
  return module ? module.label : view;
}

function preferredViewFor(personaId) {
  return preferredViews[personaId] || 'dashboard';
}

function renderNav() {
  appNav.innerHTML = activeModulesFor().map(module => `
    <button class="nav-chip ${state.view === module.view ? 'active' : ''}" data-view="${module.view}">${module.label}</button>
  `).join('');

  appNav.querySelectorAll('.nav-chip').forEach(chip => {
    chip.addEventListener('click', () => setView(chip.dataset.view));
  });

  const activeChip = appNav.querySelector('.nav-chip.active');
  if (activeChip) {
    window.requestAnimationFrame(() => {
      const targetLeft = activeChip.offsetLeft - (appNav.clientWidth - activeChip.clientWidth) / 2;
      appNav.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
    });
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 1800);
}

function timeLabel() {
  return new Intl.DateTimeFormat('ko-KR', {
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date());
}

function addActivity(type, title, detail, actionView = null, actionText = null) {
  const persona = personas[state.persona];
  const item = {
    id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    type,
    title,
    detail,
    actionView,
    actionText,
    personaId: state.persona,
    personaName: persona ? persona.name : '사용자',
    time: timeLabel()
  };
  state.activities = [item, ...state.activities].slice(0, 16);
  saveJSON('honjaonActivities', state.activities);
}

function activityLabel(type) {
  const labels = {
    checklist: '체크리스트',
    copy: '문구 복사',
    help: '도움 요청',
    safety: '안전',
    care: '케어',
    persona: '모드 전환'
  };
  return labels[type] || '활동';
}

function copyText(text, label = '문구') {
  const handleSuccess = () => {
    showToast('복사되었습니다.');
    addActivity('copy', `${label} 복사`, text, 'activity', '이력 보기');
  };
  const handleFailure = () => showToast('복사에 실패했습니다.');

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(handleSuccess).catch(handleFailure);
    return;
  }
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    handleSuccess();
  } catch (e) {
    handleFailure();
  }
  document.body.removeChild(textArea);
}

function filteredTasks(personaId) {
  return onboardingTasks.filter(task => task.persona.includes(personaId));
}

function completedCount(personaId) {
  return filteredTasks(personaId).filter(task => state.checklist[task.id]).length;
}

function progressRatio(personaId) {
  const tasks = filteredTasks(personaId);
  if (!tasks.length) return 0;
  return Math.round((completedCount(personaId) / tasks.length) * 100);
}

function setPersona(personaId) {
  state.persona = personaId;
  state.view = preferredViewFor(personaId);
  if (personaId === 'jenny') state.language = 'ru';
  localStorage.setItem('honjaonPersona', personaId);
  addActivity('persona', `${personas[personaId].name} 모드 전환`, personas[personaId].moduleHint, 'dashboard', '홈 보기');
  renderNav();
  renderPersonaGrid();
  renderView();
  showToast(`${personas[personaId].name} 모드로 전환되었습니다.`);
}

function setView(view) {
  const nextView = isViewAvailable(view) ? view : preferredViewFor(state.persona);
  if (nextView !== view) {
    showToast(`${personas[state.persona].name} 모드에서는 ${moduleLabel(nextView)}을 먼저 보여드립니다.`);
  }
  state.view = nextView;
  renderNav();
  renderView();
  const appTop = app.getBoundingClientRect().top + window.scrollY;
  const isMobile = window.matchMedia('(max-width: 720px)').matches;
  const offset = isMobile ? 12 : 18;
  const targetTop = Math.max(0, appTop - offset);
  if (isMobile) {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: targetTop, behavior: 'auto' });
    window.requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    });
    return;
  }
  window.scrollTo({ top: targetTop, behavior: 'smooth' });
}

function renderPersonaGrid() {
  personaGrid.innerHTML = Object.values(personas).map(persona => `
    <article class="persona-card ${state.persona === persona.id ? 'selected' : ''}">
      <div class="persona-photo-wrap">
        <img class="persona-photo" src="${persona.photo}" alt="${persona.name} 페르소나 사진" loading="lazy" />
      </div>
      <div class="persona-top">
        <div class="persona-avatar" style="background:${persona.color}">${persona.avatar}</div>
        <span class="persona-chip">${state.persona === persona.id ? '현재 선택' : '클릭해서 전환'}</span>
      </div>
      <h3>${persona.name}</h3>
      <p class="description">${persona.title}</p>
      <p class="persona-quote">“${persona.quote}”</p>
      <div class="persona-meta">${persona.tags.map(tag => `<span class="persona-pill">${tag}</span>`).join('')}</div>
      <p class="persona-footer"><strong>핵심 모듈</strong> · ${persona.moduleHint}</p>
      <button data-persona="${persona.id}">${state.persona === persona.id ? '선택됨' : '이 페르소나로 보기'}</button>
    </article>
  `).join('');

  personaGrid.querySelectorAll('[data-persona]').forEach(btn => {
    btn.addEventListener('click', () => setPersona(btn.dataset.persona));
  });
}

function dashboardView() {
  const persona = personas[state.persona];
  const tasks = filteredTasks(state.persona).slice(0, 3);
  const ratio = progressRatio(state.persona);
  const personaModules = activeModulesFor().filter(module => !module.always);
  const quickActions = personaQuickActions[state.persona] || personaModules.slice(0, 3);
  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">개인화 대시보드</span>
        <div class="dashboard-profile">
          <img src="${persona.photo}" alt="${persona.name} 페르소나 사진" />
          <div>
            <h2 class="view-title">${persona.name}에게 맞춰진 오늘의 홈</h2>
            <p class="description">${persona.summary}</p>
          </div>
        </div>
        <div class="mode-strip">
          <strong>${persona.name} 특화 모드</strong>
          <div class="mode-module-list">
            ${personaModules.map(module => `<span>${module.label}</span>`).join('')}
          </div>
        </div>
        <div class="grid-3">
          <div class="stat-card">
            <small>온보딩 진행률</small>
            <strong>${ratio}%</strong>
            <p class="helper-text">${completedCount(state.persona)} / ${filteredTasks(state.persona).length} 완료</p>
          </div>
          <div class="stat-card">
            <small>핵심 우선순위</small>
            <strong>${persona.priorities[0]}</strong>
            <p class="helper-text">가장 먼저 해결해야 할 항목</p>
          </div>
          <div class="stat-card">
            <small>바로 가기</small>
            <strong>${persona.quickAction}</strong>
            <p class="helper-text">상황별 CTA가 홈에 노출됨</p>
          </div>
        </div>
        <div class="note-box" style="margin-top:16px;">
          <strong>지금 먼저 챙길 점</strong>
          <p class="helper-text">${persona.risk}</p>
        </div>
        <div class="quick-action-row" style="margin-top:16px;">
          ${quickActions.map(action => `<button class="quick-btn" data-go-view="${action.view}">${action.label}</button>`).join('')}
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">오늘의 추천 흐름</span>
        <h3>지금 당장 해야 할 일 3가지</h3>
        <div class="list">
          ${tasks.map((task, index) => `
            <div class="list-item">
              <div class="emoji">${['1️⃣', '2️⃣', '3️⃣'][index]}</div>
              <div>
                <strong>${task.title}</strong>
                <p class="helper-text">${task.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="mini-phone">
          <div class="phone-notch"></div>
          <div class="phone-card">
            <strong>${persona.name} 홈</strong>
            <div class="phone-line" style="width:75%"></div>
            <div class="phone-line" style="width:52%"></div>
            <div class="phone-pill">${persona.quickAction}</div>
          </div>
          <div class="phone-card">
            ${personaModules.slice(0, 3).map(module => `<div class="phone-chip">${module.label}</div>`).join('')}
          </div>
          <div class="phone-card">
            <div class="phone-bar"></div>
            <div class="phone-bar" style="width:${Math.max(20, ratio)}%"></div>
            <small>이 홈은 선택한 페르소나에 맞춰 필요한 모듈만 보여줍니다.</small>
          </div>
        </div>
      </article>
    </section>
    <section class="grid-3">
      <article class="app-card">
        <span class="kicker">핵심 모듈</span>
        <h3>Start Pack</h3>
        <ul class="bullet-list">
          <li>입주 첫 주 우선순위 자동 정렬</li>
          <li>준비물 / 링크 / 연락처 묶음 제공</li>
          <li>행정·생활 규칙을 쉬운 말로 설명</li>
        </ul>
      </article>
      <article class="app-card">
        <span class="kicker">핵심 모듈</span>
        <h3>Help Route</h3>
        <ul class="bullet-list">
          <li>증상 / 문제 / 상황 선택만으로 분기</li>
          <li>누구에게 연락할지 자동 제안</li>
          <li>복붙 가능한 메시지 템플릿 제공</li>
        </ul>
      </article>
      <article class="app-card">
        <span class="kicker">핵심 모듈</span>
        <h3>Safety Net</h3>
        <ul class="bullet-list">
          <li>2탭 안에 구조 요청</li>
          <li>귀가 확인 타이머 / 안부 체크</li>
          <li>고령자 큰 글씨 / 음성형 UI 지원</li>
        </ul>
      </article>
    </section>
  `;
}

function onboardingView() {
  const persona = personas[state.persona];
  const tasks = filteredTasks(state.persona);
  const ratio = progressRatio(state.persona);
  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">Start Pack</span>
        <h2 class="view-title">${persona.name}의 초기 정착 체크리스트</h2>
        <p class="description">처음 자취를 시작하거나 정착 초기일수록 “정보가 흩어져 있다”는 문제가 커집니다. 체크리스트는 사용자 유형과 거주 단계에 맞춰 필요한 항목만 먼저 보여줍니다.</p>
        <div class="progress-wrap">
          <div style="min-width:100px;"><strong>${ratio}% 완료</strong></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${ratio}%"></div></div>
        </div>
        <div class="check-group">
          ${tasks.map(task => `
            <label class="check-card">
              <input type="checkbox" data-check="${task.id}" ${state.checklist[task.id] ? 'checked' : ''} />
              <span class="check-label">
                <strong>${task.title}</strong>
                <small>${task.desc}</small>
              </span>
            </label>
          `).join('')}
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">정착 설정</span>
        <h3>처음 설정 흐름</h3>
        <div class="timeline">
          <div class="timeline-item">
            <strong>1. 사용자 유형 판별</strong>
            <p>첫 자취 / 사회초년생 / 유학생 / 고령 1인가구를 선택하고 초기 상태를 저장</p>
          </div>
          <div class="timeline-item">
            <strong>2. 지역/주거 정보 설정</strong>
            <p>원룸, 오피스텔, 임대아파트, 기숙사 여부와 지역 규칙을 연결</p>
          </div>
          <div class="timeline-item">
            <strong>3. 도움망 연결</strong>
            <p>신뢰 연락처, 관리실, 주민센터, 학교 국제처, 복지사 등을 저장</p>
          </div>
          <div class="timeline-item">
            <strong>4. 알림/가이드 활성화</strong>
            <p>납부일, 안부 체크, 귀가 확인, 언어 설정, 큰 글씨 설정을 마무리</p>
          </div>
        </div>
        <div class="highlight-box" style="margin-top:16px;">
          <strong>연결되는 기능</strong>
          <ul class="bullet-list">
            <li>단순 목록이 아니라 사용자 유형과 거주 상태에 따라 항목 자동 재배치</li>
            <li>지역 규칙·도움 연락처·위기 대응과 연결</li>
            <li>완료 이후에도 대시보드·도움 요청·안전 센터로 이어지는 구조</li>
          </ul>
        </div>
      </article>
    </section>
  `;
}

function lifeView() {
  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">생활 관리</span>
        <h2 class="view-title">고정비·생활비·루틴을 한 화면에서</h2>
        <p class="description">결제일, 알림, 절약 팁, 루틴 회고를 한 화면에서 이어 보며 생활 운영 리듬을 잡도록 돕습니다.</p>
        <div class="grid-2">
          <div class="bill-card">
            <small>이번 달 예상 고정비</small>
            <div class="bill-total">₩509,000</div>
            <p class="helper-text">월세 + 관리비 + 공과금 + 통신비 기준</p>
          </div>
          <div class="bill-card">
            <small>리마인더 상태</small>
            <div class="bill-total">3건 예정</div>
            <p class="helper-text">이번 주 안에 확인해야 할 항목</p>
          </div>
        </div>
        <div class="list">
          ${billItems.map(item => `
            <div class="bill-item">
              <div>
                <strong>${item.title}</strong>
                <span>${item.due} · ${item.state}</span>
              </div>
              <div style="text-align:right;">
                <div class="amount">${item.amount}</div>
                <span>${item.note}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">루틴 피드백</span>
        <h3>생활 운영 리포트</h3>
        <div class="grid-2">
          <div class="surface-card">
            <strong>집안일 누락</strong>
            <small>배수구 청소 / 분리수거 / 세탁</small>
          </div>
          <div class="surface-card">
            <strong>절약 팁</strong>
            <small>가스 사용량이 높아요 · 난방/온수 체크</small>
          </div>
        </div>
        <div class="table-like" style="margin-top:14px;">
          <div class="table-row header">
            <div>항목</div>
            <div>지원 방식</div>
            <div>결과</div>
          </div>
          <div class="table-row">
            <div>공과금</div>
            <div>납부일 + 쉬운 설명 + 자동 리마인더</div>
            <div>미납 방지</div>
          </div>
          <div class="table-row">
            <div>집안일</div>
            <div>주간 루틴 카드 + 완료 체크</div>
            <div>생활 리듬 유지</div>
          </div>
          <div class="table-row">
            <div>절약</div>
            <div>냉난방 / 에너지 팁 큐레이션</div>
            <div>비용 예측 가능</div>
          </div>
        </div>
      </article>
    </section>
  `;
}

function helpView() {
  const scenario = helpScenarios[state.scenario];
  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">Help Route</span>
        <h2 class="view-title">문제가 생기면, 누구에게 어떻게 요청할까?</h2>
        <p class="description">사용자는 문제 자체보다도 <strong>누구에게, 어떤 말로, 어떤 순서로</strong> 요청해야 하는지에서 막히는 경우가 많습니다. 혼자ON은 이 과정을 3스텝으로 줄입니다.</p>
        <div class="segment-row">
          ${Object.entries(helpScenarios).map(([key, value]) => `
            <button class="segment-btn ${state.scenario === key ? 'active' : ''}" data-scenario="${key}">
              <strong>${value.title}</strong><br />
              <small>${value.audience}</small>
            </button>
          `).join('')}
        </div>
        <div class="issue-card" style="margin-top:16px;">
          <div class="flex-between">
            <div>
              <h3>${scenario.title}</h3>
              <p class="helper-text">${scenario.summary}</p>
            </div>
            <span class="status-pill info">${scenario.audience}</span>
          </div>
          <div class="timeline" style="margin-top:14px;">
            ${scenario.steps.map(step => `
              <div class="timeline-item">
                <strong>${step}</strong>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">실행 패키지</span>
        <h3>복붙 가능한 요청 템플릿</h3>
        <div class="template-card">
          <div class="template-body">${scenario.template}</div>
          <button class="copy-btn" data-copy="${encodeURIComponent(scenario.template)}" data-copy-label="${encodeURIComponent(scenario.title)}" style="margin-top:12px;">문구 복사</button>
        </div>
        <div class="grid-2" style="margin-top:14px;">
          <div class="helper-card">
            <strong>준비물</strong>
            <ul class="bullet-list">
              ${scenario.checklist.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="helper-card">
            <strong>바로 연결할 곳</strong>
            <ul class="bullet-list">
              ${scenario.nearby.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="highlight-box" style="margin-top:14px;">
          <strong>서비스 기회</strong>
          <p class="helper-text">${scenario.result}</p>
        </div>
      </article>
    </section>
  `;
}

function safetyView() {
  const minutes = Math.floor(state.remainingSeconds / 60);
  const seconds = String(state.remainingSeconds % 60).padStart(2, '0');
  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">Safety Net</span>
        <h2 class="view-title">2탭 안에 도움 요청이 가능한 안전 센터</h2>
        <p class="description">야간 귀가, 방문자 응대, 갑작스러운 통증, 외로움까지 모두 “혼자 판단해야 하는 순간”을 줄이는 모듈입니다.</p>
        <div class="safety-timer">
          <div>
            <small>안심 귀가 타이머</small>
            <div class="timer-number">${minutes}:${seconds}</div>
            <p class="helper-text">시간이 지나면 신뢰 연락처에 체크 요청 알림을 보냄</p>
          </div>
          <button class="action-btn" id="timerBtn">${state.timerRunning ? '타이머 중지' : '30분 시작'}</button>
        </div>
        <div class="quick-action-row" style="margin-top:16px;">
          <button class="quick-btn" data-emergency="119">119 연결</button>
          <button class="quick-btn" data-emergency="guardian">보호자 공유</button>
          <button class="quick-btn" data-emergency="manager">관리실 연락</button>
        </div>
        <div class="list" style="margin-top:16px;">
          <div class="list-item">
            <div class="safe-icon">🚶</div>
            <div><strong>안심 귀가</strong><p class="helper-text">야간 이동 중 예상 도착 시간과 현재 상태를 공유</p></div>
          </div>
          <div class="list-item">
            <div class="safe-icon">🚪</div>
            <div><strong>방문자 대응</strong><p class="helper-text">문 앞 택배 / 수리기사 / 낯선 방문자 상황별 문구 제공</p></div>
          </div>
          <div class="list-item">
            <div class="safe-icon">🆘</div>
            <div><strong>위급상황</strong><p class="helper-text">119, 보호자, 복지사, 친구에게 같은 정보를 한번에 전달</p></div>
          </div>
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">신뢰 연락망</span>
        <h3>연결되어 있다는 감각을 만드는 UI</h3>
        <div class="contact-grid">
          <div class="contact-card">
            <span class="status-pill safe">1순위</span>
            <strong>엄마</strong>
            <p class="helper-text">통화 · 문자 · 카카오톡</p>
            <button class="contact-btn secondary" data-copy="${encodeURIComponent('지금 조금 불안해서 연락드려요. 10분 뒤 다시 확인 부탁드릴게요.')}" data-copy-label="${encodeURIComponent('안부 템플릿')}">안부 템플릿 복사</button>
          </div>
          <div class="contact-card">
            <span class="status-pill info">2순위</span>
            <strong>친구 / 룸메이트</strong>
            <p class="helper-text">귀가 확인 · 응급 동행</p>
            <button class="contact-btn secondary" data-copy="${encodeURIComponent('지금 몸이 조금 안 좋고 혼자라서 같이 병원 가줄 수 있는지 물어보고 싶어.')}" data-copy-label="${encodeURIComponent('도움 요청')}">도움 요청 복사</button>
          </div>
          <div class="contact-card">
            <span class="status-pill warn">3순위</span>
            <strong>관리실 / 경비실</strong>
            <p class="helper-text">주거 문제 · 출입 지원</p>
            <button class="contact-btn secondary" data-copy="${encodeURIComponent('안녕하세요. 혼자 거주 중인데 현재 도움이 필요한 상황입니다. 연락 부탁드립니다.')}" data-copy-label="${encodeURIComponent('관리실 문구')}">관리실 문구 복사</button>
          </div>
          <div class="contact-card">
            <span class="status-pill urgent">4순위</span>
            <strong>119 / 112</strong>
            <p class="helper-text">응급 / 범죄 위험</p>
            <button class="contact-btn primary" data-emergency="119">긴급 버튼</button>
          </div>
        </div>
      </article>
    </section>
  `;
}

function globalView() {
  const lang = translations[state.language];
  const persona = personas[state.persona];
  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">Global Mode</span>
        <h2 class="view-title">${persona.name}를 위한 다국어 배달·생활 지원</h2>
        <p class="description">사용자가 이해하기 쉬운 언어로 먼저 확인하고, 기사님이나 관리실에 보낼 수 있는 <strong>한국어 전달문</strong>으로 바꿔줍니다.</p>
        <div class="segment-row">
          ${Object.entries(translations).map(([key, value]) => `
            <button class="segment-btn ${state.language === key ? 'active' : ''}" data-lang="${key}">
              <strong>${value.label}</strong><br />
              <small>${key.toUpperCase()}</small>
            </button>
          `).join('')}
        </div>
        <div class="phrase-grid" style="margin-top:16px;">
          ${phraseCards.map(card => `
            <div class="phrase-card">
              <div class="screen-header">
                <strong>${card.label}</strong>
                <button class="copy-btn" data-copy="${encodeURIComponent(card.ko)}" data-copy-label="${encodeURIComponent(card.label)}">한국어 전달문 복사</button>
              </div>
              <div class="phrase-pair">
                <span>${lang.label} 원문</span>
                <p>${card.translated[state.language]}</p>
              </div>
              <div class="phrase-pair translated">
                <span>한국어 번역·전달문</span>
                <p>${card.ko}</p>
              </div>
              <p class="helper-text">${card.context}</p>
            </div>
          `).join('')}
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">Context Guide</span>
        <h3>번역만으로 해결되지 않는 부분</h3>
        <div class="list">
          ${lang.context.map(item => `
            <div class="list-item">
              <div class="emoji">💬</div>
              <div><p class="helper-text">${item}</p></div>
            </div>
          `).join('')}
        </div>
        <div class="preview-grid" style="margin-top:16px;">
          <div class="preview-screen">
            <div class="screen-header">
              <strong>주문 전</strong>
              <span class="status-pill info">다국어 메뉴 설명</span>
            </div>
            <div class="phone-card">
              <div class="phone-chip">Mild / Less spicy</div>
              <div class="phone-chip">Door delivery</div>
              <div class="phone-chip">Building note</div>
            </div>
          </div>
          <div class="preview-screen">
            <div class="screen-header">
              <strong>주문 후</strong>
              <span class="status-pill safe">ETA + 기사 메시지</span>
            </div>
            <div class="phone-card">
              <div class="phone-line" style="width:78%"></div>
              <div class="phone-line" style="width:62%"></div>
              <div class="phone-pill">Message Driver</div>
            </div>
          </div>
        </div>
      </article>
    </section>
  `;
}

function careView() {
  return `
    <section class="view-layout care-layout">
      <article class="app-card care-hero">
        <span class="kicker">Care Mode</span>
        <h2 class="view-title">도움이 필요하신가요?</h2>
        <p class="description">고령자 모드는 정보를 많이 보여주기보다, 바로 누를 수 있는 큰 버튼과 현재 상태 확인을 우선합니다.</p>
        <div class="care-action-grid">
          <button class="care-action primary" data-emergency="guardian">
            가족에게 연락
            <span>상황을 문자로 공유합니다</span>
          </button>
          <button class="care-action emergency" data-emergency="119">
            119 연결
            <span>응급 상황일 때 바로 시작</span>
          </button>
          <button class="care-action" data-emergency="caregiver">
            복지사 호출
            <span>돌봄 담당자에게 알립니다</span>
          </button>
          <button class="care-action" data-care-checkin="ok">
            괜찮아요
            <span>오늘 안부 체크를 기록합니다</span>
          </button>
        </div>
        <div class="care-status-panel">
          <div>
            <span class="status-pill safe">오늘 상태</span>
            <strong>아직 안부 체크 전</strong>
            <p class="helper-text">버튼을 누르면 활동 이력에 보호자 공유용 로그가 남습니다.</p>
          </div>
          <button class="inline-chip" data-go-view="activity">이력 보기</button>
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">Caregiver Link</span>
        <h3>보호자와 이어지는 기능</h3>
        <div class="timeline">
          <div class="timeline-item">
            <strong>정기 안부 체크</strong>
            <p>매일 오전/저녁 “괜찮아요” 버튼을 누르면 보호자에게 상태 로그가 저장됩니다.</p>
          </div>
          <div class="timeline-item">
            <strong>약 복용 / 일정 알림</strong>
            <p>큰 글씨 카드와 음성 안내로 복용 시간을 반복적으로 알려줍니다.</p>
          </div>
          <div class="timeline-item">
            <strong>도움 요청 결과 확인</strong>
            <p>“누가 언제 오는지”를 단순 표시하여 대기 중 불안을 줄입니다.</p>
          </div>
          <div class="timeline-item">
            <strong>사후 안부 확인</strong>
            <p>문제가 해결된 뒤에도 다시 연락할 수 있는 버튼을 남겨 연결감을 유지합니다.</p>
          </div>
        </div>
      </article>
    </section>
  `;
}

function activityView() {
  const completedTasks = onboardingTasks.filter(task => state.checklist[task.id]);
  const copyCount = state.activities.filter(item => item.type === 'copy').length;
  const safetyCount = state.activities.filter(item => item.type === 'safety' || item.type === 'care').length;
  const recentActivities = state.activities.length ? state.activities : [
    {
      id: 'empty',
      type: 'help',
      title: '아직 기록된 활동이 없습니다',
      detail: '체크리스트 완료, 문구 복사, 안전 버튼 실행, 안부 체크를 하면 여기에 후속 관리 이력이 쌓입니다.',
      personaName: personas[state.persona].name,
      time: '대기 중',
      actionView: 'dashboard',
      actionText: '홈 보기'
    }
  ];

  return `
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">Activity Log</span>
        <h2 class="view-title">문제 해결 이후까지 남기는 활동 이력</h2>
        <p class="description">혼자ON은 행동에서 끝나지 않고, 무엇을 했고 다음에 무엇을 이어가야 하는지 기록으로 남깁니다.</p>
        <div class="grid-3">
          <div class="stat-card">
            <small>완료 체크</small>
            <strong>${completedTasks.length}</strong>
            <p class="helper-text">온보딩 / 정착 항목</p>
          </div>
          <div class="stat-card">
            <small>복사한 템플릿</small>
            <strong>${copyCount}</strong>
            <p class="helper-text">도움 요청 / 배달 문구</p>
          </div>
          <div class="stat-card">
            <small>안전·케어 실행</small>
            <strong>${safetyCount}</strong>
            <p class="helper-text">타이머 / 긴급 버튼 / 안부 체크</p>
          </div>
        </div>
        <div class="activity-list">
          ${recentActivities.map(item => `
            <div class="log-item">
              <div class="log-meta">
                <span class="status-pill info">${activityLabel(item.type)}</span>
                <span>${item.time} · ${item.personaName}</span>
              </div>
              <strong>${item.title}</strong>
              <p>${item.detail}</p>
              ${item.actionView ? `<button class="inline-chip" data-go-view="${item.actionView}">${item.actionText || '다시 보기'}</button>` : ''}
            </div>
          `).join('')}
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">Follow-up</span>
        <h3>후속 관리 흐름</h3>
        <div class="timeline">
          <div class="timeline-item">
            <strong>1. 행동 발생</strong>
            <p>체크리스트 완료, 문구 복사, SOS 버튼, 안부 체크 같은 순간을 기록합니다.</p>
          </div>
          <div class="timeline-item">
            <strong>2. 이력 요약</strong>
            <p>사용자와 보호자가 어떤 문제를 처리했는지 한눈에 확인합니다.</p>
          </div>
          <div class="timeline-item">
            <strong>3. 다음 행동 연결</strong>
            <p>다시 체크리스트, 도움 요청, 안전 센터로 돌아갈 수 있게 합니다.</p>
          </div>
        </div>
        <div class="helper-card" style="margin-top:14px;">
          <strong>완료된 정착 항목</strong>
          <ul class="bullet-list">
            ${completedTasks.length ? completedTasks.map(task => `<li>${task.title}</li>`).join('') : '<li>아직 완료된 체크리스트가 없습니다.</li>'}
          </ul>
        </div>
        <div class="quick-action-row" style="margin-top:14px;">
          <button class="quick-btn" data-go-view="onboarding">체크리스트</button>
          <button class="quick-btn" data-go-view="help">도움 요청</button>
          <button class="quick-btn" data-go-view="safety">안전 센터</button>
        </div>
      </article>
    </section>
  `;
}

function roadmapView() {
  return `
    <section class="grid-3">
      ${roadmap.map(item => `
        <article class="app-card">
          <span class="kicker">${item.phase}</span>
          <h3>${item.goal}</h3>
          <ul class="module-list">
            ${item.features.map(feature => `<li>${feature}</li>`).join('')}
          </ul>
          <div class="highlight-box" style="margin-top:14px;">
            <strong>운영 포인트</strong>
            <p class="helper-text">${item.limit}</p>
          </div>
        </article>
      `).join('')}
    </section>
    <section class="view-layout">
      <article class="app-card">
        <span class="kicker">서비스 상세 구조</span>
        <h2 class="view-title">서비스 구조</h2>
        <div class="timeline-grid">
          <div class="timeline-item">
            <strong>① 적응형 홈</strong>
            <p>페르소나, 거주 단계, 최근 이슈에 따라 첫 화면 카드가 달라집니다.</p>
          </div>
          <div class="timeline-item">
            <strong>② 지역 정보 레이어</strong>
            <p>분리수거, 병원, 약국, 주민센터, 관리실 등 지역 자원을 묶습니다.</p>
          </div>
          <div class="timeline-item">
            <strong>③ 실행형 헬프 라우트</strong>
            <p>정보 탐색이 아니라 즉시 행동할 수 있는 템플릿, 연결, 체크리스트를 제공합니다.</p>
          </div>
          <div class="timeline-item">
            <strong>④ 신뢰 기반 안전망</strong>
            <p>안심 귀가, SOS, 안부 체크, 케어 링크로 “혼자 판단해야 하는 순간”을 줄입니다.</p>
          </div>
        </div>
      </article>
      <article class="app-card">
        <span class="kicker">검증 지표</span>
        <h3>확인 지표</h3>
        <div class="grid-2">
          <div class="kpi-item"><small>온보딩 완료율</small><strong>70%+</strong><p>3분 이내 초기 설정 완료</p></div>
          <div class="kpi-item"><small>도움 요청 성공률</small><strong>80%+</strong><p>템플릿 복사 또는 즉시 연결 클릭</p></div>
          <div class="kpi-item"><small>안전 기능 접근</small><strong>2 taps</strong><p>홈 → 안전 센터 → 구조 요청</p></div>
          <div class="kpi-item"><small>외국인 주문 스트레스 감소</small><strong>-30%</strong><p>주문 전/후 설문으로 검증</p></div>
        </div>
      </article>
    </section>
  `;
}

function renderView() {
  document.body.classList.toggle('care-mode-active', state.view === 'care');
  switch (state.view) {
    case 'dashboard':
      app.innerHTML = dashboardView();
      break;
    case 'onboarding':
      app.innerHTML = onboardingView();
      break;
    case 'life':
      app.innerHTML = lifeView();
      break;
    case 'help':
      app.innerHTML = helpView();
      break;
    case 'safety':
      app.innerHTML = safetyView();
      break;
    case 'global':
      app.innerHTML = globalView();
      break;
    case 'care':
      app.innerHTML = careView();
      break;
    case 'activity':
      app.innerHTML = activityView();
      break;
    case 'roadmap':
      app.innerHTML = roadmapView();
      break;
    default:
      app.innerHTML = dashboardView();
      break;
  }
  bindDynamicEvents();
}

function toggleChecklist(id, checked) {
  state.checklist[id] = checked;
  saveJSON('honjaonChecklist', state.checklist);
  const task = onboardingTasks.find(item => item.id === id);
  if (task) {
    addActivity(
      'checklist',
      checked ? '체크리스트 완료' : '체크리스트 미완료로 변경',
      task.title,
      'onboarding',
      '체크리스트 보기'
    );
  }
  renderView();
}

function startTimer() {
  state.timerRunning = true;
  addActivity('safety', '안심 귀가 타이머 시작', '30분 체크 타이머를 실행했습니다.', 'safety', '안전 센터 보기');
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.remainingSeconds -= 1;
    if (state.remainingSeconds <= 0) {
      clearInterval(state.timerId);
      state.timerId = null;
      state.timerRunning = false;
      state.remainingSeconds = 30 * 60;
      addActivity('safety', '안심 귀가 체크 시간 종료', '신뢰 연락처 공유 플로우가 필요한 상태입니다.', 'safety', '안전 센터 보기');
      showToast('안심 귀가 체크 시간이 종료되었습니다. 연락처 공유 플로우를 실행하세요.');
      renderView();
      return;
    }
    const timerNumber = document.querySelector('.timer-number');
    if (timerNumber) {
      const minutes = Math.floor(state.remainingSeconds / 60);
      const seconds = String(state.remainingSeconds % 60).padStart(2, '0');
      timerNumber.textContent = `${minutes}:${seconds}`;
    }
  }, 1000);
}

function stopTimer() {
  state.timerRunning = false;
  clearInterval(state.timerId);
  state.timerId = null;
  state.remainingSeconds = 30 * 60;
  addActivity('safety', '안심 귀가 타이머 중지', '귀가 체크 타이머를 수동으로 종료했습니다.', 'safety', '안전 센터 보기');
  renderView();
}

function bindDynamicEvents() {
  app.querySelectorAll('[data-check]').forEach(input => {
    input.addEventListener('change', e => toggleChecklist(input.dataset.check, e.target.checked));
  });

  app.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const label = btn.dataset.copyLabel ? decodeURIComponent(btn.dataset.copyLabel) : '문구';
      copyText(decodeURIComponent(btn.dataset.copy), label);
    });
  });

  app.querySelectorAll('[data-scenario]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.scenario = btn.dataset.scenario;
      addActivity('help', `${helpScenarios[state.scenario].title} 확인`, helpScenarios[state.scenario].summary, 'help', '도움 요청 보기');
      renderView();
    });
  });

  app.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.language = btn.dataset.lang;
      renderView();
    });
  });

  const timerBtn = document.getElementById('timerBtn');
  if (timerBtn) {
    timerBtn.addEventListener('click', () => {
      if (state.timerRunning) {
        stopTimer();
        showToast('안심 귀가 타이머를 중지했습니다.');
      } else {
        startTimer();
        renderView();
        showToast('안심 귀가 타이머를 시작했습니다.');
      }
    });
  }

  app.querySelectorAll('[data-emergency]').forEach(btn => {
    btn.addEventListener('click', () => {
      const map = {
        '119': '긴급 구조 요청 플로우를 시작합니다.',
        guardian: '보호자 / 신뢰 연락처 공유 플로우를 엽니다.',
        manager: '관리실 / 경비실 연결 플로우를 엽니다.',
        caregiver: '복지사 / 돌봄 담당자 연결 플로우를 엽니다.'
      };
      addActivity('safety', map[btn.dataset.emergency] || '연결 플로우 실행', '긴급 버튼을 눌러 다음 행동을 시작했습니다.', 'activity', '이력 보기');
      showToast(map[btn.dataset.emergency] || '연결 플로우를 실행합니다.');
    });
  });

  app.querySelectorAll('[data-care-checkin]').forEach(btn => {
    btn.addEventListener('click', () => {
      addActivity('care', '안부 체크 완료', '오늘 상태를 괜찮음으로 기록했습니다.', 'activity', '이력 보기');
      showToast('오늘 안부 체크가 기록되었습니다.');
    });
  });

  app.querySelectorAll('[data-go-view]').forEach(btn => {
    btn.addEventListener('click', () => setView(btn.dataset.goView));
  });
}

document.querySelectorAll('[data-go-view]').forEach(btn => {
  btn.addEventListener('click', () => setView(btn.dataset.goView));
});

renderNav();
renderPersonaGrid();
renderView();
