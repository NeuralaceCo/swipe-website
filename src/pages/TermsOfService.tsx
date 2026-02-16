import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { SwipeLogo } from '../App'

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/"><SwipeLogo /></Link>
        </div>
      </nav>

      <div className="legal-page">
        <div className="legal-container">
          <div className="legal-header">
            <h1>Terms of Service</h1>
            <p className="legal-updated">Last updated: February 13, 2026</p>
          </div>

          <div className="legal-content">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Swipe application ("Service"), you agree to be bound by these
                Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or
                use the Service.
              </p>
            </section>

            <section>
              <h2>2. Description of Service</h2>
              <p>
                Swipe is an AI-powered notification and communication management platform. The Service
                connects to your third-party applications via official APIs and integration platforms
                (such as the Gmail API and Composio), processes incoming data (emails, messages,
                notifications), and presents them as actionable cards in a unified feed. The Service
                provides features including but not limited to:
              </p>
              <ul>
                <li>Data ingestion from connected applications (Gmail, Slack, Notion, Google Calendar, Google Drive, and others) via their official APIs and authorized integration platforms</li>
                <li>Processing of emails, messages, and notifications into swipeable card formats</li>
                <li>AI-generated response suggestions based on card content and user context</li>
                <li>User memory profiles that are continuously updated based on your communication patterns and preferences to provide personalized, context-aware responses</li>
                <li>Swipe-based card management (accept, dismiss, edit, reply)</li>
              </ul>
            </section>

            <section>
              <h2>3. User Accounts</h2>
              <p>
                To use the Service, you must create an account and provide accurate, complete
                information. You are responsible for maintaining the confidentiality of your account
                credentials and for all activities that occur under your account.
              </p>
              <p>
                You must be at least 13 years of age to use the Service. If you are under 18, you
                must have parental or guardian consent.
              </p>
            </section>

            <section>
              <h2>4. Third-Party Integrations and Data Collection</h2>
              <p>
                The Service connects with third-party applications (e.g., Gmail, Slack, Notion, Google
                Calendar, Google Drive) through their official APIs and authorized integration platforms
                such as Composio. By connecting these services, you authorize Swipe to:
              </p>
              <ul>
                <li>Access and retrieve your emails, messages, notifications, and other data from connected platforms</li>
                <li>Process this data to generate cards that appear in your Swipe feed</li>
                <li>Analyze your communication patterns to build and update your user memory profile</li>
                <li>Use your data to generate AI-powered response suggestions</li>
              </ul>
              <p>
                All data collected from third-party integrations is encrypted both in transit (TLS)
                and at rest (AES-256). You acknowledge that your use of third-party services is
                subject to their respective terms of service and privacy policies.
              </p>
            </section>

            <section>
              <h2>5. User Memories</h2>
              <p>
                The Service maintains a "memory" profile for each user, which is derived from your
                connected application data and interactions within Swipe. These memories are used to:
              </p>
              <ul>
                <li>Provide personalized, context-aware AI response suggestions</li>
                <li>Improve the relevance and accuracy of card prioritization</li>
                <li>Tailor the Service experience to your communication style and preferences</li>
              </ul>
              <p>
                User memories are stored in encrypted form and are not shared with third parties. You
                may request deletion of your memory profile at any time by deleting your account or
                contacting us.
              </p>
            </section>

            <section>
              <h2>6. AI-Generated Content</h2>
              <p>
                The Service uses artificial intelligence to process your connected application data,
                generate cards, and suggest responses. You acknowledge that:
              </p>
              <ul>
                <li>AI-generated content may not always be accurate or appropriate</li>
                <li>You are responsible for reviewing and approving any AI-generated responses before they are sent</li>
                <li>Swipe is not liable for any consequences arising from AI-generated content that you choose to send</li>
                <li>AI processing relies on data from your connected accounts and your user memory profile</li>
              </ul>
            </section>

            <section>
              <h2>7. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to gain unauthorized access to the Service or its related systems</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Use the Service to send spam, phishing messages, or other unsolicited communications</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                <li>Use automated means to access the Service beyond its intended functionality</li>
              </ul>
            </section>

            <section>
              <h2>8. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Swipe
                and are protected by international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
              <p>
                You retain ownership of any content you create, upload, or transmit through the
                Service. By using the Service, you grant Swipe a limited license to process your
                content solely for the purpose of providing the Service.
              </p>
            </section>

            <section>
              <h2>9. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Swipe shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages, including but not limited to
                loss of data, profits, or business opportunities, arising out of or in connection with
                your use of the Service.
              </p>
            </section>

            <section>
              <h2>10. Termination</h2>
              <p>
                We may terminate or suspend your account and access to the Service at our sole
                discretion, without prior notice, for conduct that we determine violates these Terms
                or is harmful to other users, us, or third parties.
              </p>
              <p>
                You may terminate your account at any time by contacting us. Upon termination, your
                right to use the Service will immediately cease.
              </p>
            </section>

            <section>
              <h2>11. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify you of any
                material changes by posting the updated Terms on this page and updating the "Last
                updated" date. Your continued use of the Service after any changes constitutes
                acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2>12. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the
                State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2>13. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="legal-contact">
                legal@neuralace.co
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            <p>&copy; 2026 Neuralace Inc. All rights reserved.</p>
            <div className="footer-legal-links">
              <Link to="/privacy">Privacy</Link>
              <Link to="/tos">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
