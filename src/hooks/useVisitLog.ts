import { useEffect } from 'react'
import { logVisit } from '../lib/stats'

// 마운트 시 방문을 1회 기록(세션당 1회). Supabase 미설정 시 no-op.
export function useVisitLog() {
  useEffect(() => {
    void logVisit()
  }, [])
}
