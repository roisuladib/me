import { NextRequest, NextResponse } from 'next/server';
import { data } from './data';

export async function GET(req: NextRequest) {
   let _data = data;

   const { searchParams } = new URL(req.url);
   const title = searchParams.get('title');
   if (title) _data = _data.filter(e => e.title.includes(title));

   return NextResponse.json(_data);
}
