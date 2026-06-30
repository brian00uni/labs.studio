import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from '../hooks/useAuth'
import { fetchTotalViews, fetchVisits, type VisitRow } from '../lib/stats'

// 사이트로 돌아가기(해시 라우팅 해제)
function backToSite() {
  window.location.hash = '#top'
}

export default function Admin() {
  const { session, loading, enabled } = useAuth()

  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm font-bold tracking-[0.12em] text-white/80 transition-colors hover:text-white"
          >
            ← labs.studio
          </a>
          {session && (
            <button
              type="button"
              onClick={() => supabase?.auth.signOut()}
              className="rounded-full border border-white/15 px-4 py-1.5 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              로그아웃
            </button>
          )}
        </div>

        <div className="mt-10">
          {loading ? (
            <p className="text-sm text-white/50">불러오는 중…</p>
          ) : !enabled ? (
            <DisabledNotice />
          ) : session ? (
            <Dashboard />
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </div>
  )
}

function DisabledNotice() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
      <h1 className="text-xl font-bold">접속 현황 (비활성화)</h1>
      <p className="mt-3 text-sm leading-relaxed text-white/60">
        Supabase 환경변수(<code className="text-amber-soft">VITE_SUPABASE_URL</code> ·{' '}
        <code className="text-amber-soft">VITE_SUPABASE_ANON_KEY</code>)가 설정되어 있지 않습니다.
        <br />
        설정 후 다시 시도하면 로그인 화면이 표시됩니다.
      </p>
      <button
        type="button"
        onClick={backToSite}
        className="mt-6 rounded-full bg-amber-bright px-5 py-2 text-sm font-bold text-amber-ink"
      >
        사이트로 돌아가기
      </button>
    </div>
  )
}

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!supabase) return
    setBusy(true)
    setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setBusy(false)
    if (error) setError(error.message)
    // 성공 시 onAuthStateChange가 세션을 갱신 → Dashboard로 전환됨
  }

  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/5 p-8">
      <h1 className="text-xl font-bold">관리자 로그인</h1>
      <p className="mt-2 text-sm text-white/55">접속 현황을 보려면 로그인하세요.</p>

      <form onSubmit={onSubmit} className="mt-6 space-y-3">
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-amber-bright focus:outline-none"
        />
        <input
          type="password"
          required
          autoComplete="current-password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-white/15 bg-navy-900 px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-amber-bright focus:outline-none"
        />
        {error && <p className="text-sm text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-lg bg-amber-bright px-4 py-2.5 text-sm font-bold text-amber-ink transition-opacity hover:opacity-90 disabled:opacity-50"
        >
          {busy ? '로그인 중…' : '로그인'}
        </button>
      </form>
    </div>
  )
}

