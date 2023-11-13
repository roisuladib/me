import { DARK, THEME } from '$/constants';

export function toggleTheme() {
   const html = document.documentElement.classList;

   if (
      localStorage[THEME] === DARK ||
      (!(THEME in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
   ) {
      html.add(DARK);
      localStorage[THEME] = DARK;
      console.log(DARK);
   } else {
      html.remove(DARK);
      localStorage.removeItem(THEME);
      console.log('light');
   }
}
