'use client';

import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

const variants = {
   hidden: { opacity: 0, x: -200, y: 0 },
   enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: PropsWithChildren) {
   return (
      <>
         <motion.main
            className="flex grow flex-col"
            variants={variants}
            initial="hidden"
            animate="enter"
            transition={{ type: 'linear' }}>
            {children}
         </motion.main>
      </>
   );
}
