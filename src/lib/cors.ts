// import { NextRequest, NextResponse } from 'next/server';

// export function cors(req: NextRequest) {
//   const allowedOrigins = ["https://www.masterutsav.in", "http://localhost:3000", "https://master-utsav.vercel.app"];

//   const origin = req.headers.get('Origin');
  
//   if (allowedOrigins.includes(origin || "")) {
//     const response = NextResponse.next();
    
//     response.headers.set("Access-Control-Allow-Origin", origin || "*");
//     response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    
//     if (req.method === "OPTIONS") {
//       response.headers.set("Access-Control-Max-Age", "86400"); 
//       return response; 
//     }

//     return response;
//   }

//   return NextResponse.json({ message: 'CORS error: Forbidden origin' }, { status: 403 });
// }
