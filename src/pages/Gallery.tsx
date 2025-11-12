import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEnvironmentPreviews } from '../services/environmentService';
import {
  EnvironmentPreview,
  EnvironmentPreviewWithIcon,
} from '../types/environment';

// Function to generate SVG icon from task title
const generateInitialIcon = (title: string): React.ReactNode => {
  // Extract the first uppercase letter
  const initial = title.match(/[A-Z]/)?.[0] || title.charAt(0).toUpperCase();

  return (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" fill="#F3F4F6" rx="4" />
      <text
        x="12"
        y="14"
        fontSize="14"
        fontWeight="bold"
        fill="#1F2937"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Arial, sans-serif"
      >
        {initial}
      </text>
    </svg>
  );
};

// Loading state component (moved outside to avoid re-creation on render)
const LoadingState: React.FC = () => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-800 rounded-full animate-spin mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Loading Gallery
        </h3>
        <p className="text-gray-600">
          Please wait while we fetch the latest gallery data...
        </p>
      </div>
    </div>
  </div>
);

// Error state component (moved outside to avoid re-creation on render)
interface ErrorStateProps {
  error: string | null;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => (
  <div className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-red-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Failed to Load Gallery
        </h3>
        <p className="text-gray-600 mb-6">
          {error || 'An unexpected error occurred while loading gallery data.'}
        </p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
);

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [selectedPlatform, setSelectedPlatform] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Load environment data using the new service
  const hookResult = useEnvironmentPreviews() as {
    data: EnvironmentPreview[] | null;
    loading: boolean;
    error: string | null;
    retry: () => void;
  };

  const { data: environmentsData, loading, error, retry } = hookResult;

  // Map environment data to include React icon components
  const environmentsWithIcons = useMemo((): EnvironmentPreviewWithIcon[] => {
    if (!environmentsData) return [];

    return environmentsData.map(env => {
      return {
        ...env,
        icon: generateInitialIcon(env.taskName),
      };
    });
  }, [environmentsData]);

  // Get filtered environments with icons
  const filteredEnvironmentsWithIcons = useMemo(() => {
    if (!environmentsWithIcons) return [];

    // Apply platform filter
    let filtered = environmentsWithIcons.filter(
      env => selectedPlatform === 'all' || env.platform === selectedPlatform
    );

    // Apply difficulty filter
    filtered = filtered.filter(
      env =>
        selectedDifficulty === 'all' || env.difficulty === selectedDifficulty
    );

    return filtered;
  }, [environmentsWithIcons, selectedPlatform, selectedDifficulty]);

  // Show loading state
  if (loading) {
    return (
      <div className="bg-white">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white border-b border-gray-300 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded mr-4">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Environment Gallery
                </h1>
                <p className="text-gray-600 mt-1">
                  Explore AI-generated testing environments
                </p>
              </div>
            </div>
          </div>
        </div>
        <LoadingState />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-white">
        {/* Sticky Header */}
        <div className="sticky top-0 bg-white border-b border-gray-300 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded mr-4">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  Environment Gallery
                </h1>
                <p className="text-gray-600 mt-1">
                  Explore AI-generated testing environments
                </p>
              </div>
            </div>
          </div>
        </div>
        <ErrorState error={error} onRetry={retry} />
      </div>
    );
  }

