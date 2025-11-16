import { useState } from 'react';
import { EnvironmentParameters, ParameterType } from '../../types/environment';

interface ParameterInputProps {
  params: EnvironmentParameters;
  onParametersChange: (
    parameters: Record<string, string | number | boolean>
  ) => void;
  disabled?: boolean;
  disabledReason?: 'play-mode' | 'not-started' | 'both';
}

const ParameterInput: React.FC<ParameterInputProps> = ({
  params,
  onParametersChange,
  disabled = false,
  disabledReason = 'both',
}) => {
  const [values, setValues] = useState<
    Record<string, string | number | boolean>
  >(() => {
    const initialValues: Record<string, string | number | boolean> = {};
    Object.entries(params).forEach(([key, type]) => {
      switch (type) {
        case 'boolean':
          initialValues[key] = false;
          break;
        case 'number':
          initialValues[key] = 0;
          break;
        case 'string':
        default:
          initialValues[key] = '';
          break;
      }
    });
    return initialValues;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateAndSetValue = (
    key: string,
    type: ParameterType,
    value: string
  ) => {
    let parsedValue: string | number | boolean;
    let error = '';

    switch (type) {
      case 'boolean':
        parsedValue = value === 'true';
        break;
      case 'number': {
        const numValue = parseFloat(value);
        if (isNaN(numValue)) {
          error = 'Must be a valid number';
          parsedValue = 0;
        } else {
          parsedValue = numValue;
        }
        break;
      }
      case 'string':
      default:
        parsedValue = value;
        break;
    }

    setValues(prev => ({ ...prev, [key]: parsedValue }));
    setErrors(prev => ({ ...prev, [key]: error }));

    if (!error) {
      onParametersChange({ ...values, [key]: parsedValue });
    }
  };

  const renderInput = (key: string, type: ParameterType) => {
    const value = values[key];
    const error = errors[key];

    switch (type) {
      case 'boolean':
        return (
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id={`param-${key}`}
              checked={Boolean(value)}
              onChange={e => {
                const newValue = e.target.checked;
                setValues(prev => ({ ...prev, [key]: newValue }));
                onParametersChange({ ...values, [key]: newValue });
              }}
              disabled={disabled}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <label htmlFor={`param-${key}`} className="text-sm text-gray-700">
              {value ? 'True' : 'False'}
            </label>
          </div>
        );

      case 'number':
        return (
          <div>
            <input
              type="number"
              id={`param-${key}`}
              value={String(value)}
              onChange={e => validateAndSetValue(key, type, e.target.value)}
              disabled={disabled}
              className={`w-full px-3 py-2 text-sm border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                error
                  ? 'border-red-300 bg-red-50'
                  : disabled
                    ? 'border-gray-200 bg-gray-50 text-gray-500'
                    : 'border-gray-300 bg-white hover:border-gray-400'
              }`}
            />
            {error && (
              <p className="mt-1 text-xs text-red-600 font-medium">{error}</p>
            )}
          </div>
        );

      case 'string':
      default:
        return (
          <input
            type="text"
            id={`param-${key}`}
            value={String(value)}
            onChange={e => {
              const newValue = e.target.value;
              setValues(prev => ({ ...prev, [key]: newValue }));
              onParametersChange({ ...values, [key]: newValue });
            }}
            disabled={disabled}
            className={`w-full px-3 py-2 text-sm border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              disabled
                ? 'border-gray-200 bg-gray-50 text-gray-500'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          />
        );
    }
  };

  const getParameterTypeInfo = (type: ParameterType) => {
    switch (type) {
      case 'boolean':
        return {
          label: 'Boolean',
          description: 'True or False',
          color: 'purple',
        };
      case 'number':
        return {
          label: 'Number',
          description: 'Numeric',
          color: 'blue',
        };
      case 'string':
      default:
        return {
          label: 'String',
          description: 'Text',
          color: 'green',
        };
    }
  };

  if (!params || Object.keys(params).length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-gray-900">
          Evaluation Parameters
        </h3>
        <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">
          Required Input
        </div>
      </div>

      <div className="text-xs text-gray-600 mb-4">
        Provide the required parameters for task evaluation. These will be
        passed to the environment when you click Finish.
      </div>

      <div className="space-y-3">
        {Object.entries(params).map(([key, type]) => {
          const typeInfo = getParameterTypeInfo(type);
          return (
            <div
              key={key}
              className={`p-4 bg-white border-2 rounded-lg transition-all duration-200 ${
                disabled
                  ? 'border-gray-200 opacity-60'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <label
                      htmlFor={`param-${key}`}
                      className="text-sm font-bold text-gray-900 uppercase tracking-wide"
                    >
                      {key}
                    </label>
                    <span
                      className={`px-2 py-1 text-xs font-bold uppercase rounded ${
                        typeInfo.color === 'purple'
                          ? 'bg-purple-100 text-purple-700 border border-purple-300'
                          : typeInfo.color === 'blue'
                            ? 'bg-blue-100 text-blue-700 border border-blue-300'
                            : 'bg-green-100 text-green-700 border border-green-300'
                      }`}
                    >
                      {typeInfo.label}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-3">{renderInput(key, type)}</div>
            </div>
          );
        })}
      </div>

      {disabled && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-amber-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
            <span className="text-xs text-amber-800 font-medium">
              {disabledReason === 'play-mode' &&
                'Parameters are locked. Switch to Evaluate Mode to enable input.'}
              {disabledReason === 'not-started' &&
                'Parameters are locked. Click Start to begin evaluation and enable input.'}
              {disabledReason === 'both' &&
                'Parameters are locked. Switch to Evaluate Mode and click Start to enable input.'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParameterInput;
