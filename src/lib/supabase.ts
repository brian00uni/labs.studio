import { createClient, type SupabaseClient } from '@supabase/supabase-js'

// 방문 통계용 Supabase 클라이언트.
// 환경변수가 비어 있으면 null — 카운터는 자동으로 비활성화되어
// 정적 사이트로도 문제없이 동작합니다.
const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null

export const isSupabaseEnabled = supabase !== null
