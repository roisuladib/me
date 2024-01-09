'use client';

import { Button } from '#/components';
import { useRouter } from 'next/navigation';

export default function Home() {
   const router = useRouter();
   return (
      <>
         <Button
            size="lg"
            onClick={() => router.push('/projects')}>
            Projects
         </Button>
      </>
   );
}
