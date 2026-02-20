import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { SwipeLogo } from '../App'

const BASE_CONNECTOR_URL = 'https://connect.prod.us-east-1.neuralace.co'

function ConnectGmail() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate('/login', { replace: true })
    })
  }, [navigate])

  const handleConnectGmail = async () => {
    setLoading(true)
    setError(null)

    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        navigate('/login', { replace: true })
        return
      }

      const response = await fetch(
        `${BASE_CONNECTOR_URL}/oauth/gmail/connect?platform=web`,
        {
          headers: {
            'X-AUTHTOKEN': `Bearer ${session.access_token}`,
            'Content-Type': 'application/json',
          },
        },
      )

      if (response.ok) {
        const url = await response.text()
        window.location.href = url
      } else {
        setError('Failed to connect. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

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

        <h1 className="login-title">Connect Gmail</h1>
        <p className="login-subtitle">Link your Gmail to start using Swipe</p>

        <button
          className="google-btn"
          onClick={handleConnectGmail}
          disabled={loading}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="#EA4335"/>
          </svg>
          {loading ? 'Connecting...' : 'Connect Gmail with Swipe'}
        </button>

        {error && <p className="connect-error">{error}</p>}

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

export default ConnectGmail
