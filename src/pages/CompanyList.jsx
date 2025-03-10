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
        const sheetId = "1oWP2J3D4esXawykJs-cTFq1VjMkFanMiGlQybAWMQsk";
        const tabId = "1942759132";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&gid=${tabId}`;

        const response = await fetch(url);
        const text = await response.text();
        const jsonData = JSON.parse(text.substring(47).slice(0, -2));

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

  const [activeDomain, setActiveDomain] = useState("");
  const [showData, setShowData] = useState(false);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-blue-950">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-blue-300 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-10 bg-blue-950">
        <div className="inline-flex bg-red-900/20 p-6 rounded-xl border border-red-700">
          <p className="text-red-400 text-xl font-mono">{error}</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-blue-950 text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-blue-950 to-blue-800">
      {/* Header */}
      <header className="py-6 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-blue-400 mr-2" />
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
            Stolen.ai
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-blue-900/50 rounded-xl border border-blue-800/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-800/30 rounded-lg">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Global Protection
              </h3>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">14.2M</div>
            <p className="text-blue-300">Threats detected this month</p>
            <div className="mt-3 text-blue-400 text-sm flex items-center">
              <BarChart2 className="w-4 h-4 mr-1" />
              +24% from previous period
            </div>
          </div>

          <div className="bg-blue-900/50 rounded-xl border border-blue-800/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-800/30 rounded-lg">
                <Server className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">
                AI Detection Rate
              </h3>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">99.7%</div>
            <p className="text-blue-300">Average accuracy across platforms</p>
            <div className="mt-3 text-blue-400 text-sm flex items-center">
              <BarChart2 className="w-4 h-4 mr-1" />
              +2.3% improved accuracy
            </div>
          </div>

          <div className="bg-blue-900/50 rounded-xl border border-blue-800/50 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-800/30 rounded-lg">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white">Response Time</h3>
            </div>
            <div className="text-4xl font-bold text-blue-400 mb-2">1.2s</div>
            <p className="text-blue-300">Average threat mitigation time</p>
            <div className="mt-3 text-blue-400 text-sm flex items-center">
              <BarChart2 className="w-4 h-4 mr-1" />
              -0.3s from industry average
            </div>
          </div>
        </div>
      </section>

      {/* Company Directory */}
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <List className="h-5 w-5 mr-2 text-blue-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
              Company Directory
            </span>
          </h2>

          {/* Search Bar */}
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-blue-900/50 text-white placeholder-blue-400 border border-blue-800/50 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400" />
          </div>

          <div className="flex space-x-2">
            <button className="bg-blue-900/50 hover:bg-blue-800/50 p-2 rounded text-blue-400 hover:text-blue-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </button>
            <button className="bg-blue-900/50 hover:bg-blue-800/50 p-2 rounded text-blue-400 hover:text-blue-300 transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
          <div className="flex flex-col items-center justify-center p-16 bg-blue-900/50 rounded-lg border border-blue-800">
            <div className="p-4 bg-blue-800/50 rounded-full mb-4">
              <Search className="h-8 w-8 text-blue-400" />
            </div>
            <p className="text-blue-300 text-lg mb-2">
              No companies match your search criteria
            </p>
            <p className="text-blue-400 text-sm">
              Try adjusting your filters or search term
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedExchange("");
                setSelectedSector("");
              }}
              className="mt-4 bg-clip-text text-xl text-transparent bg-gradient-to-r from-blue-400 to-blue-200 flex items-center font-bold cursor-pointer"
            >
              Clear all filters
              <svg
                className="ml-1 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
                <div className="bg-blue-900/50 rounded-xl overflow-hidden border border-blue-800 group-hover:border-blue-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 group-hover:rotate-6 transition-transform">
                    +{Math.floor(Math.random() * 50) + 10}%
                  </div>

                  <div className="p-6 border-b border-blue-800">
                    <div className="flex items-start justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {company["Company Name"]}
                        </h2>
                        <div className="flex items-center mt-1 gap-2">
                          <div className="bg-blue-800 text-xs py-0.5 px-2 rounded text-blue-300 flex items-center">
                            <Tag className="h-3 w-3 mr-1" />
                            {company["Industry"] || "N/A"}
                          </div>
                          {company["Exchange"] && (
                            <div className="bg-blue-800 text-xs py-0.5 px-2 rounded text-blue-300">
                              {company["Exchange"]}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center text-blue-300 mr-3">
                        <Building className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-400">Headquarters</p>
                        <p className="text-sm text-white">
                          {company["Headquarters"] || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center text-blue-300 mr-3">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-400">Valuation</p>
                        <p className="text-sm font-medium text-blue-400">
                          {company["Valuation"]
                            ? `${company["Valuation"]}`
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-blue-800 flex items-center justify-center text-blue-300 mr-3">
                        <Globe className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs text-blue-400">Website</p>
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

                    <div className="pt-4 border-t border-blue-800">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-blue-800/50 flex items-center justify-center text-blue-400 mr-3">
                            <BarChart2 className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-xs text-blue-400">
                              Growth Score
                            </p>
                            <div className="h-2 w-32 bg-blue-800 rounded-full mt-1 overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                                style={{
                                  width: `${
                                    Math.floor(Math.random() * 70) + 30
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-blue-800 p-1.5 rounded-lg hover:bg-blue-700 transition-colors group-hover:bg-blue-600">
                          <Info className="h-4 w-4 text-blue-400" />
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
    </div>
  );
}

export default CompanyList;
