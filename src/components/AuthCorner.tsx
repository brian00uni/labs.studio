import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'

// 화면 오른쪽 상단 끝에 고정되는 로그인/로그아웃 토글.
// 잘 안 보이는 색(헤더 위 z-60)으로 두고, 세션 유무에 따라 전환.
export function AuthCorner() {
  const { session } = useAuth()

  const cls =
    'font-mono text-[11px] lowercase tracking-wider text-white/20 transition-colors hover:text-amber-bright/70'

  return (
    <div className="fixed right-5 top-4 z-[60] sm:right-8 sm:top-5">
      {session ? (
        <button
          type="button"
          onClick={() => supabase?.auth.signOut()}
          className={cls}
          aria-label="로그아웃"
        >
          logout
        </button>
      ) : (
        <a href="#admin" className={cls} aria-label="관리자 로그인">
          login
        </a>
      )}
    </div>
  )
}
