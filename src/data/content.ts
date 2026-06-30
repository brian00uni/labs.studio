// Labs Studio — 포트폴리오 콘텐츠 · 김형윤 (UX Publisher / Frontend Developer)
// 서사: 지금도 새로 만드는 사람 → 레거시도 최신도 다 되는 사람
//      → 그걸 20년간 큰 회사들과 안정적으로 해온 사람 → 같이 일하기 좋은 사람.
// 모든 카피의 수치(스택·기간·역할)는 사실 기준. 과장 금지.

export const nav = {
  brand: 'labs.studio',
  brandMark: 'LABS·STUDIO',
  links: [
    { label: 'Now', href: '#now' },
    { label: 'What I Do', href: '#what' },
    { label: 'Projects', href: '#projects' },
    { label: 'Labs', href: '#labs' },
    { label: 'Contact', href: '#contact' },
  ],
}

// ── 01 HERO ──────────────────────────────────────────────
export const hero = {
  eyebrow: 'UX Publisher · Frontend Developer',
  // 강조 어절(accent)은 앰버로 렌더링됨
  titleLead: '여전히, ',
  titleAccent: '더 나은 화면을',
  titleTail: '만듭니다',
  subtitle:
    '웹 표준과 접근성을 기본으로, 레거시부터 최신 스택까지 — 사용자 경험의 완성을 설계하는 UX 퍼블리셔입니다.',
  primaryCta: { label: '요즘 하는 것', href: '#now' },
  secondaryCta: { label: 'Contact', href: '#contact' },
}

// ── 02 NOW ───────────────────────────────────────────────
export type NowCard = {
  emoji?: string
  title: string
  sub?: string
  desc?: string
  stack?: string[]
  badge?: string
  featured?: boolean
}

export const now: {
  eyebrow: string
  title: string
  body: string
  link?: { label: string; href: string }
  cards: NowCard[]
} = {
  eyebrow: 'NOW · 요즘 하는 것',
  title: '멈춰 있지 않습니다',
  body: '20년차라고 익숙한 것만 하지 않습니다. <br />AI 페어 프로그래밍으로 1인 SaaS 허브 APPRESSO를 직접 기획·설계·개발하고 있습니다. 아래는 현재 개발 중인 앱 서비스들입니다.',
  link: { label: 'APPRESSO 둘러보기', href: 'https://appresso.vercel.app' },
  cards: [
    {
      emoji: '👑',
      title: '가성비대장',
      sub: '소상공인 배달 손익 계산기',
      desc: '메뉴·마진·광고를 한 번에 — 남는 돈이 진짜 실력입니다.',
      stack: ['React', 'Vite', 'TypeScript', 'Supabase', 'Render', 'Vercel', 'AI Pair Programming'],
      badge: '개발 중',
      featured: true,
    },
    {
      emoji: '📊',
      title: '유튜브 분석',
      sub: '채널·영상 데이터 분석',
      desc: '채널·영상 데이터를 등급별로 분석하고 성장 지표를 한눈에.',
      stack: ['React', 'TypeScript', 'Supabase', 'Render', 'AI Pair Programming'],
    },
    {
      emoji: '🔥',
      title: '조회수가 터진 영상',
      sub: '트렌드 발굴',
      desc: '플랫폼별 떡상 영상과 키워드 트렌드를 발굴합니다.',
      stack: ['React', 'TypeScript', 'Render', 'AI Pair Programming'],
    },
    {
      emoji: '🎨',
      title: 'Art Studio',
      sub: 'AI 이미지 생성',
      desc: 'AI로 이미지를 일괄 자동 생성합니다.',
      stack: ['React', 'TypeScript', 'Render', 'AI Pair Programming'],
    },
    {
      emoji: '🎙️',
      title: 'TTS Studio',
      sub: 'AI 음성 합성',
      desc: 'AI 음성으로 콘텐츠를 만듭니다.',
      stack: ['React', 'TypeScript', 'Render', 'AI Pair Programming'],
    },
    // {
    //   emoji: '🥠',
    //   title: '포춘쿠키',
    //   sub: '오늘의 운세',
    //   desc: '쿠키를 깨면 오늘의 운세를 알 수 있어요.',
    //   stack: ['React', 'Vite', 'TypeScript', 'Vercel', 'AI Pair Programming'],
    // },
    {
      emoji: '🎱',
      title: '번호 추천기',
      sub: '번호 빈도·패턴 분석',
      desc: '당첨번호 빈도·패턴 분석으로 추천번호를 받아보세요.',
      stack: ['React', 'Vite', 'TypeScript', 'Vercel', 'AI Pair Programming'],
    },
  ],
}

