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
export const now = {
  eyebrow: 'NOW · 요즘 하는 것',
  title: '멈춰 있지 않습니다',
  body: '최근에는 React + Vite · Supabase로 사내 SaaS 도구를 만들고, 쉬는 시간엔 새 API와 인터랙션을 직접 실험합니다. 20년차라고 익숙한 것만 하지 않습니다.',
  cards: [
    {
      title: '사내 SaaS 대시보드',
      verified: 'React · Vite · Zustand · Supabase',
    },
    {
      title: 'TTS 음성 생성기',
      verified: 'Web Speech API · 비동기 음성 처리',
    },
    {
      title: '데이터 분석 도구',
      verified: '멀티소스 API 폴백 · 데이터 시각화',
    },
  ],
}

// ── 03 WHAT I DO ─────────────────────────────────────────
export const whatIDo = {
  eyebrow: '02 · WHAT I DO',
  title: '하나의 방식만 고집하지 않습니다',
  body: 'Vue2 레거시 유지보수부터 Vue3 · React 신규 개발까지, 프로젝트가 요구하는 방식에 맞춥니다.',
  tags: [
    { label: 'Web Standards · WCAG', strong: true },
    { label: 'Cross-browsing · 반응형', strong: true },
    { label: 'Component UI' },
    { label: 'UI Library' },
    { label: 'Collaboration' },
    { label: 'Design Spec' },
  ],
  quote:
    '“React · Vue 어느 환경이든, 팀의 컨벤션에 맞춰 재사용 가능한 구조로 제작합니다.”',
}

// ── 04 PROJECTS ──────────────────────────────────────────
export type Project = {
  no: string
  brand: string
  tagline: string
  name: string
  org?: string
  period?: string
  team?: string
  role?: string
  stack?: string[]
  responsibilities?: string[]
  highlights?: string[]
}

