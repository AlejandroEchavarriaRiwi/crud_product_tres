import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    // Your handler code here
    return NextResponse.json({ message: 'Success' });
}
