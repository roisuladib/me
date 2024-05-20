export function toCapitalize(value: string) {
   if (typeof value !== 'string') return '';

   return value.charAt(0).toUpperCase() + value.substring(1);
}
