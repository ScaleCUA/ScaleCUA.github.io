import React from 'react';

export interface BackgroundDecoration {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  size?: string;
  color?: string;
  color2?: string;
  opacity?: number;
  blur?: string;
  animationDelay?: string;
}

export interface BackgroundDecorationsProps {
  variant?: 'default' | 'light' | 'leaderboard' | 'hero-light';
  opacity?: number;
  decorations?: BackgroundDecoration[];
  className?: string;
}

/**
 * BackgroundDecorations component for consistent background visual effects
 *
 * @param variant - Predefined decoration patterns
 * @param opacity - Global opacity override
 * @param decorations - Custom decoration configurations
 * @param className - Additional CSS classes
 */
const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({
  variant = 'default',
  opacity,
  decorations,
  className = '',
}) => {
  const getDefaultDecorations = (): BackgroundDecoration[] => {
    switch (variant) {
      case 'light':
        return [
          {
            top: '10px',
            left: '10px',
            size: 'w-64 h-64',
            color: 'bg-warm-500',
            opacity: 0.05,
            blur: 'blur-3xl',
          },
          {
            top: '20px',
            right: '20px',
            size: 'w-96 h-96',
            color: 'bg-coral-500',
            opacity: 0.05,
            blur: 'blur-3xl',
          },
          {
            bottom: '0',
            left: '50%',
            size: 'w-80 h-80',
            color: 'bg-gold-500',
            opacity: 0.05,
            blur: 'blur-3xl',
          },
        ];
      case 'leaderboard':
        return [
          {
            top: '-40px',
            right: '-40px',
            size: 'w-80 h-80',
            color: 'from-warm-200/20',
            color2: 'to-coral-200/20',
            opacity: 0.2,
            blur: 'blur-3xl',
            animationDelay: '0s',
          },
          {
            top: '20px',
            left: '-20px',
            size: 'w-60 h-60',
            color: 'from-coral-200/20',
            color2: 'to-gold-200/20',
            opacity: 0.2,
            blur: 'blur-2xl',
            animationDelay: '1s',
          },
          {
            bottom: '-20px',
            right: '20px',
            size: 'w-72 h-72',
            color: 'from-gold-200/20',
            color2: 'to-warm-200/20',
            opacity: 0.2,
            blur: 'blur-2xl',
            animationDelay: '2s',
          },
        ];
      case 'hero-light':
        return [
          {
            top: '-40px',
            right: '-40px',
            size: 'w-80 h-80',
            color: 'from-warm-200/20',
            color2: 'to-coral-200/20',
            opacity: 0.2,
            blur: 'blur-3xl',
          },
          {
            top: '20px',
            left: '-20px',
            size: 'w-60 h-60',
            color: 'from-coral-200/20',
            color2: 'to-gold-200/20',
            opacity: 0.2,
            blur: 'blur-2xl',
            animationDelay: '1s',
          },
          {
            bottom: '-20px',
            right: '20px',
            size: 'w-72 h-72',
            color: 'from-gold-200/20',
            color2: 'to-warm-200/20',
            opacity: 0.2,
            blur: 'blur-2xl',
            animationDelay: '2s',
          },
        ];
      default:
        return [
          {
            top: '10px',
            left: '10px',
            size: 'w-64 h-64',
            color: 'bg-white',
            opacity: 0.1,
            blur: 'blur-3xl',
          },
          {
            top: '20px',
            right: '20px',
            size: 'w-96 h-96',
            color: 'bg-coral-300',
            opacity: 0.1,
            blur: 'blur-3xl',
          },
          {
            bottom: '0',
            left: '50%',
            size: 'w-80 h-80',
            color: 'bg-gold-300',
            opacity: 0.1,
            blur: 'blur-3xl',
          },
        ];
    }
  };

  const finalDecorations = decorations || getDefaultDecorations();

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {finalDecorations.map((decoration, index) => {
        const positionClasses = [
          decoration.top ? `top-[${decoration.top}]` : '',
          decoration.right ? `right-[${decoration.right}]` : '',
          decoration.bottom ? `bottom-[${decoration.bottom}]` : '',
          decoration.left ? `left-[${decoration.left}]` : '',
        ]
          .filter(Boolean)
          .join(' ');

        const colorClasses = decoration.color2
          ? `bg-gradient-to-br ${decoration.color} ${decoration.color2}`
          : decoration.color || 'bg-white';

        const animationClasses = decoration.animationDelay
          ? 'animate-pulse'
          : '';

        return (
          <div
            key={index}
            className={`absolute ${positionClasses} ${decoration.size || 'w-64 h-64'} ${colorClasses} rounded-full ${decoration.blur || 'blur-3xl'} ${animationClasses}`}
            style={{
              opacity: opacity !== undefined ? opacity : decoration.opacity,
              animationDelay: decoration.animationDelay,
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundDecorations;
