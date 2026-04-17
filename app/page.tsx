import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-outline-variant/15">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="text-xl font-semibold">Kinbo</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="hover:text-primary-container transition-colors">Features</a>
            <a href="#experience" className="hover:text-primary-container transition-colors">Experience</a>
            <a href="#scenarios" className="hover:text-primary-container transition-colors">Scenarios</a>
            <a href="#download" className="gradient-primary text-on-primary px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity">
              Download for Mac
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="text-label text-primary-container">
                macOS Keyboard Enhancement
              </div>
              <h1 className="text-display">
                Elevate Your Typing Experience
              </h1>
              <p className="text-body-lg text-on-surface/80 max-w-lg">
                Kinbo brings immersive mechanical keyboard sounds to your Mac, transforming every keystroke and mouse click into a satisfying auditory experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#download" className="gradient-primary text-on-primary px-8 py-4 rounded-full font-medium text-center hover:opacity-90 transition-opacity">
                  Download for Mac
                </a>
                <a href="#features" className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-medium text-center hover:bg-surface-container-low transition-colors">
                  Explore Features
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-surface-container-highest rounded-2xl p-1 ambient-shadow">
                <div className="bg-surface-variant rounded-xl p-2 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-surface-container-lowest rounded-b-xl p-6">
                  <div className="aspect-video bg-surface-variant rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl mb-2">🎵</div>
                      <p className="text-sm text-on-surface/60">Kinbo App Interface</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-label text-primary-container mb-4">
              Core Features
            </div>
            <h2 className="text-headline max-w-3xl mx-auto">
              Immersive Sound, Personalized Control
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">⌨️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Keyboard Sound Simulation</h3>
              <p className="text-on-surface/70">
                17 classic keyboard sound profiles with layered audio for realistic mechanical keyboard feel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🖱️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Mouse Click Sounds</h3>
              <p className="text-on-surface/70">
                Distinct sound feedback for left and right clicks with independent volume control.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎛️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Settings</h3>
              <p className="text-on-surface/70">
                Independent volume controls, one-click sound profile switching, and startup options.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Intelligent Randomization</h3>
              <p className="text-on-surface/70">
                Subtle variations in volume, pitch, and delay to avoid monotonous sound repetition.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Feedback</h3>
              <p className="text-on-surface/70">
                Instant sound response with minimal latency for a seamless typing experience.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightweight Design</h3>
              <p className="text-on-surface/70">
                Menu bar app with no Dock icon, running silently in the background without resource drain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-label text-primary-container mb-4">
              User Experience
            </div>
            <h2 className="text-headline max-w-3xl mx-auto">
              Designed for Seamless Integration
            </h2>
          </div>

          <div className="space-y-20">
            {/* Experience 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Minimal Installation</h3>
                <p className="text-body-lg text-on-surface/80 mb-6">
                  Drag-and-drop installation with automatic permission detection and guidance for first-time users.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <span>Simple drag-and-drop installation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <span>Automatic permission detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <span>Intuitive menu bar interface</span>
                  </li>
                </ul>
              </div>
              <div className="bg-surface-container-highest rounded-2xl p-8 ambient-shadow">
                <div className="aspect-video bg-surface-variant rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📥</div>
                    <p className="text-sm text-on-surface/60">Installation Process</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 bg-surface-container-highest rounded-2xl p-8 ambient-shadow">
                <div className="aspect-video bg-surface-variant rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔊</div>
                    <p className="text-sm text-on-surface/60">Sound Customization</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-6">Immersive Sound Experience</h3>
                <p className="text-body-lg text-on-surface/80 mb-6">
                  Multi-layered sound effects that simulate the complex acoustics of real mechanical keyboards.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <span>Multi-layered sound effects</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <span>17 preset sound profiles</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                    <span>Adaptive volume control</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Scenarios */}
      <section id="scenarios" className="py-20 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-label text-primary-container mb-4">
              Use Scenarios
            </div>
            <h2 className="text-headline max-w-3xl mx-auto">
              Perfect for Every Situation
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Scenario 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Office Environment</h3>
              <p className="text-on-surface/70">
                Enhance typing experience, improve focus, and adjust volume for quiet workspaces.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Gaming & Entertainment</h3>
              <p className="text-on-surface/70">
                Get instant sound feedback for game controls and choose sound profiles that match your gaming style.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ambient-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Learning & Practice</h3>
              <p className="text-on-surface/70">
                Receive real-time feedback during typing practice and create a focused learning environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-headline mb-6">
            Ready to Elevate Your Typing Experience?
          </h2>
          <p className="text-body-lg text-on-surface/80 mb-10 max-w-2xl mx-auto">
            Download Kinbo today and transform your Mac into a tactile typing haven with immersive mechanical keyboard sounds.
          </p>
          <a href="#" className="gradient-primary text-on-primary px-10 py-4 rounded-full font-medium inline-block hover:opacity-90 transition-opacity">
            Download for Mac
          </a>
          <p className="text-sm text-on-surface/60 mt-6">
            Requires macOS 10.14 or later • No data collection • Local-only operation
          </p>
        </div>
      </section>

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
              <a href="/privacy-policy" className="text-on-surface/70 hover:text-primary-container transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-on-surface/70 hover:text-primary-container transition-colors">Terms of Service</a>
              <a href="#" className="text-on-surface/70 hover:text-primary-container transition-colors">Contact</a>
              <p className="text-sm text-on-surface/60">© 2026 Kinbo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
