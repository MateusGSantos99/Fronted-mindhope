import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export const Input = ({
    label,
    type = 'text',
    error,
    className = '',
    id,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && showPassword ? 'text' : type;
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const errorId = error ? `${inputId}-error` : undefined;

    return (
        <div className="space-y-0.5"> {/* Espaçamento vertical reduzido */}
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-medium text-white">
                    {label}
                </label>
            )}
            <div className="relative">
            <input
                id={inputId}
                type={inputType}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={errorId}
                className={`w-full border border-gray-600 rounded-lg px-3 py-1.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-light ${className}`}
                {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dark hover:text-dark/50 transition-colors"
                        aria-label={showPassword ? "ocultar senha" : "mostrar senha"}
                        tabIndex={0}
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
            {error && (
                <p id={errorId} className="text-sm text-red-600" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
};
