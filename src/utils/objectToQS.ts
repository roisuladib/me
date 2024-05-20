export function objectToQS(obj: Record<string, any>) {
   if (!obj || Object.keys(obj).length === 0) {
      return '';
   }

   const objString =
      '?' +
      Object.keys(obj)
         .map(key => {
            return `${key}=${encodeURIComponent(obj[key])}`;
         })
         .join('&');

   return objString;
}