// ── 03 WHAT I DO ─────────────────────────────────────────
export type Strength = { icon: string; title: string; desc: string }
export type SkillGroup = { group: string; level?: string; items: string[] }

export const whatIDo: {
  eyebrow: string
  title: string
  body: string
  strengths: Strength[]
  skillsTitle: string
  skillsBody: string
  skills: SkillGroup[]
  marquee: string[]
  quoteEyebrow: string
  quote: string
} = {
  eyebrow: '02 · WHAT I DO',
  title: '하나의 방식만 고집하지 않습니다',
  body: 'Vue2 레거시 유지보수부터 Vue3 · React 신규 개발까지, <br />프로젝트가 요구하는 방식에 맞춥니다.',
  // 일하는 방식 — 강점 4가지
  // icon 값은 WhatIDo.tsx의 strengthIcons 맵(키 → react-icons)과 연결
  strengths: [
    {
      icon: 'exchange',
      title: '레거시와 최신을 동시에',
      desc: '한 서비스 안에서 Vue2 검진 파트와 Vue3 케어 파트를 병행 개발하며 버전 차이를 흡수했습니다.',
    },
    {
      icon: 'accessibility',
      title: '접근성을 먼저 챙김',
      desc: 'W3C · WCAG를 기본으로, 고령층 · 저시력자용 큰글씨 모드를 선제 제안 · 구현. WA 인증마크 획득에 기여.',
    },
    {
      icon: 'component',
      title: '재사용 컴포넌트 설계',
      desc: 'Figma · Zeplin 스펙을 정확히 해석해, 유지보수 효율을 고려한 컴포넌트 기반 화면을 구현합니다.',
    },
    {
      icon: 'collab',
      title: '디자이너 ↔ 개발자 조율',
      desc: 'AIA UX팀 등과 직접 협업하며 요구사항을 정확히 반영하고 일정 · 품질을 함께 관리해 왔습니다.',
    },
  ],
  // 스킬 — 능숙도별로 솔직하게 분류
  skillsTitle: '할 수 있는 것, 정확히',
  skillsBody: '능숙도에 따라 솔직하게 나눴습니다. 직접 다루는 것과 협업 · 참여 경험을 구분합니다.',
  skills: [
    {
      group: '주요 기술',
      level: '직접 작업',
      items: ['HTML5', 'CSS3', 'SCSS/Sass', 'JavaScript', 'jQuery', 'Bootstrap', 'TypeScript'],
    },
    {
      group: '퍼블리싱 역량',
      level: '핵심 강점',
      items: [
        '웹 표준(W3C)',
        '웹 접근성(WCAG · WA)',
        '반응형 웹',
        '모바일 웹',
        '크로스브라우징',
        '컴포넌트 기반 UI',
        '운영 유지보수',
      ],
    },
    {
      group: '프레임워크 환경',
      level: '실무 경험',
      items: ['Vue2', 'Vue3', 'Buefy UI', 'React', 'Chakra UI'],
    },
    {
      group: '협업 도구',
      items: ['Figma', 'Zeplin', 'Adobe XD', 'Photoshop', 'Git', 'Jira', 'Slack', 'Notion'],
    },
  ],
  // 한 줄 마퀴(무한 스크롤)에 흐를 키워드
  marquee: [
    'HTML5',
    'CSS3',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'jQuery',
    'Vue2',
    'Vue3',
    'React',
    'Buefy UI',
    'Chakra UI',
    'Web Standards',
    'Web Accessibility',
    'WCAG',
    '반응형 웹',
    '크로스브라우징',
    '컴포넌트 UI',
    'Figma',
    'Zeplin',
    'Git',
  ],
  // 포커스 문장(검정 강조 섹션) — accent 구절은 앰버로 강조
  quoteEyebrow: 'React · Vue 어느 환경이든,<br  /> 팀의 컨벤션에 맞춰 재사용 가능한 구조로 제작합니다.',
  quote:
    '사용자 중심의 UI · Interaction 설계',
}

