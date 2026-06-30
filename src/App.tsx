import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Admin from './pages/Admin'

// 라우터 없이 해시로 관리자 화면을 분기. (#admin / #login → Admin)
function useHashRoute(): string {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return hash
}

export default function App() {
  const hash = useHashRoute()
  if (hash === '#admin' || hash === '#login') return <Admin />
  return <Home />
}
