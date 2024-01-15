export default function Projects() {
   return (
      <>
         {Array.from({ length: 100 }).map((_, i) => (
            <div
               key={i}
               className="">
               Projects {i + 1}
            </div>
         ))}
      </>
   );
}
