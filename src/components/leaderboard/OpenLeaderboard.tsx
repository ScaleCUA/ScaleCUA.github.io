import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Agent {
  id: string;
  name: string;
  organization: string;
  score: number;
  rank: number;
  tasksCompleted: number;
  successRate: number;
  lastUpdated: string;
}

const OpenLeaderboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<
    '7d' | '30d' | '90d' | '1y'
  >('7d');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'web' | 'desktop' | 'mobile'
  >('all');

  // Placeholder data
  const agents: Agent[] = [
    {
      id: '1',
      name: 'GPT-4-Vision Agent',
      organization: 'OpenAI',
      score: 92.5,
      rank: 1,
      tasksCompleted: 487,
      successRate: 92.5,
      lastUpdated: '2024-01-15',
    },
    {
      id: '2',
      name: 'Claude-3-Opus GUI',
      organization: 'Anthropic',
      score: 89.2,
      rank: 2,
      tasksCompleted: 456,
      successRate: 89.2,
      lastUpdated: '2024-01-14',
    },
    {
      id: '3',
      name: 'Gemini-UI-Master',
      organization: 'Google',
      score: 87.8,
      rank: 3,
      tasksCompleted: 442,
      successRate: 87.8,
      lastUpdated: '2024-01-15',
    },
    {
      id: '4',
      name: 'AutoGPT-UI',
      organization: 'Open Source',
      score: 76.3,
      rank: 4,
      tasksCompleted: 398,
      successRate: 76.3,
      lastUpdated: '2024-01-13',
    },
    {
      id: '5',
      name: 'AgentGPT-Desktop',
      organization: 'Research Lab',
      score: 71.2,
      rank: 5,
      tasksCompleted: 371,
      successRate: 71.2,
      lastUpdated: '2024-01-12',
    },
  ];

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400 text-white';
      case 3:
        return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 font-bold';
    if (score >= 80) return 'text-warm-600 font-semibold';
    if (score >= 70) return 'text-yellow-600 font-medium';
    return 'text-gray-600';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full Width and Background Decorations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-warm-50 via-white to-coral-50 pt-20 pb-16">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-warm-200/20 to-coral-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-20 -left-20 w-60 h-60 bg-gradient-to-br from-coral-200/20 to-gold-200/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute -bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-200/20 to-warm-200/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-warm-200 to-warm-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                Open Tests Leaderboard
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transparent evaluation with publicly available test cases and
              environments
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Breadcrumb */}
      <section className="relative bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <nav className="flex items-center space-x-3">
              <Link
                to="/leaderboard"
                className="text-warm-600 hover:text-warm-700 font-medium text-base transition-colors duration-200"
              >
                Leaderboards
              </Link>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-900 font-semibold text-base">
                Open Tests
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative bg-gradient-to-br from-warm-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Filters Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-warm-100 p-8 mb-12">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Time Range
                  </label>
                  <div className="relative">
                    <select
                      value={selectedTimeRange}
                      onChange={e =>
                        setSelectedTimeRange(
                          e.target.value as '7d' | '30d' | '90d' | '1y'
                        )
                      }
                      className="appearance-none w-full px-6 py-3 pr-12 border border-warm-200 rounded-2xl bg-white text-gray-900 focus:ring-2 focus:ring-warm-500 focus:border-warm-500 hover:border-warm-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md font-medium"
                    >
                      <option value="7d">Last 7 Days</option>
                      <option value="30d">Last 30 Days</option>
                      <option value="90d">Last 90 Days</option>
                      <option value="1y">Last Year</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg
                        className="w-6 h-6 text-warm-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={e =>
                        setSelectedCategory(
                          e.target.value as 'all' | 'web' | 'desktop' | 'mobile'
                        )
                      }
                      className="appearance-none w-full px-6 py-3 pr-12 border border-warm-200 rounded-2xl bg-white text-gray-900 focus:ring-2 focus:ring-warm-500 focus:border-warm-500 hover:border-warm-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md font-medium"
                    >
                      <option value="all">All Categories</option>
                      <option value="web">Web Applications</option>
                      <option value="desktop">Desktop Apps</option>
                      <option value="mobile">Mobile Interfaces</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg
                        className="w-6 h-6 text-warm-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-semibold rounded-2xl hover:from-warm-600 hover:to-warm-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                  Submit Your Agent
                </button>
                <button className="px-8 py-3 border-2 border-warm-500 text-warm-600 font-semibold rounded-2xl hover:bg-warm-50 transition-all duration-300 transform hover:scale-105">
                  Download Test Cases
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="group relative bg-gradient-to-br from-warm-50 to-white rounded-3xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-warm-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {agents.length}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Active Agents
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-warm-50 to-white rounded-3xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-warm-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  527
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Public Test Cases
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-warm-50 to-white rounded-3xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-warm-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  2,154
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Total Evaluations
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-warm-50 to-white rounded-3xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-warm-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-warm-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  79.8%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Avg Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Leaderboard Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-warm-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-warm-50 to-coral-50 border-b border-warm-200">
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Rank
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Agent
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Organization
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Score
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Success Rate
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Tasks
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Last Updated
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {agents.map(agent => (
                    <tr
                      key={agent.id}
                      className="border-b border-warm-100 hover:bg-gradient-to-r hover:from-warm-50 hover:to-coral-50 transition-all duration-300 group"
                    >
                      <td className="py-6 px-6">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${getRankBadgeColor(agent.rank)}`}
                        >
                          {agent.rank}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="font-bold text-gray-900 text-base group-hover:text-warm-600 transition-colors duration-300">
                          {agent.name}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-gray-600 font-medium text-sm">
                          {agent.organization}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div
                          className={`text-xl font-bold ${getScoreColor(agent.score)} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {agent.score.toFixed(1)}%
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-gray-600 font-medium text-sm">
                          {agent.successRate.toFixed(1)}%
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-gray-600 font-medium text-sm">
                          {agent.tasksCompleted}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-gray-600 font-medium text-sm">
                          {agent.lastUpdated}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex items-center justify-center space-x-3">
                          <button className="text-warm-600 hover:text-warm-700 font-semibold text-sm hover:underline transition-colors duration-300">
                            View Details
                          </button>
                          <span className="text-gray-300 font-bold">|</span>
                          <button className="text-warm-600 hover:text-warm-700 font-semibold text-sm hover:underline transition-colors duration-300">
                            Test Cases
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enhanced Pagination */}
            <div className="flex items-center justify-between p-8 bg-gradient-to-r from-warm-50 to-coral-50 border-t border-warm-200">
              <div className="text-base text-gray-600 font-medium">
                Showing 1 to {agents.length} of {agents.length} results
              </div>
              <div className="flex items-center space-x-3">
                <button
                  className="px-6 py-3 border border-warm-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-warm-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  disabled
                >
                  Previous
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-warm-500 to-warm-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  1
                </button>
                <button className="px-6 py-3 border border-warm-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-warm-100 transition-all duration-300">
                  2
                </button>
                <button className="px-6 py-3 border border-warm-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-warm-100 transition-all duration-300">
                  3
                </button>
                <button className="px-6 py-3 border border-warm-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-warm-100 transition-all duration-300">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Test Cases Preview */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl border border-warm-100 p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
              Public Test Cases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-warm-50 to-white rounded-2xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Web Form Automation
                  </h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Complex form filling with validation and dynamic elements
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-warm-200 to-warm-300 text-warm-800 px-3 py-2 rounded-xl font-semibold">
                      Web
                    </span>
                    <Link
                      to="/environment"
                      className="text-warm-600 hover:text-warm-700 font-semibold text-sm hover:underline transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-warm-50 to-white rounded-2xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Multi-step Navigation
                  </h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Navigate through complex application workflows
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-warm-200 to-warm-300 text-warm-800 px-3 py-2 rounded-xl font-semibold">
                      Web
                    </span>
                    <Link
                      to="/environment"
                      className="text-warm-600 hover:text-warm-700 font-semibold text-sm hover:underline transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              <div className="group bg-gradient-to-br from-warm-50 to-white rounded-2xl p-8 border border-warm-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-100/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">
                    Data Extraction
                  </h4>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Extract and process data from various UI elements
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gradient-to-r from-warm-200 to-warm-300 text-warm-800 px-3 py-2 rounded-xl font-semibold">
                      Web
                    </span>
                    <Link
                      to="/environment"
                      className="text-warm-600 hover:text-warm-700 font-semibold text-sm hover:underline transition-colors duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                to="/environment"
                className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-warm-500 to-warm-600 text-white font-bold rounded-2xl hover:from-warm-600 hover:to-warm-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 group"
              >
                View All Test Cases in Environments (527)
                <svg
                  className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OpenLeaderboard;
