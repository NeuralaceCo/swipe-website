import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { SwipeLogo } from '../App'
import { ChevronRight } from 'lucide-react'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/"><SwipeLogo /></Link>
          <div className="nav-links">
            <Link to="/#features">Features</Link>
            <Link to="/#how-it-works">How it Works</Link>
            <Link to="/#testimonials">Reviews</Link>
          </div>
          <Link to="/#download" className="nav-cta">
            Get Early Access
            <ChevronRight size={16} />
          </Link>
        </div>
      </nav>

      <div className="legal-page">
        <div className="legal-container">
          <div className="legal-header">
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: February 13, 2026</p>
          </div>

          <div className="legal-content">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Swipe ("we," "our," or "us") is committed to protecting your privacy. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your information when you
                use our application and services (collectively, the "Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. By using the Service, you consent to the
                data practices described in this policy.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <ul>
                <li><strong>Account Information:</strong> Name, email address, and profile information when you create an account</li>
                <li><strong>Connected Account Data:</strong> When you connect third-party services, we collect data from those platforms via their official APIs and authorized integration platforms (such as the Gmail API and Composio). This includes emails, messages, calendar events, documents, and notifications</li>
                <li><strong>Communications:</strong> Messages and responses you compose or approve through the Service</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <ul>
                <li><strong>Usage Data:</strong> How you interact with the Service, including swipe actions, card interactions, features used, and session duration</li>
                <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
                <li><strong>Log Data:</strong> IP address, browser type, access times, and referring URLs</li>
              </ul>

              <h3>2.3 Derived Information</h3>
              <ul>
                <li><strong>User Memories:</strong> We build and continuously update a personalized memory profile based on your connected application data and interactions. This includes communication patterns, preferences, scheduling habits, and contextual information derived from your emails, messages, and other connected data</li>
                <li><strong>Card Data:</strong> Processed representations of your emails, messages, and notifications formatted as actionable cards</li>
              </ul>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Ingest and process data from connected applications (Gmail, Slack, Notion, Google Calendar, Google Drive) to create actionable cards</li>
                <li>Build and update your user memory profile to provide personalized, context-aware experiences</li>
                <li>Generate AI-powered response suggestions tailored to your communication style and context</li>
                <li>Provide, maintain, and improve the Service</li>
                <li>Send you service-related notifications and updates</li>
                <li>Analyze usage patterns to improve user experience</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2>4. AI Processing and User Memories</h2>
              <p>
                Our Service uses artificial intelligence to process data from your connected
                applications, generate cards, suggest responses, and maintain your user memory
                profile. This processing is core to the Service's functionality. We want you to
                understand:
              </p>
              <ul>
                <li>AI models process your emails, messages, and notifications to create cards and generate contextually appropriate response suggestions</li>
                <li>Your user memory profile is continuously updated based on incoming data from connected accounts, enabling increasingly personalized and accurate responses over time</li>
                <li>We do not use your personal communications or memory profiles to train general-purpose AI models</li>
                <li>All AI processing is performed on encrypted data using industry-standard security measures</li>
                <li>You can review and modify any AI-generated content before it is sent</li>
                <li>You can request deletion of your memory profile at any time</li>
              </ul>
            </section>

            <section>
              <h2>5. Third-Party Integrations</h2>
              <p>
                Swipe connects to third-party applications through their official APIs and authorized
                integration platforms such as Composio. When you connect a service, we access the
                data necessary to ingest your emails, messages, and notifications and process them
                into cards. We adhere to each platform's API usage policies and data handling
                requirements.
              </p>
              <p>
                We do not sell or share your third-party application data with advertisers or data
                brokers. Access to your connected account data is limited to providing the Service's
                core functionality, including card generation and memory updates.
              </p>
            </section>

            <section>
              <h2>6. Data Sharing and Disclosure</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>Service Providers:</strong> With trusted third-party companies that assist us in operating the Service (e.g., cloud hosting, analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Safety:</strong> To protect the rights, property, or safety of Swipe, our users, or the public</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              </ul>
              <p>
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2>7. Data Security</h2>
              <p>
                All data handled by Swipe is encrypted both in transit and at rest. We implement
                comprehensive security measures to protect your information, including:
              </p>
              <ul>
                <li>Encryption of all data in transit using TLS 1.3</li>
                <li>Encryption of all data at rest using AES-256, including emails, messages, cards, and user memory profiles</li>
                <li>Regular security audits and penetration testing</li>
                <li>Access controls and authentication requirements for our systems</li>
                <li>Secure OAuth token-based authentication for all third-party integrations</li>
                <li>Data isolation between user accounts</li>
              </ul>
              <p>
                While we strive to protect your information, no method of transmission or storage is
                100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>8. Data Retention</h2>
              <p>
                We retain your information for as long as your account is active or as needed to
                provide the Service. Specifically:
              </p>
              <ul>
                <li><strong>Card Data:</strong> Processed cards are retained to enable your feed history and may be archived after 90 days of inactivity</li>
                <li><strong>User Memories:</strong> Your memory profile is maintained and updated for as long as your account is active</li>
                <li><strong>Raw Integration Data:</strong> Emails, messages, and notifications from connected apps are processed into cards and are not stored in raw form longer than necessary</li>
              </ul>
              <p>
                When you delete your account, we will delete all your data including your user memory
                profile, card history, and integration tokens within 30 days, except where retention
                is required by law.
              </p>
            </section>

            <section>
              <h2>9. Your Rights</h2>
              <p>Depending on your location, you may have the following rights:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a portable copy of your data</li>
                <li><strong>Opt-out:</strong> Opt out of certain data processing activities</li>
                <li><strong>Disconnect:</strong> Revoke access to any connected third-party application at any time</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at privacy@neuralace.co.
              </p>
            </section>

            <section>
              <h2>10. Children's Privacy</h2>
              <p>
                The Service is not intended for children under 13 years of age. We do not knowingly
                collect personal information from children under 13. If we discover that we have
                collected information from a child under 13, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2>11. International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your
                country of residence. We ensure appropriate safeguards are in place for international
                data transfers in compliance with applicable data protection laws.
              </p>
            </section>

            <section>
              <h2>12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                material changes by posting the updated policy on this page and updating the "Last
                updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at:
              </p>
              <p className="legal-contact">
                privacy@neuralace.co
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <Link to="/"><SwipeLogo size="small" /></Link>
              <p className="footer-tagline">All your apps. One swipe.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Product</h4>
                <Link to="/#features">Features</Link>
                <Link to="/#how-it-works">How it Works</Link>
                <Link to="/#download">Download</Link>
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
