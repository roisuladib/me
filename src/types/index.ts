import { SVGProps } from 'react';

export type IconSvgProps = SVGProps<SVGSVGElement> & {
   size?: number;
};

export type Children = {
   children: React.ReactNode;
};