export const projects: {
  eyebrow: string
  title: string
  body: string
  items: Project[]
} = {
  eyebrow: '03 · PROJECTS',
  title: '레거시와 최신을 동시에',
  body: '한 서비스 안에서 Vue2 검진 파트와 Vue3 케어 파트를 병행 개발하며 버전 간 차이를 흡수했습니다. 새 기술로 갈아타는 것만큼, 다른 방식이 공존하게 만드는 것도 실력입니다.',
  items: [
    {
      no: '01',
      brand: 'SKT',
      tagline: 'T-Cloud Biz',
      name: 'SKT T-Cloud Biz 고도화 및 TCB/TBP APP 운영 개발',
      org: '(주)이음솔루션 · (주)비디',
      period: '2015.08 ~ 2025.02 (약 10년)',
      team: '9~10명',
      role: 'UX 퍼블리셔',
      stack: ['React', 'TypeScript', 'Chakra UI', 'Angular', 'jQuery', 'SCSS', 'Bootstrap'],
      responsibilities: [
        'T-Cloud Biz APP 운영 및 콘솔 프로그램 신규 개발 · 과제 UI/UX 퍼블리싱',
        '고도화는 Java 기반, 신규 개발/과제는 React + Chakra UI 중심으로 진행',
        'Meta Vision · VisionHub · CVOps · GrandView 로봇 관제 플랫폼 등 참여',
      ],
      highlights: [
        '장기 운영 프로젝트에서 유지보수 효율을 고려한 컴포넌트 설계 역량 강화',
        '대시보드형 콘솔 UI 등 복잡한 데이터 구조의 시각화 UI 개발 경험 축적',
      ],
    },
    {
      no: '02',
      brand: '삼성화재',
      tagline: '애니핏 플러스',
      name: '삼성화재 애니핏 헬스케어 서비스 개발',
      org: 'GC케어',
      period: '2025.09 ~ 2026.05',
      team: '8명',
      role: 'UX 퍼블리셔',
      stack: ['Vue2', 'Vue3', 'TypeScript', 'Buefy UI', 'Sass'],
      responsibilities: [
        '애니핏 헬스케어 신규 개발에 따른 UI/UX 퍼블리싱 담당',
        '검진 파트는 Vue2, 케어서비스 파트는 Vue3 중심으로 화면 개발',
        'Bulma 기반 Buefy UI 컴포넌트 라이브러리를 활용한 화면 구현',
      ],
      highlights: [
        'Vue + TypeScript 환경에서 재사용 가능한 UI 컴포넌트 직접 설계 · 제작',
        'Vue2 검진 파트와 Vue3 케어 파트를 병행 개발하며 버전 간 차이를 흡수',
      ],
    },
    {
      no: '03',
      brand: '외교부',
      tagline: '여권정보시스템',
      name: '외교부 여권정보통합관리시스템 고도화 사업',
      org: '온라인파워스',
      period: '2014.09 ~ 2015.01',
      team: '30명',
      role: 'UX 퍼블리셔',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards'],
      responsibilities: [
        '여권정보통합관리시스템 고도화 개발에 따른 UI/UX 퍼블리싱 담당',
        '관공서 특성에 맞춘 웹 표준 및 크로스브라우징 대응 (IE8 · IE9+ 고려)',
      ],
      highlights: [
        '레거시 브라우저 호환성을 유지하면서 웹 표준을 충족하는 개발 방식 체득',
        '약 30명 규모 대형 공공 프로젝트에서 협업 프로세스 · 일정 관리 경험 확보',
      ],
    },
    {
      no: '04',
      brand: 'KBS',
      tagline: '인터넷뉴스',
      name: 'KBS 한국방송공사 인터넷뉴스 서비스 개편 (1~3차)',
      org: '온라인파워스',
      period: '2012 ~ 2015 (1~3차)',
      team: '9명',
      role: 'UX 퍼블리셔',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Standards'],
      responsibilities: [
        '인터넷뉴스 서비스 개편에 따른 레이아웃 변경 및 신규 서비스 UI/UX 퍼블리싱',
        '1차(2012) · 2차(2013) · 3차(2015) 개편에 반복 참여',
      ],
      highlights: [
        '대규모 콘텐츠 서비스 구조에 대한 이해도 향상',
        '단계별 개편 과정에서 최신 웹 기술과 웹 표준을 지속 적용',
      ],
    },
    {
      no: '05',
      brand: 'AIA · GC케어',
      tagline: '헬스케어',
      name: 'GC케어 운영 개발 및 AIA 헬스케어 서비스 개발',
      org: 'GC케어',
      period: '2025.03 ~ 2025.09',
      team: '10명',
      role: 'UX 퍼블리셔',
      stack: ['Vue2', 'Vue3', 'TypeScript', 'Buefy UI', 'Sass'],
      responsibilities: [
        'GC케어 운영 및 AIA 헬스케어 신규 개발 UI/UX 퍼블리싱 담당',
        'AIA QI 디자인 시스템 기반 UI 개발 및 UX팀 커뮤니케이션 수행',
      ],
      highlights: [
        'AIA QI 디자인 시스템을 적용하며 디자인 일관성 확보',
        '고령층 · 저시력자를 고려한 큰글씨 모드를 선제적으로 구현',
      ],
    },
    {
      no: '06',
      brand: '삼성전자 PEN.UP',
      tagline: '신규 기능',
      name: '삼성전자 PEN.UP 신규 기능 개발',
      org: '(주)포인테크',
      period: '2014.04 ~ 2014.06',
      team: '약 20명',
      role: 'UX 퍼블리셔',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Responsive Web'],
      responsibilities: [
        'PEN.UP 앱 신규 기능 개발 UI/UX 퍼블리싱 담당',
        '모바일 앱 특성에 맞춘 디바이스별 해상도 대응 화면 개발',
      ],
      highlights: ['다양한 디바이스 해상도와 모바일 환경에 대응하는 반응형 UI 구현 경험 축적'],
    },
    {
      no: '07',
      brand: 'EBS',
      tagline: 'MATH',
      name: 'EBS MATH 개선사업',
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
      org: '(주)제이넷',
      period: '2012.10 ~ 2012.12',
      role: 'UX 퍼블리셔 · 과장',
      stack: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Web Accessibility'],
      responsibilities: ['신규 개발 UI/UX 퍼블리싱 · 웹 접근성 대응'],
      highlights: ['웹 표준 및 웹 접근성 품질인증 마크(WA 마크) 획득'],
    },
    {
      no: '10',
      brand: '행복한웹앤미디어',
      tagline: '접근성 개선',
      name: '행복한웹앤미디어 웹접근성 개선 프로젝트',
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
    { value: '50', unit: '+', label: '수행 프로젝트' },
    { value: '10', unit: '+', label: 'WA 인증 기여' },
  ],
}

// ── 06 LABS ──────────────────────────────────────────────
export const labs = {
  eyebrow: '06 · LABS',
  title: '일이 아니어도, 만듭니다',
  body: '호기심으로 만든 작은 실험들. 새 기술을 직접 검증하는 공간입니다.',
  items: [
    { label: '유튜브 검색기', verified: 'YouTube Data API · 검색 UX' },
    { label: 'TTS 생성기', verified: 'Web Speech API · 음성 합성' },
    { label: '데이터 분석 도구', verified: '멀티소스 API 폴백 · 시각화' },
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
