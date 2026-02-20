import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { SwipeLogo } from '../App'

function GmailConnected() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const success = searchParams.get('success') === 'true'

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/login', { replace: true })
    })
  }, [navigate])

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="hero-gradient-orb orb-1" />
        <div className="hero-gradient-orb orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="login-card">
        <div className="login-logo">
          <SwipeLogo size="default" />
        </div>

        {success ? (
          <>
            <div className="status-icon status-success">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h1 className="login-title">Gmail Connected</h1>
            <p className="login-subtitle">Your Gmail has been successfully linked to Swipe</p>
          </>
        ) : (
          <>
            <div className="status-icon status-error">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <h1 className="login-title">Connection Failed</h1>
            <p className="login-subtitle">We couldn't link your Gmail. Please try again.</p>
            <button
              className="google-btn"
              onClick={() => navigate('/connect-gmail', { replace: true })}
            >
              Try Again
            </button>
          </>
        )}

        <button
          className="logout-btn"
          onClick={async () => {
            await supabase.auth.signOut()
            navigate('/login', { replace: true })
          }}
        >
          Log out
        </button>
      </div>
    </div>
  )
}

export default GmailConnected
