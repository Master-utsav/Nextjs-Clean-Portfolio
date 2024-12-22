import { NextRequest, NextResponse } from 'next/server';

export function cors(req: NextRequest) {
  const allowedOrigins = ["https://masterutsav.in", "http://localhost:3000", "https://master-utsav.vercel.app"];

  const origin = req.headers.get('Origin');
  
  if (allowedOrigins.includes(origin || "")) {
    const response = NextResponse.next();
    
    response.headers.set("Access-Control-Allow-Origin", origin || "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
  }

  return NextResponse.json({ message: 'CORS error: Forbidden origin' }, { status: 403 });
}