// ── 집계 헬퍼 ────────────────────────────────────────────
function dayKey(iso: string): string {
  const d = new Date(iso)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(
    d.getDate(),
  ).padStart(2, '0')}`
}

function lastNDays(n: number): string[] {
  const out: string[] = []
  const now = new Date()
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    out.push(
      `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`,
    )
  }
  return out
}

function hostOf(referrer: string | null): string {
  if (!referrer) return 'direct'
  try {
    return new URL(referrer).hostname || 'direct'
  } catch {
    return referrer
  }
}

function Dashboard() {
  const [visits, setVisits] = useState<VisitRow[] | null>(null)
  const [totalViews, setTotalViews] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    Promise.all([fetchVisits(1000), fetchTotalViews()])
      .then(([rows, total]) => {
        if (!active) return
        setVisits(rows)
        setTotalViews(total)
      })
      .catch((e) => active && setError(e instanceof Error ? e.message : String(e)))
    return () => {
      active = false
    }
  }, [])

  const stats = useMemo(() => {
    if (!visits) return null
    const today = dayKey(new Date().toISOString())
    const days7 = new Set(lastNDays(7))
    const daily = lastNDays(14).map((k) => ({ day: k, count: 0 }))
    const dailyIndex = new Map(daily.map((d, i) => [d.day, i]))
    const perPath = new Map<string, number>()
    const perRef = new Map<string, number>()
    let todayCount = 0
    let week = 0

    for (const v of visits) {
      const k = dayKey(v.created_at)
      if (k === today) todayCount++
      if (days7.has(k)) week++
      const di = dailyIndex.get(k)
      if (di !== undefined) daily[di].count++
      perPath.set(v.path, (perPath.get(v.path) ?? 0) + 1)
      const h = hostOf(v.referrer)
      perRef.set(h, (perRef.get(h) ?? 0) + 1)
    }

    const maxDaily = Math.max(1, ...daily.map((d) => d.count))
    const sortDesc = (m: Map<string, number>) =>
      [...m.entries()].sort((a, b) => b[1] - a[1])

    return {
      total: visits.length,
      today: todayCount,
      week,
      daily,
      maxDaily,
      perPath: sortDesc(perPath),
      perRef: sortDesc(perRef),
      recent: visits.slice(0, 20),
    }
  }, [visits])

  if (error)
    return (
      <p className="text-sm text-red-400">불러오기 실패: {error}</p>
    )
  if (!stats) return <p className="text-sm text-white/50">집계 중…</p>

  return (
    <div>
      <h1 className="text-2xl font-extrabold">접속 현황</h1>

      {/* KPI */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Kpi label="누적 조회수" value={totalViews ?? stats.total} />
        <Kpi label="기록된 방문" value={stats.total} />
        <Kpi label="최근 7일" value={stats.week} />
        <Kpi label="오늘" value={stats.today} accent />
      </div>

      {/* 일자별 추이 */}
      <Card title="일자별 추이 (최근 14일)">
        <ul className="space-y-1.5">
          {stats.daily.map((d) => (
            <li key={d.day} className="flex items-center gap-3">
              <span className="w-20 shrink-0 font-mono text-xs text-white/45">
                {d.day.slice(5)}
              </span>
              <span className="h-3 flex-1 overflow-hidden rounded bg-white/5">
                <span
                  className="block h-full rounded bg-amber-bright/80"
                  style={{ width: `${(d.count / stats.maxDaily) * 100}%` }}
                />
              </span>
              <span className="w-8 shrink-0 text-right font-mono text-xs text-white/70">
                {d.count}
              </span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {/* 페이지별 */}
        <Card title="페이지별">
          <RankList rows={stats.perPath} empty="데이터 없음" />
        </Card>
        {/* 유입 경로 */}
        <Card title="유입 경로 (referrer)">
          <RankList rows={stats.perRef} empty="데이터 없음" />
        </Card>
      </div>

      {/* 최근 방문 */}
      <Card title="최근 방문 20건">
        {stats.recent.length === 0 ? (
          <p className="text-sm text-white/45">아직 기록된 방문이 없습니다.</p>
        ) : (
          <ul className="divide-y divide-white/5">
            {stats.recent.map((v) => (
              <li key={v.id} className="flex items-center justify-between gap-3 py-2 text-sm">
                <span className="font-mono text-xs text-white/50">
                  {new Date(v.created_at).toLocaleString('ko-KR', {
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <span className="truncate text-white/80">{v.path}</span>
                <span className="shrink-0 font-mono text-xs text-white/40">
                  {hostOf(v.referrer)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}

function Kpi({ label, value, accent }: { label: string; value: number; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
      <p className="text-xs text-white/45">{label}</p>
      <p
        className={`mt-1 text-2xl font-extrabold ${accent ? 'text-amber-bright' : 'text-white'}`}
      >
        {value.toLocaleString('ko-KR')}
      </p>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-sm font-bold text-white/80">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function RankList({ rows, empty }: { rows: [string, number][]; empty: string }) {
  if (rows.length === 0) return <p className="text-sm text-white/45">{empty}</p>
  const max = Math.max(1, ...rows.map((r) => r[1]))
  return (
    <ul className="space-y-1.5">
      {rows.slice(0, 8).map(([key, count]) => (
        <li key={key} className="flex items-center gap-3">
          <span className="w-28 shrink-0 truncate text-xs text-white/70" title={key}>
            {key}
          </span>
          <span className="h-3 flex-1 overflow-hidden rounded bg-white/5">
            <span
              className="block h-full rounded bg-amber-bright/60"
              style={{ width: `${(count / max) * 100}%` }}
            />
          </span>
          <span className="w-8 shrink-0 text-right font-mono text-xs text-white/70">{count}</span>
        </li>
      ))}
    </ul>
  )
}
