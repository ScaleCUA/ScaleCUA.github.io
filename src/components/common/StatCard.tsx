import React from 'react';

export interface StatCardProps {
  value: string | number;
  label: string;
  variant?: 'default' | 'warm' | 'coral' | 'gold' | 'benchmark' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  description?: string;
  features?: string[];
  colorTheme?: 'warm' | 'coral' | 'gold' | 'gray';
  hover?: boolean;
  className?: string;
}

/**
 * StatCard component for displaying statistics and metrics
 *
 * @param value - The main statistic value
 * @param label - Description of the statistic
 * @param variant - Visual style variant
 * @param size - Size variant for the card
 * @param icon - Optional icon to display
 * @param description - Additional descriptive text
 * @param features - List of feature items (for benchmark variant)
 * @param hover - Whether to apply hover effects
 * @param className - Additional CSS classes
 */
const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  variant = 'default',
  size = 'md',
  icon,
  description,
  features,
  colorTheme = 'warm',
  hover = true,
  className = '',
}) => {
  const getCardClasses = () => {
    const baseClasses =
      'relative rounded-2xl border-0 transition-all duration-300';
    const sizeClasses = size === 'lg' ? 'p-8' : size === 'sm' ? 'p-4' : 'p-6';
    const hoverClasses = hover
      ? 'group hover:shadow-xl hover:-translate-y-1'
      : '';

    switch (variant) {
      case 'warm':
        return `${baseClasses} ${sizeClasses} bg-linear-to-br from-warm-50 to-coral-50 ${hoverClasses}`;
      case 'coral':
        return `${baseClasses} ${sizeClasses} bg-linear-to-br from-coral-50 to-gold-50 ${hoverClasses}`;
      case 'gold':
        return `${baseClasses} ${sizeClasses} bg-linear-to-br from-gold-50 to-warm-50 ${hoverClasses}`;
      case 'benchmark':
        return `${baseClasses} ${sizeClasses} bg-linear-to-br from-warm-50 to-white border border-warm-100 shadow-lg ${hoverClasses}`;
      case 'minimal':
        return `${baseClasses} ${sizeClasses} bg-white ${hoverClasses}`;
      default:
        return `${baseClasses} ${sizeClasses} bg-white shadow-lg ${hoverClasses}`;
    }
  };

  const getValueClasses = () => {
    const sizeClasses =
      size === 'lg' ? 'text-4xl' : size === 'sm' ? 'text-2xl' : 'text-3xl';
    const hoverClasses = hover ? 'group-hover:scale-110' : '';
    const colorClasses =
      variant === 'warm'
        ? 'text-warm-600'
        : variant === 'coral'
          ? 'text-coral-600'
          : variant === 'gold'
            ? 'text-gold-600'
            : 'text-gray-900';

    return `${sizeClasses} font-bold ${colorClasses} mb-2 ${hoverClasses} transition-transform duration-300`;
  };

  const getLabelClasses = () => {
    const sizeClasses = size === 'sm' ? 'text-xs' : 'text-sm';
    return `${sizeClasses} text-gray-600 font-medium`;
  };

  const getIconContainerClasses = () => {
    const baseClasses = 'rounded-xl flex items-center justify-center shrink-0';
    const sizeClasses =
      size === 'lg' ? 'w-16 h-16' : size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';
    const hoverClasses = hover ? 'group-hover:scale-110' : '';
    const colorClasses =
      variant === 'warm'
        ? 'bg-linear-to-br from-warm-400 to-warm-600'
        : variant === 'coral'
          ? 'bg-linear-to-br from-coral-400 to-coral-600'
          : variant === 'gold'
            ? 'bg-linear-to-br from-gold-400 to-gold-600'
            : 'bg-linear-to-br from-warm-400 to-warm-600';

    return `${baseClasses} ${sizeClasses} ${colorClasses} shadow-md ${hoverClasses} transition-transform duration-300`;
  };

  const getGlowEffect = () => {
    if (variant !== 'benchmark' || !hover) return null;

    const colorMap: Record<string, string> = {
      warm: 'from-warm-400 to-warm-600',
      coral: 'from-coral-400 to-coral-600',
      gold: 'from-gold-400 to-gold-600',
    };

    return (
      <div
        className={`benchmark-card-glow absolute -inset-1 bg-linear-to-r ${colorMap[colorTheme] || colorMap.warm} rounded-2xl opacity-0 group-hover:opacity-25 transition-all duration-500 ease-out blur-xl`}
      />
    );
  };

  if (variant === 'benchmark' && features) {
    return (
      <div className={`benchmark-card group ${className}`}>
        {getGlowEffect()}
        <div className={`relative ${getCardClasses()} ease-out`}>
          <div className="flex items-center justify-between mb-4">
            <div className={getIconContainerClasses()}>{icon}</div>
            <span
              className={`text-xs font-medium text-${
                colorTheme === 'warm'
                  ? 'warm-600 bg-warm-100'
                  : colorTheme === 'coral'
                    ? 'coral-600 bg-coral-100'
                    : colorTheme === 'gold'
                      ? 'gold-600 bg-gold-100'
                      : 'warm-600 bg-warm-100'
              } px-2 py-1 rounded-full group-hover:bg-${
                colorTheme === 'warm'
                  ? 'warm-200'
                  : colorTheme === 'coral'
                    ? 'coral-200'
                    : colorTheme === 'gold'
                      ? 'gold-200'
                      : 'warm-200'
              } transition-colors duration-300`}
            >
              {label}
            </span>
          </div>
          <div className={getValueClasses()}>{value}</div>
          <p className="text-gray-700 text-sm mb-3">{description}</p>
          <div className="space-y-1">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center text-xs text-gray-600 group-hover:text-${
                variant === 'warm' ? 'warm-600' :
                variant === 'coral' ? 'coral-600' :
                variant === 'gold' ? 'gold-600' :
                'warm-600'
              } transition-colors duration-300"
              >
                <svg
                  className={`w-3 h-3 text-${
                    colorTheme === 'warm'
                      ? 'warm-500'
                      : colorTheme === 'coral'
                        ? 'coral-500'
                        : colorTheme === 'gold'
                          ? 'gold-500'
                          : 'warm-500'
                  } mr-1.5 group-hover:text-${
                    colorTheme === 'warm'
                      ? 'warm-600'
                      : colorTheme === 'coral'
                        ? 'coral-600'
                        : colorTheme === 'gold'
                          ? 'gold-600'
                          : 'warm-600'
                  } transition-colors duration-300`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${getCardClasses()} ${className}`}>
      {getGlowEffect()}
      <div className="relative">
        {icon && (
          <div className="flex items-center justify-between mb-4">
            <div className={getIconContainerClasses()}>{icon}</div>
          </div>
        )}
        <div className={getValueClasses()}>{value}</div>
        <div className={getLabelClasses()}>{label}</div>
        {description && (
          <p className="text-gray-600 text-sm mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
