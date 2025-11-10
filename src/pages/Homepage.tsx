import React from 'react'
import { Link } from 'react-router-dom'

const Homepage: React.FC = () => {
  return (
    <div className="bg-warm-50">
      {/* Hero Section */}
      <section className="gradient-warm text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in leading-normal" style={{ paddingBottom: '0.1em' }}>
              ScaleCUA Benchmark
            </h1>
            <p className="text-xl md:text-2xl text-warm-100 mb-8 max-w-3xl mx-auto animate-slide-up">
              A revolutionary GUI agent benchmark featuring AI-generated testing environments for fair, flexible, and extensible evaluation without over-fitting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/leaderboard" className="btn-primary-on-warm text-center">
                View Leaderboard
              </Link>
              <Link to="/environment" className="btn-secondary-on-warm text-center">
                Explore Environments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 leading-normal" style={{ paddingBottom: '0.1em' }}>
              Why ScaleCUA?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our benchmark revolutionizes GUI agent evaluation with AI-generated environments that prevent over-fitting and ensure fair assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card group hover:scale-105 transform transition-all duration-300">
              <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                GUI Agent Evaluation
              </h3>
              <p className="text-gray-600">
                Specialized benchmark for evaluating graphical user interface agents across diverse interaction scenarios and real-world applications.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="card group hover:scale-105 transform transition-all duration-300">
              <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                AI-Generated Environments
              </h3>
              <p className="text-gray-600">
                Dynamic testing environments created by AI to ensure unique evaluation scenarios that prevent memorization and over-fitting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="card group hover:scale-105 transform transition-all duration-300">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fair Evaluation
              </h3>
              <p className="text-gray-600">
                Eliminates over-fitting issues found in fixed environment benchmarks by generating unique testing scenarios for each evaluation.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="card group hover:scale-105 transform transition-all duration-300">
              <div className="w-12 h-12 bg-warm-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-warm-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-warm-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Flexible & Extensible
              </h3>
              <p className="text-gray-600">
                Adaptive framework that easily incorporates new agent types, environments, and evaluation metrics as the field evolves.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="card group hover:scale-105 transform transition-all duration-300">
              <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-coral-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Interactive Demos
              </h3>
              <p className="text-gray-600">
                Live interactive environments showcasing agent capabilities in real-time testing scenarios with diverse GUI challenges.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="card group hover:scale-105 transform transition-all duration-300">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors duration-200">
                <svg className="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Comprehensive Analytics
              </h3>
              <p className="text-gray-600">
                Detailed performance metrics and insights to understand agent behavior across diverse GUI interaction patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 leading-normal" style={{ paddingBottom: '0.1em' }}>
              Benchmark Scale
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-600 mb-2">Universal</div>
              <div className="text-gray-600">Any GUI Agent • Minimum Cost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-coral-600 mb-2">∞</div>
              <div className="text-gray-600">Generated Environments</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold-600 mb-2">50K+</div>
              <div className="text-gray-600">Test Scenarios</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warm-600 mb-2">Zero</div>
              <div className="text-gray-600">Over-fitting Risk</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-coral text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-normal" style={{ paddingBottom: '0.1em' }}>
            Transform GUI Agent Evaluation
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the future of fair GUI agent testing with our AI-generated environment benchmark that eliminates over-fitting and ensures authentic evaluation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/leaderboard" className="btn-primary bg-white text-coral-600 hover:bg-gray-100">
              View Leaderboard
            </Link>
            <Link to="/environment" className="btn-outline border-white text-white hover:bg-white hover:text-coral-600">
              Explore Environments
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage