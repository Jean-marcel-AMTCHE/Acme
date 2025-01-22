import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts'; // Import de la police Lusitana

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Section logo */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>

      {/* Triangle décoratif */}
      <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black" />

      {/* Titre principal avec police Lusitana */}
      <h1 className={`${lusitana.className} text-4xl font-bold mt-6`}>Welcome to Acme</h1>
      
      {/* Description avec police Lusitana */}
      <p className={`${lusitana.className} text-lg mt-2`}>
        The best app for managing your business.
      </p>

      {/* Image de héros (bureau) */}
      <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        <Image
          src="/hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Hero image for desktop version"
        />
        
        {/* Image de héros (mobile) */}
        <Image
          src="/hero-mobile.png"
          width={560}
          height={620}
          className="md:hidden"
          alt="Hero image for mobile version"
        />
      </div>

      {/* Lien vers la page de login */}
      <Link
        href="/login"
        className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-700"
      >
        Login
        <ArrowRightIcon className="ml-2 h-5 w-5" />
      </Link>
    </main>
  );
}
