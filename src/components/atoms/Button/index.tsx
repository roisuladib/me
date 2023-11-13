import type {
   ButtonHTMLAttributes,
   JSXElementConstructor,
   ReactElement,
} from 'react';
import React, { forwardRef } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const button = cva(['appearance-none', 'rounded-2xl'], {
   variants: {
      colorScheme: {
         primary: [
            'bg-blue-500',
            'text-white',
            'border-transparent',
            'hover:bg-blue-600',
         ],
         secondary: [
            'bg-white',
            'text-gray-800',
            'border-gray-400',
            'hover:bg-gray-100',
         ],
      },
      size: {
         small: ['text-sm', 'py-1', 'px-2'],
         medium: ['text-base', 'py-2', 'px-4'],
      },
      variant: {
         solid: ['bg-green-500'],
      },
   },
   compoundVariants: [
      { colorScheme: 'primary', size: 'medium', class: 'uppercase' },
   ],
   defaultVariants: {
      colorScheme: 'primary',
      size: 'medium',
   },
});

type Ref = HTMLButtonElement;

type ButtonProps = ButtonHTMLAttributes<Ref> &
   VariantProps<typeof button> & {
      /**
       * If true, the button will be styled in its active state.
       * @type {boolean}
       * @default false
       */
      isActive?: boolean;
      /**
       * If true, the button will be disabled.
       * @type {boolean}
       * @default false
       */
      isDisabled?: boolean;
      /**
       * If true, the button will show a spinner.
       * @type {boolean}
       * @default false
       */
      isLoading?: boolean;
      /**
       * The label to show in the button when isLoading is true If no text is passed, it only shows the spinner
       * @type {string}
       */
      loadingText?: string;
      /**
       * If added, the button will show an icon before the button's label.
       * @type {ReactElement<any, string | JSXElementConstructor<any>>}
       */
      leftIcon?: ReactElement;
      /**
       * If added, the button will show an icon after the button's label.
       * @type {ReactElement<any, string | JSXElementConstructor<any>>}
       */
      rightIcon?: ReactElement;
   };

export const Button = forwardRef<Ref, ButtonProps>(function Button(
   { className, colorScheme, size, isLoading, children, ...props },
   ref
) {
   return (
      <button
         ref={ref}
         className={button({ colorScheme, size, className })}
         {...props}
      >
         {children}
      </button>
   );
});
