import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
   return (
      <div className="mx-auto max-w-7xl px-16">
         <div className="flex items-center justify-between gap-5">
            <Image
               src="/next.svg"
               width={120}
               height={24}
               alt="Logo"
               priority
            />
            <div className="flex items-center justify-center gap-5">
               <Link href="/">Home</Link>
               <Link href="/projects">Projects</Link>
            </div>
         </div>
      </div>
   );
}