// ── 04 PROJECTS ──────────────────────────────────────────
export type ProjectSection = { label: string; items: string[]; accent?: boolean }

export type Project = {
  no: string
  brand: string
  tagline: string
  name: string
  image?: string
  badge?: string
  featured?: boolean
  org?: string
  period?: string
  team?: string
  role?: string
  stack?: string[]
  responsibilities?: string[]
  highlights?: string[]
  // 라벨 구간이 필요한 모달(예: 가성비대장)은 sections로 직접 구성.
  // sections가 있으면 responsibilities/highlights 대신 이 구간들을 렌더링.
  sections?: ProjectSection[]
}

export const projects: {
  eyebrow: string
  title: string
  body: string
  items: Project[]
} = {
  eyebrow: '03 · PROJECTS',
  title: '레거시와 최신을, 굵직한 곳과 함께',
  body: `한 서비스 안에서 Vue2 검진 파트와 Vue3 케어 파트를 병행 개발하며 버전 간 차이를 흡수했습니다. 새 기술로 갈아타는 것만큼, 다른 방식이 공존하게 만드는 것도 실력입니다. <br />그리고 지금은, 직접 만듭니다.`,
  items: [
    {
      no: '00',
      brand: '가성비대장',
      tagline: '배달 손익 계산기',
      badge: '개발 중',
      featured: true,
      name: '가성비대장 — 소상공인 배달 손익 계산기',
      org: '개인 창업 프로젝트',
      period: '2026.06 ~ 진행 중',
      team: '1인 (기획·설계·개발)',
      role: 'Founder · 풀스택',
      stack: ['React', 'Vite', 'TypeScript', 'localStorage', 'AI Pair Programming'],
      sections: [
        {
          label: '한 줄 정의',
          items: [
            '배달앱은 매출은 보여줘도 ‘실제로 얼마 남는지’는 안 보여줍니다. 판매가에서 원가 · 포장비 · 배달비 · 수수료 · 쿠폰을 뺀 메뉴별 진짜 손익을 사장님이 직접 확인하는 수동 입력형 계산 도구입니다.',
          ],
        },
        {
          label: '문제 발견',
          items: [
            '자영업 커뮤니티에서 ‘배달 수수료 계산이 안 돼 답답하다’는 불만이 반복되는 것을 확인하고 시작. 기존 도구가 못 푸는 실제 현장 문제에서 출발.',
          ],
        },
        {
          label: '나의 역할',
          items: [
            '시장 문제 정의부터 기획 · 정보구조 · UI 설계 · 구현까지 1인 담당',
            '20년 UX · 퍼블리싱 경험으로 AI 코딩 도구를 지휘해 풀스택 구현',
            '직접 작성한 기술개발지시서 기반으로 진행 · 계산/검증/저장 로직 모듈 분리',
            '배달앱 계정 · 정산 · 고객정보를 받지 않는 민감정보 비수집 보안 설계',
          ],
        },
        {
          label: '로드맵',
          accent: true,
          items: [
            'v1 손익 계산기(현재) → 운영 보조(엑셀 · AI 해석 · 리뷰 답글) → 매장 진단(상권 · SWOT · 벤치마킹) → 소상공인 사업화',
          ],
        },
      ],
    },
    {
      no: '01',
      brand: 'SKT',
      tagline: 'T-Cloud Biz',
      name: 'SKT T-Cloud Biz 고도화 및 TCB/TBP APP 운영 개발',
      image: '/projects/skt.png',
      org: '(주)이음솔루션 · (주)비디',
      period: '2015.08 ~ 2025.02 (약 10년)',
      team: '9~10명',
      role: 'UX 퍼블리셔',
      stack: ['React', 'TypeScript', 'Chakra UI', 'Angular', 'jQuery', 'SCSS', 'Bootstrap'],
      responsibilities: [
        'T-Cloud Biz APP 운영 및 콘솔 프로그램 신규 개발 · 과제 UI/UX 퍼블리싱',
        '고도화는 Java 기반, 신규/과제는 React 환경에서 Chakra UI 활용 UI 퍼블리싱 및 개발 협업',
        'Meta Vision · VisionHub · CVOps · GrandView 로봇 관제 플랫폼 등 대시보드형 콘솔 UI 다수 수행',
        '운영 중 발생하는 UI 수정 사항 대응 및 화면 품질 관리',
      ],
      highlights: [
        '약 10년간 대형 통신사 서비스를 안정적으로 장기 운영 — 운영 유지보수와 신규 화면 개발을 병행',
        '대시보드형 콘솔 UI로 복잡한 데이터 구조를 시각화하는 역량 강화',
        '디자이너 · 백엔드 · 프론트엔드 개발자와 협업하며 UI 품질 관리',
      ],
    },
    {
      no: '02',
      brand: '삼성화재',
      tagline: '애니핏 플러스',
      name: '삼성화재 애니핏 헬스케어 서비스 개발',
      image: '/projects/samsungfire.png',
      org: 'GC케어',
      period: '2025.09 ~ 2026.04',
      team: '8명',
      role: 'UX 퍼블리셔',
      stack: ['Vue2', 'Vue3', 'TypeScript', 'Buefy UI', 'Sass'],
      responsibilities: [
        '신규 개발에 따른 UI/UX 퍼블리싱 담당',
        '검진 파트는 Vue2, 케어서비스 파트는 Vue3 중심으로 파트별 병행 개발',
        'Bulma 기반 Buefy UI로 컴포넌트 기반 화면 구현',
        'Vue + TypeScript 환경에서 재사용 컴포넌트 설계 · 제작 및 공통 기준 수립',
      ],
      highlights: [
        'Vue2 · Vue3 병행 수행으로 버전별 개발 방식 차이를 이해하고 각 환경에 적합하게 적용',
        '재사용 컴포넌트 설계로 UI 일관성 확보 및 개발 효율 향상',
        'TypeScript 기반 작업으로 타입 안전성 · 유지보수성 강화',
      ],
    },
    {
      no: '03',
      brand: '외교부',
      tagline: '여권정보시스템',
      name: '외교부 여권정보통합관리시스템 고도화 사업',
      image: '/projects/mofa.png',
      org: '온라인파워스',
      period: '2014.09 ~ 2015.01',
      team: '30명',
      role: 'UX 퍼블리셔',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards'],
      responsibilities: [
        '고도화 개발 UI/UX 퍼블리싱',
        '관공서 특성상 웹 표준 · 크로스브라우징이 핵심 요건',
        'IE8 · IE9 이상 환경에 맞춰 화면 개발',
      ],
      highlights: [
        '레거시 브라우저 호환성을 유지하면서 웹 표준을 충족하는 개발 방식 체득',
        '약 30명 규모 대형 공공 프로젝트에서 협업 프로세스 · 일정 관리 경험 축적',
      ],
    },
    {
      no: '04',
      brand: 'KBS',
      tagline: '인터넷뉴스',
      name: 'KBS 한국방송공사 인터넷뉴스 서비스 개편 (1~3차)',
      image: '/projects/kbs.png',
      org: '온라인파워스',
      period: '2012 ~ 2015 (1~3차)',
      team: '9명',
      role: 'UX 퍼블리셔',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards'],
      responsibilities: [
        '개편에 따른 레이아웃 변경 및 신규 서비스 추가 UI/UX 퍼블리싱',
        '2012년 1차부터 2015년 3차 개편까지 3회 연속 참여',
        'W3C 웹 표준 준수, 크로스브라우징 대응',
      ],
      highlights: [
        '단계별 개편을 거치며 최신 기술을 지속 적용',
        '대규모 콘텐츠 서비스의 구조와 유지보수 방식에 대한 이해 향상',
      ],
    },
    {
      no: '05',
      brand: 'AIA · GC케어',
      tagline: '헬스케어',
      name: 'GC케어 운영 개발 및 AIA 헬스케어 서비스 개발',
      image: '/projects/gccare.png',
      org: 'GC케어',
      period: '2025.03 ~ 2025.09',
      team: '10명',
      role: 'UX 퍼블리셔',
      stack: ['Vue2', 'Vue3', 'TypeScript', 'Buefy UI', 'Sass'],
      responsibilities: [
        'GC케어 운영 및 AIA 헬스케어 신규 개발 UI/UX 퍼블리싱 담당',
        '검진 서비스는 Vue2, AIA 서비스는 Vue3 중심으로 개발',
        'AIA QI 디자인 시스템 기반 개발 — AIA UX팀과 직접 소통하며 요구사항 반영',
      ],
      highlights: [
        '다양한 재사용 컴포넌트를 직접 설계 · 제작',
        'AIA QI 디자인 시스템 적용 과정에서 UX팀과 긴밀히 소통',
        '고령층 · 저시력자용 큰글씨 모드를 선제적으로 고려해 성공적으로 구현 — 사용자 접근성 향상',
      ],
    },
    {
      no: '06',
      brand: '삼성전자 PEN.UP',
      tagline: '신규 기능',
      name: '삼성전자 PEN.UP 신규 기능 개발',
      image: '/projects/penup.png',
      org: '주식회사 펜타크리드',
      period: '2014.04 ~ 2014.06',
      team: '약 20명',
      role: 'UX 퍼블리셔',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Responsive Web'],
      responsibilities: [
        'PEN.UP 앱 신규 기능 개발 UI/UX 퍼블리싱',
        '모바일 앱 특성에 맞춰 디바이스별 해상도 대응 반응형 UI 개발',
      ],
      highlights: ['다양한 디바이스 해상도 · 특성에 맞춘 반응형 UI 구현으로 모바일 퍼블리싱 역량 강화'],
    },
    {
      no: '07',
      brand: 'EBS',
      tagline: 'MATH',
      name: 'EBS MATH 개선사업',
      image: '/projects/ebs.png',
      org: '(주)온라인파워스',
      period: '2013.12 ~ 2014.04',
      role: 'UX 퍼블리셔 · 과장',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      responsibilities: ['신규 기능 개발 UI/UX 퍼블리싱 · 반응형 · 웹 표준 · 크로스브라우징'],
      highlights: ['웹 · 모바일 환경에 대응하는 반응형 UI 구현 경험 축적'],
    },
    {
      no: '08',
      brand: '롯데닷컴',
      tagline: '홈페이지',
      name: '롯데닷컴 홈페이지 퍼블리싱 및 관련 제반 업무',
      image: '/projects/lotte.png',
      org: '한국인터넷프리랜서협회',
      period: '2013.01 ~ 2013.03',
      role: 'UX 퍼블리셔 · 과장',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      responsibilities: ['신규 개발 UI/UX 퍼블리싱 · 반응형 · 웹 표준 · 크로스브라우징'],
      highlights: ['다양한 해상도와 웹 환경에 대응하는 반응형 UI 구현 경험 축적'],
    },
    {
      no: '09',
      brand: '국립어린이청소년도서관',
      tagline: 'WA 인증',
      name: '국립어린이청소년도서관 홈페이지 개발',
      image: '/projects/nlcy.png',
      org: '(주)제이넷',
      period: '2012.10 ~ 2012.12',
      role: 'UX 퍼블리셔 · 과장',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Accessibility'],
      responsibilities: [
        '도서관 홈페이지 신규 개발 UI/UX 퍼블리싱',
        '반응형 웹 · 웹 표준 · 크로스브라우징 대응 화면 개발',
      ],
      highlights: [
        '웹 표준 및 웹 접근성 품질인증 마크(WA) 획득',
        '공공 도메인에서 접근성 기준을 충족하는 화면 구현 경험',
      ],
    },
    {
      no: '10',
      brand: '행복한웹앤미디어',
      tagline: '접근성 개선',
      name: '행복한웹앤미디어 웹접근성 개선 프로젝트',
      image: '/projects/happyweb.png',
      org: '(주)유니트론텍',
      period: '2013.06 ~ 2013.11',
      role: 'UX 퍼블리셔 · 과장',
      stack: ['jQuery', 'HTML5', 'CSS3', 'Web Accessibility'],
      responsibilities: ['웹접근성 개선 및 신규 기능 개발 UI/UX 퍼블리싱'],
      highlights: ['웹 · 모바일 환경에 대응하는 반응형 UI 구현 경험 축적'],
    },
  ],
}

