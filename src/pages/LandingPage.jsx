import React, { useState } from "react";
import {
  Shield,
  Lock,
  Database,
  Server,
  FileText,
  Users,
  BarChart2,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [activeDomain, setActiveDomain] = useState("");
  const [showData, setShowData] = useState(false);

  // Cybersecurity company data
  const companies = [
    {
      name: "CyberShield AI",
      domain: "cybershield.ai",
      focus: "AI Threat Detection",
      aiRole: "AI-powered Malware Detection",
      customers: "Enterprises",
      category: "SaaS",
      threatIntel: "Yes",
      biometric: "AI-based Facial Recognition",
      fraudDetection: "Yes",
      blockchain: "Yes",
      ransomware: "Yes",
      socAutomation: "AI-driven SOC Automation",
      zeroTrust: "Yes",
      clients: "US Department of Defense, Microsoft, Boeing",
      patents: "17 AI patents in cybersecurity",
    },
    {
      name: "SecureNet",
      domain: "securenet.io",
      focus: "Network Security",
      aiRole: "Intrusion Detection",
      customers: "SMBs",
      category: "Cloud Security",
      threatIntel: "Yes",
      biometric: "Fingerprint Analysis",
      fraudDetection: "Yes",
      blockchain: "No",
      ransomware: "Yes",
      socAutomation: "Partial AI automation",
      zeroTrust: "Yes",
      clients: "Amazon, Google, Salesforce",
      patents: "9 patents in AI-driven network security",
    },
    {
      name: "GuardianAI",
      domain: "guardian.ai",
      focus: "Endpoint Security",
      aiRole: "Automated Patching",
      customers: "Enterprises, Governments",
      category: "On-Premise Solutions",
      threatIntel: "Yes",
      biometric: "Voice Recognition",
      fraudDetection: "Yes",
      blockchain: "Yes",
      ransomware: "Yes",
      socAutomation: "Full AI-driven SOC",
      zeroTrust: "Yes",
      clients: "UK Government, JP Morgan, Shell",
      patents: "23 patents in AI cybersecurity",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white">
      {/* Navigation */}
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Stolen.ai
          </span>
        </div>
      </header>

      {/* Hero Section - Simplified */}
      <section className="pt-16 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Cybersecurity</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Intelligence Platform
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-lg">
              Explore AI-powered cybersecurity companies and their innovative
              solutions protecting the digital frontier.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to={"/CompanyList"}
                onClick={() => setShowData(!showData)}
                className="py-3 px-8 rounded-lg bg-blue-600 hover:bg-blue-700 font-medium flex items-center gap-2 transition-colors"
              >
                <Database className="w-5 h-5" />
                {showData ? "Hide Companies" : "View Companies"}
              </Link>
            </div>
          </div>

          {/* Simple Globe Visualization - Static Version */}
          <div className="relative aspect-square max-w-lg w-full mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-xl"></div>
            <div className="relative h-full w-full rounded-full bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/30 overflow-hidden">
              {/* Globe grid lines - Static */}
              <div className="absolute inset-0 border-2 border-blue-500/10 rounded-full"></div>
              <div className="absolute inset-2 border border-blue-500/10 rounded-full"></div>
              <div className="absolute inset-4 border border-blue-500/10 rounded-full"></div>
              <div className="absolute inset-0 w-full h-[1px] bg-blue-500/20 top-1/2"></div>
              <div className="absolute inset-0 w-[1px] h-full bg-blue-500/20 left-1/2"></div>

              {/* Static dots */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full"
                  style={{
                    left: `${10 + i * 5 + Math.random() * 5}%`,
                    top: `${20 + i * 4 + Math.random() * 4}%`,
                    opacity: 0.4 + Math.random() * 0.6,
                  }}
                />
              ))}

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
            </div>

            {/* Data points around the globe - Static */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-blue-500"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${10 + i * 20}%`,
                  opacity: 0.7,
                }}
              />
            ))}
          </div>
        </div>

        {/* Static security stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-900/30 rounded-lg">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Global Protection</h3>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">14.2M</div>
            <p className="text-gray-400">Threats detected this month</p>
            <div className="mt-3 text-green-400 text-sm flex items-center">
              <BarChart2 className="w-4 h-4 mr-1" />
              +24% from previous period
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-purple-900/30 rounded-lg">
                <Server className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">AI Detection Rate</h3>
            </div>
            <div className="text-4xl font-bold text-purple-400 mb-2">99.7%</div>
            <p className="text-gray-400">Average accuracy across platforms</p>
            <div className="mt-3 text-green-400 text-sm flex items-center">
              <BarChart2 className="w-4 h-4 mr-1" />
              +2.3% improved accuracy
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-indigo-900/30 rounded-lg">
                <Lock className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold">Response Time</h3>
            </div>
            <div className="text-4xl font-bold text-indigo-400 mb-2">1.2s</div>
            <p className="text-gray-400">Average threat mitigation time</p>
            <div className="mt-3 text-green-400 text-sm flex items-center">
              <BarChart2 className="w-4 h-4 mr-1" />
              -0.3s from industry average
            </div>
          </div>
        </div>
      </section>

      {/* Companies Data Section */}
      {showData && (
        <section className="px-8 pb-20 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2">Cybersecurity Companies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore detailed information about leading AI-powered
              cybersecurity companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.name}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{company.name}</h3>
                      <p className="text-blue-400">{company.domain}</p>
                    </div>
                    <div className="p-2 bg-blue-900/30 rounded-lg">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">Focus Area</p>
                        <p>{company.focus}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Server className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">AI Role</p>
                        <p>{company.aiRole}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-400">
                          Target Customers
                        </p>
                        <p>{company.customers}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-sm text-gray-400">Threat Intel</p>
                      <p
                        className={
                          company.threatIntel === "Yes"
                            ? "text-green-400"
                            : "text-gray-300"
                        }
                      >
                        {company.threatIntel}
                      </p>
                    </div>

                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-sm text-gray-400">Ransomware</p>
                      <p
                        className={
                          company.ransomware === "Yes"
                            ? "text-green-400"
                            : "text-gray-300"
                        }
                      >
                        {company.ransomware}
                      </p>
                    </div>

                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-sm text-gray-400">Zero Trust</p>
                      <p
                        className={
                          company.zeroTrust === "Yes"
                            ? "text-green-400"
                            : "text-gray-300"
                        }
                      >
                        {company.zeroTrust}
                      </p>
                    </div>

                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <p className="text-sm text-gray-400">Blockchain</p>
                      <p
                        className={
                          company.blockchain === "Yes"
                            ? "text-green-400"
                            : "text-gray-300"
                        }
                      >
                        {company.blockchain}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400 mb-1">Major Clients</p>
                    <p className="text-sm">{company.clients}</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-4 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-colors">
                  <div className="flex justify-between">
                    <p className="text-sm">{company.patents}</p>
                    <button className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-xl font-bold text-white">Stolen.ai</span>
              </div>
              <p className="text-gray-400 mb-4">
                The leading cybersecurity intelligence platform for monitoring
                AI-powered security solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Knowledge Base
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-blue-400">
                    Research Papers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">info@stolen.ai</li>
                <li className="text-gray-400">+1 (800) 555-0123</li>
                <li className="text-gray-400">
                  123 Security St, San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              © 2025 Stolen.ai. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-400">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Security status indicator */}
      <div className="fixed bottom-4 right-4 bg-gray-800/70 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50 shadow-lg z-50 hidden md:flex items-center gap-3">
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        <span className="text-sm">Security Status: Protected</span>
      </div>
    </div>
  );
};

export default LandingPage;
