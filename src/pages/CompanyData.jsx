import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function CompanyData() {
  const { companyName } = useParams();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          const companyData = {};
          row.c.forEach((cell, i) => {
            if (headers[i]) {
              companyData[headers[i]] = cell ? cell.v : "";
            }
          });
          return companyData;
        });

        const foundCompany = rows.find(
          (comp) => decodeURIComponent(companyName) === comp["Company Name"]
        );

        if (foundCompany) {
          setCompany(foundCompany);
        } else {
          setError("Company not found");
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [companyName]);

  // Function to parse and render social media links
  const renderSocialMediaLinks = (socialMediaString) => {
    if (!socialMediaString) return null;

    // Regular expression to match social media platform and URL
    const linkPattern = /(LinkedIn|Twitter|Facebook):\s*(https?:\/\/[^\s]+)/gi;
    const matches = [...socialMediaString.matchAll(linkPattern)];

    if (matches.length === 0) return <span>{socialMediaString}</span>;

    const elements = [];
    let lastIndex = 0;

    matches.forEach((match, index) => {
      const [fullMatch, platform, url] = match;
      const startIndex = match.index;

      // Add text before the match if any
      if (startIndex > lastIndex) {
        elements.push(
          <span key={`text-${index}`}>
            {socialMediaString.slice(lastIndex, startIndex)}
          </span>
        );
      }

      // Add the clickable link
      elements.push(
        <a
          key={`link-${index}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 hover:text-emerald-300 transition-colors hover:underline"
        >
          {platform}
        </a>
      );

      lastIndex = startIndex + fullMatch.length;
    });

    // Add remaining text after the last match
    if (lastIndex < socialMediaString.length) {
      elements.push(
        <span key="text-end">{socialMediaString.slice(lastIndex)}</span>
      );
    }

    return <div className="space-y-2">{elements}</div>;
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-emerald-200 border-b-transparent rounded-full animate-spin animation-delay-500"></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
        <div className="p-8 bg-gray-800 rounded-2xl shadow-2xl border border-red-500/30 max-w-md w-full">
          <div className="text-center">
            <svg
              className="w-16 h-16 text-red-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <p className="text-xl font-bold text-red-400 mb-2">{error}</p>
            <p className="text-gray-400 mb-6">
              We couldn't find the company you're looking for.
            </p>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:from-emerald-500 hover:to-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-700/30"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Return to Directory
            </Link>
          </div>
        </div>
      </div>
    );

  if (!company) return null;

  const generalInfoGroup = [
    "Industry",
    "Headquarters",
    "Founding Year",
    "Number of Employees",
  ];
  const financialInfoGroup = [
    "Funding Raised ($)",
    "Revenue ($, if available)",
    "Company Valuation ($, if available)",
  ];
  const securityCapabilities = [
    "Cybersecurity Focus Area",
    "AI Role in Security",
    "Target Customers",
    "Product Category",
    "Cyber Threat Intelligence",
    "Biometric Security Usage",
    "Fraud Detection Capabilities",
    "Blockchain Integration",
    "Ransomware Protection",
    "SOC (Security Operations Center) Automation",
    "Zero Trust Security Support",
    "Government & Enterprise Clients",
    "Patents & Research",
  ];
  const peopleInfoGroup = [
    "Founders & LinkedIn URLs",
    "Key Contacts",
    "Social Media Links",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/CompanyList"
          className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-all duration-300 group"
        >
          <div className="bg-gray-800/80 p-2 rounded-full mr-3 group-hover:bg-gray-700/80 transition-all">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <span className="text-lg">Back to company directory</span>
        </Link>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

          <div className="bg-gradient-to-r from-emerald-800/90 to-blue-800/90 p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 bg-white/10 w-60 h-60 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 bg-emerald-400/20 w-40 h-40 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {company["Company Name"]}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    {company["Industry"] && (
                      <span className="bg-black/30 text-white px-4 py-1.5 rounded-full backdrop-blur-sm text-sm font-medium border border-white/10">
                        {company["Industry"]}
                      </span>
                    )}
                  </div>
                </div>
                {company["Website URL"] && (
                  <a
                    href={company["Website URL"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white inline-flex items-center mt-4 md:mt-0 bg-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group border border-white/10"
                  >
                    <span>Visit Website</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="p-8">
            {company["Company Description"] && (
              <div className="mb-10 bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  About
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {company["Company Description"]}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-emerald-600/60 to-blue-600/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-colors duration-300">
                <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <div className="bg-gray-700/50 p-1.5 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  General Information
                </h2>
                <div className="space-y-5">
                  {generalInfoGroup.map(
                    (key) =>
                      company[key] && (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-400 text-sm font-medium mb-1">
                            {key}
                          </span>
                          <span className="text-white font-medium text-lg">
                            {company[key]}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-600/60 to-blue-600/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-colors duration-300">
                <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <div className="bg-gray-700/50 p-1.5 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  Financial Information
                </h2>
                <div className="space-y-5">
                  {financialInfoGroup.map(
                    (key) =>
                      company[key] && (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-400 text-sm font-medium mb-1">
                            {key}
                          </span>
                          <span className="text-white font-medium text-lg">
                            {typeof company[key] === "string" &&
                            company[key].includes("$")
                              ? company[key]
                              : `$${company[key]}`}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-emerald-600/60 to-blue-600/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-colors duration-300">
                <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <div className="bg-gray-700/50 p-1.5 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  Security Capabilities
                </h2>
                <div className="space-y-5">
                  {securityCapabilities.map(
                    (key) =>
                      company[key] && (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-400 text-sm font-medium mb-1">
                            {key}
                          </span>
                          <span className="text-white font-medium text-lg">
                            {company[key]}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-600/60 to-blue-600/60 p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm transition-colors duration-300">
                <h2 className="text-xl font-semibold text-white mb-5 flex items-center">
                  <div className="bg-gray-700/50 p-1.5 rounded-lg mr-3">
                    <svg
                      className="w-5 h-5 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  People & Contacts
                </h2>
                <div className="space-y-5">
                  {peopleInfoGroup.map(
                    (key) =>
                      company[key] && (
                        <div key={key} className="flex flex-col">
                          <span className="text-gray-400 text-sm font-medium mb-2">
                            {key}
                          </span>
                          <span className="text-white">
                            {key === "Social Media Links" ? (
                              renderSocialMediaLinks(company[key])
                            ) : key === "Founders & LinkedIn URLs" &&
                              company[key].includes("LinkedIn:") ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: company[key].replace(
                                    /(https:\/\/www\.linkedin\.com\/[^\s,]+)/g,
                                    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-emerald-400 hover:text-emerald-300 transition-colors hover:underline">LinkedIn Profile</a>'
                                  ),
                                }}
                              />
                            ) : (
                              company[key]
                            )}
                          </span>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyData;
