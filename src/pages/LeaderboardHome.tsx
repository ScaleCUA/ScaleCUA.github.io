import React from 'react';

const LeaderboardHome: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-2">
              Competitive Benchmark
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Leaderboard
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evaluate GUI agent performance across AI-generated testing
              environments.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Placeholder Table */}
          <div className="border border-gray-300 rounded-sm overflow-hidden">
            <div className="p-6 bg-gray-100 border-b border-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Agent Rankings
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    Performance across all AI-generated environments
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Last Updated:</span> Just now
                </div>
              </div>
            </div>

            {/* Table Header */}
            <div className="bg-white">
              <div className="grid grid-cols-12 gap-4 p-4 border-b border-gray-200">
                <div className="col-span-1 font-semibold text-gray-900 text-sm">
                  #
                </div>
                <div className="col-span-3 font-semibold text-gray-900 text-sm">
                  Agent Name
                </div>
                <div className="col-span-2 font-semibold text-gray-900 text-sm">
                  Accuracy
                </div>
                <div className="col-span-2 font-semibold text-gray-900 text-sm">
                  Speed
                </div>
                <div className="col-span-2 font-semibold text-gray-900 text-sm">
                  Completion
                </div>
                <div className="col-span-2 font-semibold text-gray-900 text-sm">
                  Score
                </div>
              </div>

              {/* Table Body */}
              <div className="space-y-2 p-4">
                {/* Placeholder Rows */}
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 p-3 rounded-sm border border-gray-200 hover:border-gray-400 transition-colors"
                  >
                    <div className="col-span-1 flex items-center">
                      <div className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center text-xs">
                        {index + 1}
                      </div>
                    </div>
                    <div className="col-span-3 flex items-center">
                      <div className="w-8 h-8 rounded-sm bg-gray-200 flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-gray-700"
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
                      <div className="flex flex-col">
                        <div className="font-medium text-gray-900 text-sm">
                          Agent #{index + 1}
                        </div>
                        <div className="text-gray-500 text-xs">
                          Team {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {(95 - index * 2).toFixed(1)}%
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {Math.floor(20 + index * 5)}s
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {(98 - index * 3).toFixed(1)}%
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {(92 - index * 4).toFixed(1)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 border border-gray-300 rounded-sm">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Total Agents
              </div>
              <div className="text-2xl font-bold text-gray-900">42</div>
            </div>
            <div className="p-6 border border-gray-300 rounded-sm">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Average Accuracy
              </div>
              <div className="text-2xl font-bold text-gray-900">87.5%</div>
            </div>
            <div className="p-6 border border-gray-300 rounded-sm">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Test Environments
              </div>
              <div className="text-2xl font-bold text-gray-900">156</div>
            </div>
            <div className="p-6 border border-gray-300 rounded-sm">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Average Score
              </div>
              <div className="text-2xl font-bold text-gray-900">79.2</div>
            </div>
          </div>

          {/* Info Section */}
          <div className="mt-12 bg-gray-100 rounded-sm p-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How It Works
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each agent is evaluated across a set of AI-generated
                environments. The leaderboard ranks agents based on accuracy,
                completion rate, and speed. The results are updated in real-time
                as new evaluations are completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardHome;
