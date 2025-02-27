import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  TrendingUp,
  AlertTriangle,
  List,
  ChevronDown,
  Globe,
  Building,
  DollarSign,
  BarChart2,
  Activity,
  Tag,
  Info,
  ShoppingBag,
  ChevronRight,
  Wallet,
  Code,
  Blocks,
  Database,
  X,
  Menu,
  Lock,
  Server,
  Shield,
  FileText,  
} from "lucide-react";

function CompanyList() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExchange, setSelectedExchange] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Google Sheets API endpoint using sheet ID and tab ID
        const sheetId = "1oWP2J3D4esXawykJs-cTFq1VjMkFanMiGlQybAWMQsk";
        const tabId = "1942759132";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${tabId}`;

        const response = await fetch(url);
        const text = await response.text();

        // Parse the JSON-like response from Google Sheets
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));

        // Extract column headers and company data
        const headers = jsonData.table.cols.map((col) => col.label);
        const rows = jsonData.table.rows.map((row) => {
          const company = {};
          row.c.forEach((cell, i) => {
            if (headers[i]) {
              company[headers[i]] = cell ? cell.v : "";
            }
          });
          return company;
        });

        setCompanies(rows);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.log("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  // Filter companies based on search term and filters
  const filteredCompanies = companies.filter((company) => {
    const matchesSearch =
      company["Company Name"]
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      company["Industry"]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company["Headquarters"]?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesExchange =
      selectedExchange === "" || company["Exchange"] === selectedExchange;
    const matchesSector =
      selectedSector === "" || company["Sector"] === selectedSector;

    return matchesSearch && matchesExchange && matchesSector;
  });


  const [activeDomain, setActiveDomain] = useState('');
  const [showData, setShowData] = useState(false);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen  bg-white/80">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-10 bg-white/80">
        <div className="inline-flex bg-red-900/20 p-6 rounded-xl border border-red-700">
          <p className="text-red-500 text-xl font-mono">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white/80 text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/80 via-white/80 to-purple/400">
      {/* Header */}
      
      {/* Navigation */}
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Stolen.ai
          </span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Companies</a>
          <a href="#" className="hover:text-blue-400 transition">Analytics</a>
          <a href="#" className="hover:text-blue-400 transition">Resources</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            className="py-2 px-4 rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all"
          >
            Sign Up
          </button>
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
              Explore AI-powered cybersecurity companies and their innovative solutions protecting the digital frontier.
            </p>
            
      
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
                    left: `${10 + (i * 5) + Math.random() * 5}%`,
                    top: `${20 + (i * 4) + Math.random() * 4}%`,
                    opacity: 0.4 + Math.random() * 0.6
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
                  opacity: 0.7
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Domain search bar */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-gray-700/50">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Search Cybersecurity Company Domains
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                value={activeDomain}
                onChange={(e) => setActiveDomain(e.target.value)}
                placeholder="Enter domain name (e.g., cybershield.ai)"
                className="flex-1 py-3 px-4 bg-gray-700/50 rounded-lg border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Search
              </button>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {companies.map(company => (
                <span
                  key={company.domain}
                  onClick={() => setActiveDomain(company.domain)}
                  className={`py-1 px-3 rounded-md text-sm cursor-pointer transition-colors ${
                    activeDomain === company.domain
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                >
                  {company.domain}
                </span>
              ))}
            </div>
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
      

      {/* Company Cards */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <List className="h-5 w-5 mr-2 text-green-500" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Company Directory
            </span>
          </h2>

          <div className="flex space-x-2">
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded text-gray-400 hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {filteredCompanies.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-16 bg-white-900/50 rounded-lg border border-gray-800">
            <div className="p-4 bg-gray-800 rounded-full mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-400 text-lg mb-2">
              No companies match your search criteria
            </p>
            <p className="text-gray-500 text-sm">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedExchange("");
                setSelectedSector("");
              }}
              className="mt-4 bg-clip-text text-xl text-transparent bg-gradient-to-r from-purple-600 to-pink-600  flex items-center font-bold cursor-pointer"
            >
              Clear all filters
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company, index) => (
              <Link
                to={`/${encodeURIComponent(company["Company Name"] || "")}`}
                key={index}
                className="block group"
              >
                <div className="bg-gradient-to-br from-white-800 to-white-900 rounded-xl overflow-hidden border border-pink-700 group-hover:border-pink-500/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/10 relative">
                  {/* Growth indicator */}
                  <div className="absolute -top-2 -right-2  bg-gradient-to-r from-purple-600 to-pink-600 text-black text-xs font-bold px-3 py-1 rounded-full transform rotate-12 group-hover:rotate-6 transition-transform">
                    +{Math.floor(Math.random() * 50) + 10}%
                  </div>

                  <div className="p-6 border-b border-gray-700">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold group-hover:bg-clip-text text-gray-700 truncate group-hover:bg-gradient-to-r from-purple-600 to-pink-600 transition-colors">
                          {company["Company Name"]}
                        </h2>
                        <div className="flex items-center mt-1 gap-2">
                          <div className="bg-gray-700 text-xs py-0.5 px-2 rounded text-gray-300 flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {company["Industry"] || "N/A"}
                          </div>
                          {company["Exchange"] && (
                            <div className="bg-gray-700 text-xs py-0.5 px-2 rounded text-gray-300">
                              {company["Exchange"]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 mr-3">
                        <Building className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Headquarters</p>
                        <p className="text-sm text-gray-700">
                          {company["Headquarters"] || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 mr-3">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Valuation</p>
                        <p className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                          {company["Valuation"]
                            ? `${company["Valuation"]}`
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-300 mr-3">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Website</p>
                        <a
                          href={company["Website URL"]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {company["Website URL"]?.replace(
                            /^https?:\/\/(www\.)?/,
                            ""
                          ) || "N/A"}
                        </a>
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mr-3">
                            <BarChart2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">
                              Growth Score
                            </p>
                            <div className="h-2 w-32 bg-gray-200 rounded-full mt-1 overflow-hidden">
                              <div
                                className="h-full  bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                                style={{
                                  width: `${
                                    Math.floor(Math.random() * 70) + 30
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-gray-700 p-1.5 rounded-lg hover:bg-gray-600 transition-colors group-hover:bg-gradient-to-r from-purple-600 to-pink-600 ">
                          <Info className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="py-20 mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1000/1000')] opacity-5 bg-fixed"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[150px] opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-xs font-medium mb-4">
              <BarChart2 className="h-3 w-3 mr-1" />
              AI-Powered Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Small Cap, Big Data
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our proprietary algorithms analyze thousands of data points to
              identify high-potential small cap companies before they hit the
              mainstream.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white-800 to-white-400 p-8 rounded-xl border border-purple-700 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div> */}

              <div className="bg-gray-700 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-black transition-colors">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-gray-700 font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Market Analytics
              </h3>
              <p className="text-gray-400">
                Real-time valuation tracking and market performance metrics to
                keep you informed of every market movement.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#"
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:text-green-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white-800 to-white-400 p-8 rounded-xl border border-purple-700 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div> */}

              <div className="bg-gray-700 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-black transition-colors">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-gray-700 font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Growth Score
              </h3>
              <p className="text-gray-400">
                Proprietary AI-driven growth potential scoring system that
                predicts future market performance with remarkable accuracy.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#"
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:text-green-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white-800 to-white-400 p-8 rounded-xl border border-purple-700 backdrop-blur-sm relative group hover:border-purple-500/50 transition-all">
              {/* <div className="absolute top-0 right-0 w-24 h-24 bg-green-500 rounded-full filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div> */}

              <div className="bg-gray-700 p-3 rounded-lg inline-flex mb-6 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-black transition-colors">
                <AlertTriangle className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-gray-700 font-bold mb-4 group-hover:text-purple-400 transition-colors">
                Risk Assessment
              </h3>
              <p className="text-gray-400">
                Comprehensive risk level evaluation and volatility metrics to
                help you make informed investment decisions.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <a
                  href="#"
                  className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 hover:text-green-300 flex items-center"
                >
                  Learn more
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
