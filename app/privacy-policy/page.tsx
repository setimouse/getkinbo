import Link from 'next/link';

export default function PrivacyPolicy() {
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
                        <Link href="/privacy-policy" className="text-primary-container font-medium">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-primary-container transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-headline mb-6">Privacy Policy</h1>
                            <p className="text-body-lg text-on-surface/80">
                                Last updated: April 17, 2026
                            </p>
                        </div>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                            <p className="text-body-lg text-on-surface/80 mb-4">
                                Kinbo is a macOS menu bar application that provides real-time sound feedback for keyboard and mouse operations, enhancing your typing and interaction experience.
                            </p>
                            <p className="text-body-lg text-on-surface/80">
                                This Privacy Policy explains how Kinbo handles your information and protects your privacy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
                            <p className="text-body-lg text-on-surface/80 mb-4">
                                <strong>✓ No User Data Collection</strong>
                            </p>
                            <ul className="space-y-3 text-body-lg text-on-surface/80">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Personal Information:</strong> We do not collect names, email addresses, phone numbers, or other personal identifiers</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Input Content:</strong> We do not record or store any keyboard input content</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Usage Data:</strong> We do not collect usage frequency, duration, or preferences</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Device Information:</strong> We do not collect device model, system version, or hardware information</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Location Information:</strong> We do not access or store your geographic location data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Behavioral Data:</strong> We do not track app usage behavior or browsing history</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">3. Data Storage</h2>
                            <p className="text-body-lg text-on-surface/80 mb-4">
                                <strong>✓ Local Storage Only</strong>
                            </p>
                            <ul className="space-y-3 text-body-lg text-on-surface/80">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Application Settings Only:</strong></span>
                                </li>
                                <ul className="ml-8 space-y-2 text-body-lg text-on-surface/80">
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-container/70 mt-2"></div>
                                        <span>Current sound configuration</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-container/70 mt-2"></div>
                                        <span>Keyboard and mouse volume settings</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary-container/70 mt-2"></div>
                                        <span>Startup on login status</span>
                                    </li>
                                </ul>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Storage Method:</strong> We use macOS standard preference storage mechanism (NSUserDefaults)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>No Cloud Synchronization:</strong> All settings are stored locally on your device, no cloud sync or backup</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Data Removal:</strong> All settings data is automatically cleared when the app is uninstalled</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">4. Permissions</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-low">
                                            <th className="py-3 px-4 text-left font-semibold">Permission</th>
                                            <th className="py-3 px-4 text-left font-semibold">Purpose</th>
                                            <th className="py-3 px-4 text-left font-semibold">Necessity</th>
                                            <th className="py-3 px-4 text-left font-semibold">Handling</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">Accessibility</td>
                                            <td className="py-3 px-4">Monitor global keyboard and mouse events to trigger sound effects</td>
                                            <td className="py-3 px-4">Required</td>
                                            <td className="py-3 px-4">Requested on first launch, guiding users to system settings</td>
                                        </tr>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">Audio Playback</td>
                                            <td className="py-3 px-4">Play sound effect feedback</td>
                                            <td className="py-3 px-4">Implicit</td>
                                            <td className="py-3 px-4">Automatically granted by the system</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">5. Security Measures</h2>
                            <ul className="space-y-3 text-body-lg text-on-surface/80">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Event Handling:</strong> We only process event types and key codes, not specific characters or keystroke content</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Memory Management:</strong> After preloading audio files, we do not retain original file paths</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Permission Checks:</strong> We regularly verify accessibility permission status to ensure proper functionality</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Event Passing:</strong> After monitoring, events are fully passed through, not intercepted or modified</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Minimum Permission Principle:</strong> We only request necessary accessibility permissions, no other unnecessary system permissions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Code Signing:</strong> The app is code-signed to ensure security and integrity</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">6. Privacy Compliance</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-low">
                                            <th className="py-3 px-4 text-left font-semibold">Regulation</th>
                                            <th className="py-3 px-4 text-left font-semibold">Compliance Status</th>
                                            <th className="py-3 px-4 text-left font-semibold">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">GDPR (EU General Data Protection Regulation)</td>
                                            <td className="py-3 px-4">✅ Compliant</td>
                                            <td className="py-3 px-4">No personal data collection, no user consent required, complies with data minimization principle</td>
                                        </tr>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">CCPA/CPRA (California Consumer Privacy Act)</td>
                                            <td className="py-3 px-4">✅ Compliant</td>
                                            <td className="py-3 px-4">No personal information collection, no data sales, complies with transparency requirements</td>
                                        </tr>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">LGPD (Brazilian General Data Protection Law)</td>
                                            <td className="py-3 px-4">✅ Compliant</td>
                                            <td className="py-3 px-4">No personal data collection, complies with data protection principles</td>
                                        </tr>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">PIPL (People's Republic of China Personal Information Protection Law)</td>
                                            <td className="py-3 px-4">✅ Compliant</td>
                                            <td className="py-3 px-4">No personal information collection, local data storage, complies with relevant requirements</td>
                                        </tr>
                                        <tr className="border-t border-outline-variant/15">
                                            <td className="py-3 px-4">Apple App Store Review Guidelines</td>
                                            <td className="py-3 px-4">✅ Compliant</td>
                                            <td className="py-3 px-4">Follows permission usage规范, no user data collection, complies with App Store review requirements</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">7. App Privacy Labels</h2>
                            <p className="text-body-lg text-on-surface/80 mb-4">
                                Kinbo does not collect any data categories as defined by Apple's App Privacy guidelines:
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-surface-container-low p-4 rounded-lg">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Identifiers</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Usage Data</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Diagnostic Data</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Location Data</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Contacts</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Photos</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-surface-container-low p-4 rounded-lg">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Files</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Health & Fitness</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Financial Information</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Sensitive Information</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Communications</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary-container">❌</span>
                                            <span>Device ID</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">8. Privacy Policy Summary</h2>
                            <h3 className="text-xl font-semibold mb-3">8.1 Core Principles</h3>
                            <ul className="space-y-3 text-body-lg text-on-surface/80">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>No Data Collection:</strong> Kinbo does not collect any user personal data or usage data</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Local Storage:</strong> Only stores app settings, no cloud synchronization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Minimum Permissions:</strong> Only uses necessary accessibility permissions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Transparent Operations:</strong> Clearly informs about permission usage, no hidden operations</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">8.2 User Rights</h3>
                            <ul className="space-y-3 text-body-lg text-on-surface/80">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Right to Know:</strong> Users have the right to understand app permission usage and data processing</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Right to Control:</strong> Users can manage accessibility permissions in system settings at any time</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span><strong>Right to Delete:</strong> All settings data is automatically cleared when the app is uninstalled</span>
                                </li>
                            </ul>

                            <h3 className="text-xl font-semibold mb-3 mt-6">8.3 Privacy Protection Commitment</h3>
                            <ul className="space-y-3 text-body-lg text-on-surface/80">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span>Respect user privacy, do not collect any personal information</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span>Only use necessary system permissions, do not request additional permissions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span>Transparently inform about permission usage to avoid user misunderstanding</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 rounded-full bg-primary-container mt-2"></div>
                                    <span>Continuously improve privacy protection measures to adapt to new privacy regulation requirements</span>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
                            <p className="text-body-lg text-on-surface/80">
                                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@kinbo.app" className="text-primary-container hover:underline">contact@kinbo.app</a>
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