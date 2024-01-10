/**
 * Converts the first character of a string to uppercase.
 * @param value - The input string.
 * @returns The input string with the first character capitalized.
 */
export function toCapitalize(value: string): string {
   return typeof value === 'string'
      ? value?.charAt(0)?.toUpperCase() + value?.slice(1)
      : String(value);
}
