import { footer } from '../data/content'
import { usePageViews } from '../hooks/usePageViews'

export function Footer() {
  const views = usePageViews()

  return (
    <footer className="bg-navy-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 text-center sm:px-8">
        <p className="font-mono text-xs tracking-[0.16em] text-white/40">
          {footer.brand} {footer.copyright}
        </p>
        {views !== null && (
          <p className="font-mono text-[13px] text-white/25">
            {views.toLocaleString()} views
          </p>
        )}
      </div>
    </footer>
  )
}
