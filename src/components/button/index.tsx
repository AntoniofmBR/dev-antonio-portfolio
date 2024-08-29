import { ReactElement } from 'react';
import { IconProps } from 'phosphor-react';

type ButtonProps = {
  children: ReactElement,
  icon?: React.ComponentType<IconProps>;
  onClick?: () => void;
  className?: string;
}

export function Button({ icon: Icon, onClick, className, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 py-4 px-4 text-white rounded-2xl ${className}`}
    >
      { children }
      {Icon && <Icon size={24} />}
    </button>
  );
};

export default Button;
