import { supabase } from './supabase'

// 방문 로깅 + 접속 현황 조회.
// visit_logs 테이블(README의 SQL 참고)에 방문을 기록하고,
// 관리자 대시보드에서 집계해서 보여준다.

const VISIT_SESSION_KEY = 'labs-visit-logged'

export type VisitRow = {
  id: number
  created_at: string
  path: string
  referrer: string | null
  user_agent: string | null
}

// 세션당 1회만 방문 기록(새로고침 중복 방지).
export async function logVisit(): Promise<void> {
  const sb = supabase
  if (!sb) return
  if (sessionStorage.getItem(VISIT_SESSION_KEY) === '1') return
  sessionStorage.setItem(VISIT_SESSION_KEY, '1')
  await sb.from('visit_logs').insert({
    path: window.location.pathname || '/',
    referrer: document.referrer || null,
    user_agent: navigator.userAgent,
  })
}

// 최근 방문 로그(인증 사용자만 RLS로 SELECT 가능).
export async function fetchVisits(limit = 1000): Promise<VisitRow[]> {
  const sb = supabase
  if (!sb) return []
  const { data, error } = await sb
    .from('visit_logs')
    .select('id, created_at, path, referrer, user_agent')
    .order('created_at', { ascending: false })
    .limit(limit)
  if (error) throw error
  return data ?? []
}

// 누적 조회수(기존 page_views 카운터)를 함께 보여주기 위한 조회.
export async function fetchTotalViews(): Promise<number | null> {
  const sb = supabase
  if (!sb) return null
  const { data, error } = await sb
    .from('page_views')
    .select('views')
    .eq('slug', 'home')
    .single()
  if (error || !data) return null
  return data.views as number
}
