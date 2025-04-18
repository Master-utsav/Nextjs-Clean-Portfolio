import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const secretKey = process.env.NEXTAUTH_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string , role: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, role , expiresAt });

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function deleteSession() {
  (await cookies()).delete("session");
  (await cookies()).delete("next-auth.state");
  (await cookies()).delete("next-auth.session-token");
}

export async function isSessionCookie() {
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;
  return session?.userId ? true : false;
}
export async function isAdminSessionCookie() {
  const cookie = (await cookies()).get("session")?.value;
  const session = cookie ? await decrypt(cookie) : null;
  return session?.role === "MASTER" ? true : false;
}

type SessionPayload = {
  userId: string;
  role: string;
  expiresAt: Date;
};

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.log("Failed to verify session" , err);
  }
}