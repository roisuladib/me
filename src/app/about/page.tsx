export default function About() {
   return (
      <section className="container">
         <div className="flex flex-wrap gap-12">
            <div className="lg:w-6/12 lg:pb-20 lg:pt-32">
               <div className="mt-8 space-y-8 lg:-mr-24 xl:-mr-0">
                  <h1 className="text-4xl font-bold text-gray-800 dark:text-white md:text-5xl lg:leading-tight">
                     Uncompromised Versatility –When it Matters the Most.
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                     Quod rerum dolor ab harum facere quo nihil labore necessitatibus tempora?
                  </p>

                  <div className="flex flex-col gap-4 sm:flex-row">
                     <button
                        type="button"
                        title="Start buying"
                        className="w-full rounded-xl bg-green-600 px-6 py-3 text-center transition hover:bg-green-700 focus:bg-green-500 active:bg-green-800 sm:w-max">
                        <span className="block font-semibold text-white">Book Demo</span>
                     </button>
                     <button
                        type="button"
                        title="Start buying"
                        className="w-full rounded-xl px-6 py-3 text-center transition focus:bg-green-100 active:bg-green-200 dark:focus:bg-gray-800 dark:active:bg-green-900 sm:w-max">
                        <div className="flex justify-center">
                           <span className="block font-semibold text-green-700 dark:text-green-400">
                              Our showreel
                           </span>
                        </div>
                     </button>
                  </div>
               </div>

               <div className="mt-8 border-t border-gray-300 pt-8 dark:border-gray-700">
                  <h6 className="text-lg font-semibold text-green-800 dark:text-green-400">
                     Trusted by
                  </h6>
                  <div className="mt-6 flex gap-6">
                     <div className="flex items-center">
                        <img
                           className="h-auto w-auto -hue-rotate-30 dark:grayscale"
                           src="images/clients/grabyo.png"
                           width="50"
                           height="20"
                           alt="logo partener"
                        />
                     </div>

                     <div className="flex items-center">
                        <img
                           className="h-auto w-auto -hue-rotate-30 dark:grayscale"
                           src="images/clients/lifegroups.png"
                           width="50"
                           height="20"
                           alt="logo partener"
                        />
                     </div>
                     <div className="flex items-center">
                        <img
                           className="h-auto w-auto -hue-rotate-30 dark:grayscale"
                           src="images/clients/lilly.png"
                           width="50"
                           height="20"
                           alt="logo partener"
                        />
                     </div>

                     <div className="flex items-center">
                        <img
                           className="h-auto w-auto -hue-rotate-30 dark:grayscale"
                           src="images/clients/microsoft.png"
                           width="50"
                           height="20"
                           alt="logo partener"
                        />
                     </div>
                  </div>
               </div>
            </div>

            <div className="bottom-0 hidden md:-right-32 md:ml-auto md:block md:w-full lg:absolute lg:-right-32 lg:w-[60%] xl:-right-48">
               <img
                  src="images/horse1.png"
                  className="ml-48 lg:ml-0"
                  alt="gril on an horse"
                  loading="lazy"
                  width="1053"
                  height="772"
               />
            </div>
         </div>
      </section>
   );
}
