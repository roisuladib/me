'use client';

import { Button } from '$/components';
import { increment, useAppDispatch } from '$/store';

export default function Contact() {
   const dispatch = useAppDispatch();

   return (
      <div className="">
         <div className="">Contact</div>
         <Button onClick={() => dispatch(increment())}>Increment</Button>
      </div>
   );
}
