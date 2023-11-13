'use client';
import { MDXComponents } from 'mdx/types';

/**
 * A hook for customizing or extending MDX components used in rendering MDX content.
 *
 * @param {MDXComponents} components - The MDX components to be customized or extended.
 * @returns {MDXComponents} - An object containing the updated MDX components.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
   return {
      ...components,
   };
}
