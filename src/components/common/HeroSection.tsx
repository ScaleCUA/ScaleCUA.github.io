import React from 'react';
import { Link } from 'react-router-dom';

export interface HeroButton {
  text: string;
  to?: string;
  onClick?: () => void;
  variant:
    | 'primary'
    | 'secondary'
    | 'primary-on-warm'
    | 'secondary-on-warm'
    | 'outline';
  className?: string;
}

export interface HeroSectionProps {
  badge?: {
    text: string;
    variant?: 'default' | 'warm' | 'coral' | 'gold';
  };
  title: string[];
  description: string;
  buttons?: HeroButton[];
  backgroundVariant?: 'warm-gradient' | 'light-gradient' | 'coral-gradient';
  showPulseDots?: boolean;
  className?: string;
  children?: React.ReactNode;
}

/**
 * HeroSection component for consistent hero layouts across the website
 *
 * @param badge - Optional badge to display at the top
 * @param title - Array of title lines (for multi-line headings)
 * @param description - Hero description text
 * @param buttons - Array of CTA buttons
 * @param backgroundVariant - Background style variant
 * @param showPulseDots - Whether to show animated pulse dots at bottom
 * @param className - Additional CSS classes
 * @param children - Optional additional content
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  description,
  buttons = [],
  backgroundVariant = 'warm-gradient',
  showPulseDots = true,
  className = '',
  children,
}) => {
  const getBackgroundClasses = () => {
    switch (backgroundVariant) {
      case 'warm-gradient':
        return 'bg-gradient-to-br from-warm-400 via-warm-500 to-coral-600';
      case 'light-gradient':
        return 'bg-gradient-to-br from-warm-100 via-coral-50 to-gold-50';
      case 'coral-gradient':
        return 'bg-gradient-to-br from-warm-50 via-white to-coral-50';
      default:
        return 'bg-gradient-to-br from-warm-400 via-warm-500 to-coral-600';
    }
  };

  const getBadgeClasses = (variant: string = 'default') => {
    switch (variant) {
      case 'warm':
        return 'bg-warm-100 text-warm-700';
      case 'coral':
        return 'bg-coral-100 text-coral-700';
      case 'gold':
        return 'bg-gold-100 text-gold-700';
      default:
        return 'bg-white/20 backdrop-blur-sm text-white border border-white/30';
    }
  };

  const getButtonClasses = (button: HeroButton) => {
    const baseClasses =
      'shadow-xl text-lg px-8 py-4 transition-all duration-300';

    switch (button.variant) {
      case 'primary':
        return `${baseClasses} btn-primary`;
      case 'secondary':
        return `${baseClasses} btn-secondary`;
      case 'primary-on-warm':
        return `${baseClasses} btn-primary-on-warm`;
      case 'secondary-on-warm':
        return `${baseClasses} btn-secondary-on-warm`;
      case 'outline':
        return `${baseClasses} btn-outline bg-white/80 backdrop-blur-sm`;
      default:
        return `${baseClasses} btn-primary`;
    }
  };

  return (
    <div
      className={`relative ${getBackgroundClasses()} py-20 md:py-32 overflow-hidden ${className}`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-coral-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-gold-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {badge && (
            <div className="mb-6">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium shadow-lg ${getBadgeClasses(badge.variant)}`}
              >
                {badge.text}
              </span>
            </div>
          )}

          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
              backgroundVariant === 'light-gradient' ||
              backgroundVariant === 'coral-gradient'
                ? 'text-gray-900'
                : 'text-white'
            }`}
          >
            {title.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>

          <p
            className={`text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed ${
              backgroundVariant === 'light-gradient' ||
              backgroundVariant === 'coral-gradient'
                ? 'text-gray-700'
                : 'text-warm-100'
            }`}
          >
            {description}
          </p>

          {buttons.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {buttons.map((button, index) =>
                button.to ? (
                  <Link
                    key={index}
                    to={button.to}
                    className={`${getButtonClasses(button)} ${button.className || ''}`}
                  >
                    {button.text}
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={button.onClick}
                    className={`${getButtonClasses(button)} ${button.className || ''}`}
                  >
                    {button.text}
                  </button>
                )
              )}
            </div>
          )}

          {showPulseDots && (
            <div className="flex justify-center items-center space-x-3">
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  backgroundVariant === 'light-gradient' ||
                  backgroundVariant === 'coral-gradient'
                    ? 'bg-warm-500'
                    : 'bg-white'
                }`}
              ></div>
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  backgroundVariant === 'light-gradient' ||
                  backgroundVariant === 'coral-gradient'
                    ? 'bg-coral-500'
                    : 'bg-gold-300'
                }`}
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className={`w-3 h-3 rounded-full animate-pulse ${
                  backgroundVariant === 'light-gradient' ||
                  backgroundVariant === 'coral-gradient'
                    ? 'bg-gold-500'
                    : 'bg-coral-300'
                }`}
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          )}

          {children}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
