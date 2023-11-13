import { NextResponse } from 'next/server';

export default async function GET() {
   try {
      return NextResponse.json([
         {
            id: 'a19333f0-921e-4047-9eb1-5caeaa653f2e',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
         },
         {
            id: '38046086-b788-4e7a-baf6-4ea1dbef43d9',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
         },
      ]);
   } catch (error: any) {
      return NextResponse.json({ message: 'Error', error }, { status: 500 });
   }
}