// ── 05 TRACK RECORD ──────────────────────────────────────
export const trackRecord = {
  eyebrow: '04 · TRACK RECORD',
  title: '꾸준히, 흔들림 없이',
  note: '2005 — 여전히 진행 중',
  stats: [
    { value: '20', unit: '+', label: 'UX 퍼블리싱 경력' },
    { value: '10', unit: '+', label: 'WA 인증 기여' },
    { value: '10', unit: '년', label: 'SKT 장기 운영' },
  ],
}

// ── 06 LABS ──────────────────────────────────────────────
export const labs = {
  eyebrow: '06 · LABS',
  title: '일이 아니어도, 만듭니다',
  body: 'AI를 활용한 바이브 코딩으로 빠르게 만들고, GitHub · 오픈소스 생태계를 적극 활용해 실제 동작하는 앱 서비스로 완성합니다. <br />호기심에서 출발한 실험을 ‘쓸 수 있는 제품’까지 끌고 가는 공간입니다.',
  // APPRESSO(appresso.vercel.app) 라인업과 동일하게 — Now 섹션 카드 기준
  items: [
    { label: '가성비대장', verified: '소상공인 배달 손익 계산기' },
    { label: '유튜브 분석', verified: '채널 · 영상 데이터 분석' },
    { label: '조회수가 터진 영상', verified: '트렌드 발굴' },
    { label: 'Art Studio', verified: 'AI 이미지 생성' },
    { label: 'TTS Studio', verified: 'AI 음성 합성' },
    { label: '포춘쿠키', verified: '오늘의 운세' },
    { label: '번호 추천기', verified: '번호 빈도 · 패턴 분석' },
  ],
  moreLabel: 'Labs 둘러보기',
  moreHref: '#labs',
}

// ── 07 CONTACT ───────────────────────────────────────────
export const contact = {
  eyebrow: 'GET IN TOUCH',
  title: '함께 더 나은 결과를 만들고 싶습니다',
  description:
    '디자이너 · 개발자와 조율하며 일정과 품질을 함께 만들어온 경험을 가져갑니다.',
  cta: { label: 'Contact Me', href: 'https://naver.me/GSQzq3AZ' },
}

export const footer = {
  brand: 'LABS Studio',
  copyright: '© 2026 김형윤. All rights reserved.',
}

// 섹션 사이 캡션 (목업의 "↓ 01 HERO — ..." 라인)
export const dividers = {
  hero: '01 HERO',
  now: '02 NOW — 우리를 가장 먼저 깨는 자리',
  what: '03 WHAT I DO — “양쪽 다 된다”로 리프레이밍',
  projects: '04 PROJECTS — Vue2/3 병행을 전면으로',
  track: '05 TRACK RECORD — 숫자는 ‘안심’용으로 뒤로',
  labs: '06 LABS 진입 — 호기심이 살아있다는 증거',
  contact: '07 CONTACT — ‘같이 일하기 좋은 사람’으로 마무리',
}
