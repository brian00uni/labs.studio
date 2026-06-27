# Labs Studio

UX 퍼블리셔 · 프론트엔드 개발자 **김형윤**의 1-page 포트폴리오.
"지금도 새로 만드는 베테랑"이라는 서사를 네이비 + 앰버 톤으로 풀어낸 사이트.

## 기술 스택

| 영역 | 사용 |
| --- | --- |
| 빌드 | Vite 6 |
| 프레임워크 | React 19 + TypeScript |
| 스타일 | Tailwind CSS v4 (`@theme` 토큰) |
| 백엔드 | Supabase (방문 통계) |
| 배포 | Vercel |

## 시작하기

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # 타입체크 + 프로덕션 빌드 (dist/)
npm run preview  # 빌드 결과 미리보기
```

## 서사 구조 (섹션 순서)

`HERO → NOW → WHAT I DO → PROJECTS → TRACK RECORD → LABS → CONTACT`

> 지금도 새로 만드는 사람 → 레거시도 최신도 다 되는 사람 → 그걸 20년간
> 큰 회사들과 안정적으로 해온 사람 → 같이 일하기 좋은 사람.

## 디자인 토큰

색상·폰트는 [`src/index.css`](src/index.css)의 `@theme` 블록에 정의합니다.

- **네이비/화이트가 다수, 앰버는 강조어·버튼·숫자·점에만 좁게.** Contact 한 면만 풀앰버.
- 앰버 명도는 배경마다 다르게 — 어두운 배경엔 `amber-bright(#e8a93c)`,
  흰 배경 텍스트엔 대비를 위해 `amber-deep(#a06a12)`.

## 콘텐츠

모든 카피는 [`src/data/content.ts`](src/data/content.ts) 한 곳에서 관리합니다.
컴포넌트는 구조/스타일만 담당하고 텍스트를 하드코딩하지 않습니다.

## Supabase — 방문 통계

조회수 카운터는 환경변수가 있을 때만 활성화됩니다(없으면 자동 비활성, 정적으로 동작).

1. `.env.example`을 `.env`로 복사하고 값을 채웁니다.

   ```bash
   cp .env.example .env
   ```

2. Supabase SQL 에디터에서 테이블 + 증가 함수를 생성합니다.

   ```sql
   create table if not exists page_views (
     slug text primary key,
     views bigint not null default 0
   );
   insert into page_views (slug, views) values ('home', 0)
     on conflict (slug) do nothing;

   -- 조회수 1 증가 후 새 값을 반환
   create or replace function increment_view(page_slug text)
   returns bigint
   language plpgsql
   security definer
   as $$
     declare new_count bigint;
   begin
     update page_views set views = views + 1
       where slug = page_slug
       returning views into new_count;
     return new_count;
   end;
   $$;

   -- RLS: 익명 클라이언트는 읽기와 RPC만
   alter table page_views enable row level security;
   create policy "read views" on page_views for select using (true);
   ```

3. Vercel 프로젝트 환경변수에도 `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`를 등록합니다.

## 배포 (Vercel)

- Framework Preset: **Vite**
- Build Command: `npm run build` · Output: `dist`
- 환경변수 등록 후 `main` 브랜치 푸시 시 자동 배포.

## 라이선스

Private.
