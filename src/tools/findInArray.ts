/**
 * Finds an element in an array that satisfies a given condition provided by a callback function.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The array to search in.
 * @param {(element: T, index: number, array: T[]) => boolean} callback - The callback function that checks each element.
 * @param {any} [args] - The value used as `this` within the callback function (optional).
 * @returns {T | undefined} - The first element that satisfies the condition, or `undefined` if not found.
 * @throws {TypeError} If the callback is not a function.
 */
export default function findInArray<T>(
   arr: T[],
   callback: (element: T, index: number, array: T[]) => boolean,
   args?: any
): T | undefined {
   if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
   }

   for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (callback.call(args, element, i, arr)) {
         return element;
      }
   }

   return undefined;
}
