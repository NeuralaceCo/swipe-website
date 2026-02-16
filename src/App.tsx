import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import {
  Mail,
  MessageSquare,
  Bell,
  Zap,
  ArrowRight,
  ChevronRight,
  Sparkles,
  SwatchBook,
  Globe,
  Shield,
  Star,
  Check,
} from 'lucide-react'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import appScreenshot from './assets/app-screenshot.png'
import './App.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

function PhoneMockup() {
  return (
    <div className="phone-mockup">
      <div className="phone-frame">
        <div className="phone-screen">
          <img src={appScreenshot} alt="Swipe app" className="phone-screenshot" />
        </div>
      </div>
    </div>
  )
}

function SwipeLogo({ size = 'default' }: { size?: 'default' | 'small' }) {
  return (
    <div className={`swipe-logo ${size}`}>
      <div className="logo-icon">
        <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_logo)">
            <path fillRule="evenodd" clipRule="evenodd" d="M27.3654 12.8846C27.3654 12.8846 27.383 12.9198 27.3888 12.9433V12.7848C27.383 12.82 27.3771 12.8494 27.3654 12.8846ZM22.6106 0H4.77828C2.14058 0 0 2.14743 0 4.79358V14.0111L1.97097 6.34255C2.52658 4.18338 4.4683 2.7459 6.59718 2.7459C6.98904 2.7459 7.39259 2.79283 7.79614 2.89845L25.0611 7.36346C25.991 7.60402 26.7864 8.10274 27.3888 8.76574V4.79358C27.3888 2.14743 25.2483 0 22.6106 0ZM27.2894 17.8835L27.0145 16.5986L26.7455 15.3137L26.418 13.7823C26.0612 12.1218 24.5815 10.919 22.8913 10.919C22.6398 10.919 22.3825 10.9484 22.1368 11.0012L4.6964 14.7328C3.75478 14.9323 2.94768 15.4897 2.42131 16.3052C1.89494 17.1149 1.71948 18.083 1.91833 19.0277L3.6846 27.3475C4.03551 27.4296 4.40397 27.4766 4.77828 27.4766H22.6106C22.9673 27.4766 23.3124 27.4355 23.6458 27.3592C23.868 27.3123 24.0844 27.2477 24.2949 27.1656C24.5347 27.0776 24.7628 26.972 24.9851 26.8429C26.418 26.0156 27.3888 24.4608 27.3888 22.683V18.347L27.2894 17.8835Z" fill="#1CD434"/>
            <path d="M27.3888 11.218C27.307 10.8542 27.1666 10.4963 26.9736 10.1677C26.4823 9.33455 25.6986 8.74196 24.7687 8.5014L7.50371 4.03638C7.20543 3.96011 6.90131 3.91904 6.59718 3.91904C4.95373 3.91904 3.51499 5.03382 3.10559 6.6356L0 18.7222V22.6827C0 24.4546 0.959165 26.0036 2.38621 26.8308L0.777859 19.2738C0.222246 16.6804 1.87154 14.134 4.45076 13.5825L21.8912 9.85088C22.2246 9.78047 22.5638 9.74527 22.8913 9.74527C24.8739 9.74527 26.6753 10.995 27.3654 12.8843C27.3771 12.9019 27.383 12.9195 27.3888 12.9429V12.7845C27.5058 12.2623 27.5058 11.7284 27.3888 11.218Z" fill="#FBBC04"/>
            <path d="M26.7475 15.3136L26.42 13.7822C26.0632 12.1218 24.5836 10.919 22.8933 10.919C22.6418 10.919 22.3845 10.9483 22.1389 11.0011L4.69844 14.7327C3.75682 14.9322 2.94972 15.4896 2.42335 16.3052C1.89698 17.1149 1.72152 18.083 1.92037 19.0276L3.68664 27.3474C4.03755 27.4296 4.40601 27.4765 4.78032 27.4765H22.6126C22.9694 27.4765 23.3144 27.4354 23.6478 27.3592C23.87 27.3122 24.0864 27.2477 24.297 27.1655C24.5368 27.0775 24.7649 26.9719 24.9871 26.8428L27.2915 17.8835L27.0166 16.5985L26.7475 15.3136Z" fill="url(#paint0_logo)"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M27.3909 18.3468V22.6828C27.3909 24.4606 26.42 26.0154 24.9871 26.8427C24.7649 26.9718 24.5368 27.0774 24.297 27.1654C24.0864 27.2475 23.87 27.3121 23.6478 27.359C23.3144 27.4353 22.9694 27.4764 22.6126 27.4764H4.78032C4.40601 27.4764 4.03755 27.4294 3.68664 27.3473L1.92037 19.0275C1.72152 18.0828 1.89698 17.1147 2.42335 16.305C2.94972 15.4895 3.75682 14.9321 4.69844 14.7326L22.1389 11.001C22.3845 10.9482 22.6418 10.9188 22.8933 10.9188C24.5836 10.9188 26.0633 12.1216 26.42 13.7821L26.7475 15.3135L27.0166 16.5984L27.2915 17.8833L27.3909 18.3468Z" fill="#1CD434"/>
          </g>
          <defs>
            <linearGradient id="paint0_logo" x1="26.4846" y1="0.570058" x2="18.5683" y2="26.5678" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8AC643"/>
              <stop offset="1" stopColor="#294C00"/>
            </linearGradient>
            <clipPath id="clip0_logo">
              <rect width="27.4766" height="27.4766" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </div>
      <span className="logo-text">Swipe</span>
    </div>
  )
}

function LandingPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const features = [
    {
      icon: <Globe size={28} />,
      title: 'All Apps Connected',
      description:
        'Connect Gmail, Slack, Notion, Calendar & more. One unified inbox for everything.',
    },
    {
      icon: <Zap size={28} />,
      title: 'Reply in One Swipe',
      description:
        'Swipe right to accept, left to dismiss, down to edit. Handle notifications at lightning speed.',
    },
    {
      icon: <Sparkles size={28} />,
      title: 'AI-Powered Responses',
      description:
        'Get smart, context-aware reply suggestions powered by AI. Customize and send in seconds.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Connect Your Apps',
      description:
        'Link Gmail, Slack, Notion, Google Calendar, Drive and more in under a minute.',
      icon: <SwatchBook size={24} />,
    },
    {
      number: '02',
      title: 'Swipe Through Cards',
      description:
        'Every notification becomes a card. Swipe to take action instantly without opening each app.',
      icon: <MessageSquare size={24} />,
    },
    {
      number: '03',
      title: 'Let AI Handle the Rest',
      description:
        'AI drafts responses, schedules meetings, and manages your notifications automatically.',
      icon: <Sparkles size={24} />,
    },
  ]

  const integrations = [
    { name: 'Gmail', icon: <Mail size={24} /> },
    { name: 'Slack', icon: <MessageSquare size={24} /> },
    { name: 'Notion', icon: <SwatchBook size={24} /> },
    { name: 'Calendar', icon: <Bell size={24} /> },
    { name: 'Drive', icon: <Globe size={24} /> },
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Product Manager',
      avatar: 'SC',
      text: "I used to spend 45 minutes every morning just catching up on notifications. Now it takes me 5 minutes with Swipe.",
      stars: 5,
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Software Engineer',
      avatar: 'MR',
      text: "The AI responses are surprisingly good. It feels like having a personal assistant that actually understands context.",
      stars: 5,
    },
    {
      name: 'Priya Patel',
      role: 'Startup Founder',
      avatar: 'PP',
      text: "Connecting all my apps into one swipeable feed was a game changer. I can't imagine going back.",
      stars: 5,
    },
  ]

  return (
    <div className="app">
      {/* ========== NAVBAR ========== */}
      <motion.nav
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="nav-container">
          <SwipeLogo />
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
            <a href="#testimonials">Reviews</a>
          </div>
          <a href="#download" className="nav-cta">
            Get Early Access
            <ChevronRight size={16} />
          </a>
        </div>
      </motion.nav>

      {/* ========== HERO ========== */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          <div className="hero-gradient-orb orb-1" />
          <div className="hero-gradient-orb orb-2" />
          <div className="hero-gradient-orb orb-3" />
          <div className="hero-grid" />
        </div>

        <motion.div
          className="hero-container"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="hero-badge" variants={fadeUp}>
              <Sparkles size={14} />
              <span>AI-Powered Notification Hub</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeUp}>
              All Your Apps.
              <br />
              <span className="gradient-text">One Swipe.</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeUp}>
              Connect Gmail, Slack, Notion & more into one AI-powered feed.
              Reply to anything with a single swipe.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <a href="#download" className="btn btn-primary btn-lg">
                <span>Get Early Access</span>
                <ArrowRight size={18} />
              </a>
              <a href="#how-it-works" className="btn btn-ghost btn-lg">
                See How it Works
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeUp}>
              <div className="stat">
                <span className="stat-value">10k+</span>
                <span className="stat-label">Waitlist</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">50k+</span>
                <span className="stat-label">Swipes Daily</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-value">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-phone"
            initial={{ opacity: 0, y: 60, rotateY: -10 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="phone-glow" />
            <PhoneMockup />

            {/* Floating integration icons */}
            <motion.div
              className="floating-icon fi-1"
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Mail size={20} />
            </motion.div>
            <motion.div
              className="floating-icon fi-2"
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <MessageSquare size={20} />
            </motion.div>
            <motion.div
              className="floating-icon fi-3"
              animate={{ y: [-6, 10, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Bell size={20} />
            </motion.div>
            <motion.div
              className="floating-icon fi-4"
              animate={{ y: [6, -10, 6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkles size={20} />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="hero-fade-bottom" />
      </section>

      {/* ========== INTEGRATIONS ========== */}
      <section className="integrations">
        <motion.div
          className="integrations-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={stagger}
        >
          <motion.p className="integrations-label" variants={fadeUp}>
            Works seamlessly with your favorite apps
          </motion.p>
          <motion.div className="integrations-grid" variants={fadeUp}>
            {integrations.map((app) => (
              <div key={app.name} className="integration-item">
                <div className="integration-icon">{app.icon}</div>
                <span>{app.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ========== FEATURES ========== */}
      <section className="features" id="features">
        <motion.div
          className="features-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <div className="section-badge">
              <Zap size={14} />
              <span>Features</span>
            </div>
            <h2 className="section-title">
              Everything you need.
              <br />
              <span className="gradient-text">Nothing you don't.</span>
            </h2>
            <p className="section-subtitle">
              Swipe brings all your notifications into one beautiful, AI-powered
              feed. No more app-switching chaos.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card"
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-link">
                  Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="how-it-works" id="how-it-works">
        <div className="how-bg">
          <div className="how-gradient-orb" />
        </div>
        <motion.div
          className="how-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <div className="section-badge light">
              <Shield size={14} />
              <span>How it Works</span>
            </div>
            <h2 className="section-title light">
              Three steps to
              <br />
              <span className="gradient-text">notification nirvana.</span>
            </h2>
          </motion.div>

          <div className="steps-grid">
            {steps.map((step, i) => (
              <motion.div key={i} className="step-card" variants={fadeUp}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Swipe gesture demo */}
          <motion.div className="swipe-demo" variants={fadeUp}>
            <div className="swipe-card-demo">
              <div className="swipe-card-content">
                <div className="swipe-card-avatar">A</div>
                <div>
                  <div className="swipe-card-title">Meeting Reminder</div>
                  <div className="swipe-card-text">
                    Team standup in 15 minutes
                  </div>
                </div>
              </div>
              <div className="swipe-indicators">
                <div className="swipe-indicator left">
                  <span>Dismiss</span>
                </div>
                <div className="swipe-indicator right">
                  <Check size={16} />
                  <span>Accept</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="testimonials" id="testimonials">
        <motion.div
          className="testimonials-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div className="section-header" variants={fadeUp}>
            <div className="section-badge">
              <Star size={14} />
              <span>Testimonials</span>
            </div>
            <h2 className="section-title">
              Loved by people who
              <br />
              <span className="gradient-text">hate notifications.</span>
            </h2>
          </motion.div>

          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div key={i} className="testimonial-card" variants={fadeUp}>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} fill="var(--green-500)" stroke="none" />
                  ))}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.avatar}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ========== CTA ========== */}
      <section className="cta" id="download">
        <div className="cta-bg">
          <div className="cta-orb cta-orb-1" />
          <div className="cta-orb cta-orb-2" />
        </div>
        <motion.div
          className="cta-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
        >
          <motion.div className="cta-content" variants={fadeUp}>
            <h2 className="cta-title">
              Ready to take back
              <br />
              your notifications?
            </h2>
            <p className="cta-subtitle">
              Join 10,000+ people on the waitlist. Be the first to experience
              the future of notification management.
            </p>
            <div className="cta-form">
              <div className="cta-input-wrap">
                <Mail size={18} />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button className="btn btn-primary btn-lg cta-btn">
                <span>Join Waitlist</span>
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="cta-disclaimer">
              Free early access. No spam, ever.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <SwipeLogo size="small" />
              <p className="footer-tagline">
                All your apps. One swipe.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#how-it-works">How it Works</a>
                <a href="#download">Download</a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Careers</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <Link to="/privacy">Privacy</Link>
                <Link to="/tos">Terms</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Swipe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/tos" element={<TermsOfService />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export { SwipeLogo }
export default App
