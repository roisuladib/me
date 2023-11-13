/**
 * Concatenates an array of class names and removes duplicates, returning a single space-separated string.
 *
 * @param classNames - An array of class names to be concatenated and de-duplicated.
 * @returns A string containing unique class names separated by a space.
 */
export function classNames(...classNames: string[]): string {
   const classNamesSet = new Set<string>();

   for (const className of classNames) {
      const individualClassNames = className.replace(/\s+/gm, ' ').trim().split(' ');
      individualClassNames.forEach(individualClassName => {
         classNamesSet.add(individualClassName);
      });
   }

   return Array.from(classNamesSet).join(' ');
}