  // Normal state
  return (
    <div className="bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-white border-b border-gray-300 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-200 rounded mr-4">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Environment Gallery
              </h1>
              <p className="text-gray-600 mt-1">
                Explore our collection of AI-generated testing environments for
                GUI agent evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Left Sidebar + Right Content */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
        {/* Left Sidebar Filters */}
        <div className="lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-300 p-6 lg:min-h-screen sticky top-0">
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                Filters
              </h2>
              <button
                onClick={() => {
                  setSelectedPlatform('all');
                  setSelectedDifficulty('all');
                }}
                className="w-full px-3 py-1.5 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 mb-4"
              >
                Clear All Filters
              </button>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Platform
              </h3>
              <div className="space-y-1">
                {[
                  'all',
                  'Web Applications',
                  'Desktop Apps',
                  'Mobile Interfaces',
                ].map(platform => (
                  <button
                    key={platform}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded-sm transition-colors ${
                      selectedPlatform === platform
                        ? 'bg-gray-800 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {platform === 'all' ? 'All Platforms' : platform}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                Difficulty
              </h3>
              <div className="space-y-1">
                {['all', 'Intermediate', 'Advanced', 'Expert'].map(
                  difficulty => (
                    <button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      className={`w-full text-left px-3 py-1.5 text-sm rounded-sm transition-colors ${
                        selectedDifficulty === difficulty
                          ? 'bg-gray-800 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {difficulty === 'all' ? 'All Levels' : difficulty}
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <div className="text-sm text-gray-600">
                <p className="font-medium">
                  {filteredEnvironmentsWithIcons.length} environment
                  {filteredEnvironmentsWithIcons.length !== 1 ? 's' : ''}
                </p>
                <p className="text-xs mt-1">
                  {filteredEnvironmentsWithIcons.length !==
                    environmentsWithIcons.length &&
                    `of ${environmentsWithIcons.length} total`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-6">
          {/* Divider (hidden on large screens) */}
          <div className="h-px bg-gray-300 mb-4 lg:hidden"></div>

          {/* Environment List */}
          <div className="space-y-4">
            {filteredEnvironmentsWithIcons.map(environment => (
              <div key={environment.id} className="group">
                <div className="bg-white border border-gray-300 rounded-sm hover:border-gray-400 transition-all duration-200">
                  {/* Header */}
                  <div className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div
                          className={`w-8 h-8 rounded-sm flex items-center justify-center ${
                            environment.colorTheme === 'warm'
                              ? 'bg-amber-100'
                              : environment.colorTheme === 'coral'
                                ? 'bg-rose-100'
                                : 'bg-emerald-100'
                          }`}
                        >
                          <div
                            className={`w-4 h-4 ${
                              environment.colorTheme === 'warm'
                                ? 'text-amber-700'
                                : environment.colorTheme === 'coral'
                                  ? 'text-rose-700'
                                  : 'text-emerald-700'
                            }`}
                          >
                            {environment.icon}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center space-x-3">
                            <h3 className="text-base font-medium text-gray-900">
                              {environment.taskName}
                            </h3>
                            <span
                              className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-sm border ${
                                environment.difficulty === 'Intermediate'
                                  ? 'bg-blue-50 text-blue-700 border-blue-300'
                                  : environment.difficulty === 'Advanced'
                                    ? 'bg-purple-50 text-purple-700 border-purple-300'
                                    : 'bg-red-50 text-red-700 border-red-300'
                              }`}
                            >
                              {environment.difficulty}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed max-w-3xl">
                            {environment.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => navigate(`/launcher/${environment.id}`)}
                        className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-sm hover:bg-gray-700 transition-colors"
                      >
                        Launch
                      </button>
                    </div>

                    {/* Details */}
                    <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                          />
                        </svg>
                        <span className="text-gray-700 font-medium">
                          Platform:
                        </span>
                        <span className="text-gray-600">
                          {environment.platform}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                        <span className="text-gray-700 font-medium">
                          Complexity:
                        </span>
                        <span className="text-gray-600">
                          {environment.metrics.complexity}/10
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <span className="text-gray-700 font-medium">
                          Success:
                        </span>
                        <span className="text-gray-600">
                          {environment.metrics.completion}%
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {environment.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-sm border border-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredEnvironmentsWithIcons.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No environments found
              </h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters.</p>
              <button
                onClick={() => {
                  setSelectedPlatform('all');
                  setSelectedDifficulty('all');
                }}
                className="px-5 py-2 bg-gray-800 text-white font-medium rounded-sm hover:bg-gray-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
