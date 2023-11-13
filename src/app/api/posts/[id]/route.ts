import { NextRequest, NextResponse } from 'next/server';
import { data } from '../data';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
   const post = data.find(e => e.id === params.id);
   if (post) return NextResponse.json(data.find(e => e.id === params.id));

   return NextResponse.json(
      {
         status: 'fail',
         message: `${params.id} is invalid`,
      },
      { status: 404 }
   );
}
