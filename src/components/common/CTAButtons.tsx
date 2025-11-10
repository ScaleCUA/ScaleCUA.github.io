import React from 'react';
import { Link } from 'react-router-dom';

export interface CTAButton {
  text: string;
  to?: string;
  onClick?: () => void;
  variant:
    | 'primary'
    | 'secondary'
    | 'primary-on-warm'
    | 'secondary-on-warm'
    | 'outline'
    | 'white'
    | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  className?: string;
}

export interface CTAButtonsProps {
  buttons: CTAButton[];
  layout?: 'horizontal' | 'vertical' | 'stacked';
  alignment?: 'left' | 'center' | 'right';
  spacing?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * CTAButtons component for consistent call-to-action button layouts
 *
 * @param buttons - Array of button configurations
 * @param layout - Button layout arrangement
 * @param alignment - Button alignment
 * @param spacing - Spacing between buttons
 * @param className - Additional CSS classes
 */
const CTAButtons: React.FC<CTAButtonsProps> = ({
  buttons,
  layout = 'horizontal',
  alignment = 'center',
  spacing = 'md',
  className = '',
}) => {
  const getContainerClasses = () => {
    const baseClasses = 'flex';
    const layoutClasses =
      layout === 'vertical' ? 'flex-col' : 'flex-col sm:flex-row';
    const alignmentClasses =
      alignment === 'left'
        ? 'justify-start'
        : alignment === 'right'
          ? 'justify-end'
          : 'justify-center';
    const spacingClasses =
      spacing === 'sm' ? 'gap-2' : spacing === 'lg' ? 'gap-6' : 'gap-4';

    return `${baseClasses} ${layoutClasses} ${spacingClasses} ${alignmentClasses} ${className}`;
  };

  const getButtonClasses = (button: CTAButton) => {
    const baseClasses =
      'font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 text-center flex items-center justify-center';
    const sizeClasses =
      button.size === 'sm'
        ? 'px-6 py-3 text-sm'
        : button.size === 'lg'
          ? 'px-10 py-4 text-lg'
          : 'px-8 py-4 text-base';
    const disabledClasses = button.disabled
      ? 'opacity-50 cursor-not-allowed'
      : '';

    switch (button.variant) {
      case 'primary':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} btn-primary shadow-lg hover:shadow-2xl`;
      case 'secondary':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} btn-secondary shadow-lg hover:shadow-2xl`;
      case 'primary-on-warm':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} btn-primary-on-warm shadow-xl`;
      case 'secondary-on-warm':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} btn-secondary-on-warm shadow-xl`;
      case 'outline':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white hover:text-white`;
      case 'white':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} bg-white text-coral-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl`;
      case 'gradient':
        return `${baseClasses} ${sizeClasses} ${disabledClasses} bg-gradient-to-r from-warm-500 to-warm-600 text-white hover:from-warm-600 hover:to-warm-700 shadow-lg hover:shadow-2xl`;
      default:
        return `${baseClasses} ${sizeClasses} ${disabledClasses} btn-primary shadow-lg hover:shadow-2xl`;
    }
  };

  const renderButton = (button: CTAButton, index: number) => {
    const iconElement = button.icon && (
      <span className={button.iconPosition === 'right' ? 'ml-3' : 'mr-3'}>
        {button.icon}
      </span>
    );

    const buttonContent = (
      <>
        {button.iconPosition === 'left' && iconElement}
        {button.text}
        {button.iconPosition === 'right' && iconElement}
      </>
    );

    if (button.to && !button.disabled) {
      return (
        <Link
          key={index}
          to={button.to}
          className={`${getButtonClasses(button)} ${button.className || ''}`}
        >
          {buttonContent}
        </Link>
      );
    }

    return (
      <button
        key={index}
        onClick={button.onClick}
        disabled={button.disabled}
        className={`${getButtonClasses(button)} ${button.className || ''}`}
      >
        {buttonContent}
      </button>
    );
  };

  return (
    <div className={getContainerClasses()}>
      {buttons.map((button, index) => renderButton(button, index))}
    </div>
  );
};

export default CTAButtons;
