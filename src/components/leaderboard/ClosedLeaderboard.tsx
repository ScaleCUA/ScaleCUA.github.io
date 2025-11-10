import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Agent {
  id: string;
  name: string;
  organization: string;
  score: number;
  rank: number;
  category: 'enterprise' | 'research' | 'opensource';
  submissionDate: string;
  verified: boolean;
}

const ClosedLeaderboard: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState<
    'current' | 'previous'
  >('current');
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'enterprise' | 'research' | 'opensource'
  >('all');

  // Placeholder data with more realistic closed test results
  const agents: Agent[] = [
    {
      id: '1',
      name: 'Enterprise-GUI-Pro',
      organization: 'TechCorp Inc.',
      score: 94.2,
      rank: 1,
      category: 'enterprise',
      submissionDate: '2024-01-15',
      verified: true,
    },
    {
      id: '2',
      name: 'Claude-3-Advanced',
      organization: 'Anthropic',
      score: 91.8,
      rank: 2,
      category: 'enterprise',
      submissionDate: '2024-01-14',
      verified: true,
    },
    {
      id: '3',
      name: 'GPT-4-Vision-Enterprise',
      organization: 'OpenAI',
      score: 90.5,
      rank: 3,
      category: 'enterprise',
      submissionDate: '2024-01-13',
      verified: true,
    },
    {
      id: '4',
      name: 'ResearchAgent-X',
      organization: 'MIT AI Lab',
      score: 83.7,
      rank: 4,
      category: 'research',
      submissionDate: '2024-01-12',
      verified: true,
    },
    {
      id: '5',
      name: 'AutoUI-Professional',
      organization: 'StartupXYZ',
      score: 78.9,
      rank: 5,
      category: 'enterprise',
      submissionDate: '2024-01-11',
      verified: false,
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
    if (score >= 80) return 'text-coral-600 font-semibold';
    if (score >= 70) return 'text-yellow-600 font-medium';
    return 'text-gray-600';
  };

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'enterprise':
        return 'bg-blue-100 text-blue-700';
      case 'research':
        return 'bg-purple-100 text-purple-700';
      case 'opensource':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Full Width and Background Decorations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-coral-50 via-white to-warm-50 pt-20 pb-16">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-coral-200/20 to-warm-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-20 -left-20 w-60 h-60 bg-gradient-to-br from-warm-200/20 to-gold-200/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute -bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-gold-200/20 to-coral-200/20 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-coral-200 to-coral-400 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient leading-tight">
                Closed Tests Leaderboard
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Private, secure evaluation with confidential test cases preventing
              over-fitting
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
                className="text-coral-600 hover:text-coral-700 font-medium text-base transition-colors duration-200"
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
                Closed Tests
              </span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative bg-gradient-to-br from-coral-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Filters Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-coral-100 p-8 mb-12">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap items-center gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Evaluation Period
                  </label>
                  <div className="relative">
                    <select
                      value={selectedTimeRange}
                      onChange={e =>
                        setSelectedTimeRange(
                          e.target.value as 'current' | 'previous'
                        )
                      }
                      className="appearance-none w-full px-6 py-3 pr-12 border border-coral-200 rounded-2xl bg-white text-gray-900 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 hover:border-coral-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md font-medium"
                    >
                      <option value="current">Current Period</option>
                      <option value="previous">Previous Period</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg
                        className="w-6 h-6 text-coral-500"
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
                          e.target.value as
                            | 'all'
                            | 'enterprise'
                            | 'research'
                            | 'opensource'
                        )
                      }
                      className="appearance-none w-full px-6 py-3 pr-12 border border-coral-200 rounded-2xl bg-white text-gray-900 focus:ring-2 focus:ring-coral-500 focus:border-coral-500 hover:border-coral-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md font-medium"
                    >
                      <option value="all">All Categories</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="research">Research</option>
                      <option value="opensource">Open Source</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg
                        className="w-6 h-6 text-coral-500"
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
                <button className="px-8 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white font-semibold rounded-2xl hover:from-coral-600 hover:to-coral-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
                  Request Evaluation Access
                </button>
                <button className="px-8 py-3 border-2 border-coral-500 text-coral-600 font-semibold rounded-2xl hover:bg-coral-50 transition-all duration-300 transform hover:scale-105">
                  Evaluation Guidelines
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="group relative bg-gradient-to-br from-coral-50 to-white rounded-3xl p-8 border border-coral-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-coral-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {agents.length}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Verified Agents
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-coral-50 to-white rounded-3xl p-8 border border-coral-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-coral-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  Private
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Test Cases
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-coral-50 to-white rounded-3xl p-8 border border-coral-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-coral-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  Monthly
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Evaluation Cycles
                </div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-coral-50 to-white rounded-3xl p-8 border border-coral-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-coral-100/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="text-2xl font-bold text-coral-600 mb-3 group-hover:scale-110 transition-transform duration-300">
                  87.7%
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  Avg Success Rate
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Leaderboard Table */}
          <div className="bg-white rounded-3xl shadow-xl border border-coral-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-coral-50 to-warm-50 border-b border-coral-200">
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Rank
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Agent
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Organization
                    </th>
                    <th className="text-left py-6 px-6 font-bold text-gray-900 text-base">
                      Category
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Score
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Verified
                    </th>
                    <th className="text-center py-6 px-6 font-bold text-gray-900 text-base">
                      Submitted
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
                      className="border-b border-coral-100 hover:bg-gradient-to-r hover:from-coral-50 hover:to-warm-50 transition-all duration-300 group"
                    >
                      <td className="py-6 px-6">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 ${getRankBadgeColor(agent.rank)}`}
                        >
                          {agent.rank}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="font-bold text-gray-900 text-base group-hover:text-coral-600 transition-colors duration-300">
                          {agent.name}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <div className="text-gray-600 font-medium text-sm">
                          {agent.organization}
                        </div>
                      </td>
                      <td className="py-6 px-6">
                        <span
                          className={`text-xs px-3 py-2 rounded-xl font-semibold ${getCategoryBadge(agent.category)} group-hover:scale-105 transition-transform duration-300`}
                        >
                          {agent.category.charAt(0).toUpperCase() +
                            agent.category.slice(1)}
                        </span>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div
                          className={`text-xl font-bold ${getScoreColor(agent.score)} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {agent.score.toFixed(1)}%
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex justify-center">
                          {agent.verified ? (
                            <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-yellow-100 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                              <svg
                                className="w-5 h-5 text-yellow-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="text-gray-600 font-medium text-sm">
                          {agent.submissionDate}
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <div className="flex items-center justify-center space-x-3">
                          <button className="text-coral-600 hover:text-coral-700 font-semibold text-sm hover:underline transition-colors duration-300">
                            View Report
                          </button>
                          <span className="text-gray-300 font-bold">|</span>
                          <button className="text-coral-600 hover:text-coral-700 font-semibold text-sm hover:underline transition-colors duration-300">
                            Method
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Enhanced Pagination */}
            <div className="flex items-center justify-between p-8 bg-gradient-to-r from-coral-50 to-warm-50 border-t border-coral-200">
              <div className="text-base text-gray-600 font-medium">
                Showing 1 to {agents.length} of {agents.length} verified results
              </div>
              <div className="flex items-center space-x-3">
                <button
                  className="px-6 py-3 border border-coral-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-coral-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  disabled
                >
                  Previous
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  1
                </button>
                <button className="px-6 py-3 border border-coral-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-coral-100 transition-all duration-300">
                  2
                </button>
                <button className="px-6 py-3 border border-coral-300 rounded-xl text-sm font-medium text-gray-600 hover:bg-coral-100 transition-all duration-300">
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Evaluation Process */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl border border-coral-100 p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
              Secure Evaluation Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-200 to-coral-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Apply for Access
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Submit your agent and organization details for verification
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-200 to-coral-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Secure Submission
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Upload your agent through our secure evaluation portal
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-200 to-coral-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Private Testing
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your agent is tested on confidential environments
                </p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-coral-200 to-coral-400 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">
                  Detailed Report
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive comprehensive performance analysis and insights
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-coral-500 via-coral-600 to-warm-500 rounded-3xl shadow-2xl overflow-hidden group">
            <div className="relative p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                  Ready for Fair Competition?
                </h3>
                <p className="text-coral-100 mb-10 max-w-4xl mx-auto text-lg leading-relaxed">
                  Join the most prestigious GUI agent benchmark with closed,
                  private evaluations that ensure true performance measurement
                  without over-fitting.
                </p>
                <div className="flex items-center justify-center space-x-6">
                  <button className="px-10 py-4 bg-white text-coral-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                    Request Evaluation Access
                  </button>
                  <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-coral-600 transition-all duration-300 transform hover:scale-105">
                    Download Whitepaper
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClosedLeaderboard;
