import dynamic from 'next/dynamic';
import { FC } from 'react';

const AppAnimatedCursor = dynamic(() => import('react-animated-cursor'), {
   ssr: false,
});

type AnimatedCursorProps = {
   theme?: 'donut' | 'blend';
};

export const AnimatedCursor: FC<AnimatedCursorProps> = ({ theme }) => (
   <AppAnimatedCursor
      {...(theme === 'blend' && {
         color: '#fff',
      })}
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={theme === 'donut' ? 2 : 1.7}
      outerAlpha={0}
      innerStyle={{
         backgroundColor: 'var(--cursor-color)',
      }}
      outerStyle={{
         border: '3px solid var(--cursor-color)',
         ...(theme === 'blend' && {
            mixBlendMode: 'exclusion',
         }),
      }}
   />
);

AnimatedCursor.defaultProps = {
   theme: 'donut',
};
