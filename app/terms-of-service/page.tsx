import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <Link href="/" className="text-xl font-semibold">Kinbo</Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary-container transition-colors">Home</Link>
            <Link href="/privacy-policy" className="hover:text-primary-container transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-primary-container font-medium">Terms of Service</Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div>
              <h1 className="text-headline mb-6">Terms of Service</h1>
              <p className="text-body-lg text-on-surface/80">
                Last updated: April 17, 2026
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-body-lg text-on-surface/80 mb-4">
                Welcome to Kinbo! These Terms of Service govern your use of our macOS menu bar application that provides real-time sound feedback for keyboard and mouse operations.
              </p>
              <p className="text-body-lg text-on-surface/80">
                By using Kinbo, you agree to these Terms. If you do not agree, please do not use the application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
              <p className="text-body-lg text-on-surface/80 mb-4">
                Kinbo is a macOS menu bar application that:
              </p>
              <ul className="space-y-3 text-body-lg text-on-surface/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Provides real-time sound feedback for keyboard and mouse operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Offers 17 preset sound profiles for different keyboard styles</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Allows independent volume control for keyboard and mouse sounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Runs as a menu bar application without a Dock icon</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Permissions</h2>
              <p className="text-body-lg text-on-surface/80 mb-4">
                Kinbo requires the following permissions to function properly:
              </p>
              <ul className="space-y-3 text-body-lg text-on-surface/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span><strong>Accessibility Permission:</strong> Required to monitor global keyboard and mouse events for sound feedback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span><strong>Audio Playback Permission:</strong> Required to play sound effects</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
              <ul className="space-y-3 text-body-lg text-on-surface/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>You must ensure that you have the necessary permissions to use Kinbo on your device</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>You must use Kinbo in compliance with applicable laws and regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>You are responsible for any consequences resulting from your use of Kinbo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>You should use Kinbo responsibly and avoid excessive volume that may cause hearing damage</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Limitations of Liability</h2>
              <p className="text-body-lg text-on-surface/80 mb-4">
                Kinbo is provided "as is" and "as available" without any warranties of any kind. We do not guarantee:
              </p>
              <ul className="space-y-3 text-body-lg text-on-surface/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>That Kinbo will function without interruption or errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>That Kinbo will perfectly simulate real keyboard sounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Compatibility with all macOS versions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>That Kinbo will not be affected by system permission changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>That Kinbo will not cause any hearing issues or discomfort</span>
                </li>
              </ul>
              <p className="text-body-lg text-on-surface/80 mt-4">
                In no event shall Kinbo or its developers be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of Kinbo, including but not limited to:
              </p>
              <ul className="space-y-3 text-body-lg text-on-surface/80 mt-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Hearing damage or other health issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>System performance issues or conflicts with other applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Data loss or corruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Any other damages resulting from your use of Kinbo</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
              <ul className="space-y-3 text-body-lg text-on-surface/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Kinbo is only intended to enhance user experience and does not guarantee to perfectly simulate real keyboard sounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>Accessibility permission is only used for event monitoring and not for any other purpose</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>If system permission changes cause functional issues, you may need to reauthorize</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>App does not take responsibility for any hearing problems caused by audio playback</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>App does not guarantee full compatibility with all macOS versions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                  <span>App is not responsible for any direct or indirect losses incurred during use</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
              <p className="text-body-lg text-on-surface/80 mb-4">
                All intellectual property rights in Kinbo, including but not limited to copyrights, trademarks, and trade secrets, are owned by Kinbo's developers.
              </p>
              <p className="text-body-lg text-on-surface/80">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, or otherwise exploit any part of Kinbo without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Changes to These Terms</h2>
              <p className="text-body-lg text-on-surface/80">
                We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. Your continued use of Kinbo after any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
              <p className="text-body-lg text-on-surface/80">
                You may terminate your use of Kinbo at any time by uninstalling the application. We may also terminate or suspend your access to Kinbo if you violate these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
              <p className="text-body-lg text-on-surface/80">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Kinbo's developers are located, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
              <p className="text-body-lg text-on-surface/80">
                If you have any questions about these Terms of Service, please contact us at: <a href="mailto:contact@kinbo.app" className="text-primary-container hover:underline">contact@kinbo.app</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-outline-variant/15">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-semibold">Kinbo</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <Link href="/" className="text-on-surface/70 hover:text-primary-container transition-colors">Home</Link>
              <Link href="/privacy-policy" className="text-on-surface/70 hover:text-primary-container transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-on-surface/70 hover:text-primary-container transition-colors">Terms of Service</Link>
              <p className="text-sm text-on-surface/60">© 2026 Kinbo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}