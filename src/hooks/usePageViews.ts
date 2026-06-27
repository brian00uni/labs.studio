import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

// 페이지 조회수: 마운트 시 1회 증가시키고 누적 수를 반환.
// Supabase 미설정 시 null을 반환하므로 UI에서 숨길 수 있습니다.
// 세션당 1회만 카운트(새로고침 중복 방지)는 sessionStorage로 처리.
const SLUG = 'home'
const SESSION_KEY = 'labs-viewed'

export function usePageViews(): number | null {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const sb = supabase
    if (!sb) return
    let cancelled = false

    const run = async () => {
      const alreadyCounted = sessionStorage.getItem(SESSION_KEY) === '1'

      if (alreadyCounted) {
        // 증가 없이 현재 값만 조회
        const { data } = await sb
          .from('page_views')
          .select('views')
          .eq('slug', SLUG)
          .single()
        if (!cancelled && data) setCount(data.views)
        return
      }

      // increment_view(slug) RPC가 증가 후 새 값을 반환 (README의 SQL 참고)
      const { data, error } = await sb.rpc('increment_view', {
        page_slug: SLUG,
      })
      if (!cancelled && !error && typeof data === 'number') {
        sessionStorage.setItem(SESSION_KEY, '1')
        setCount(data)
      }
    }

    void run()
    return () => {
      cancelled = true
    }
  }, [])

  return count
}
