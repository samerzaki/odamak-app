import { timingSafeEqual } from 'node:crypto';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const PAGES = ['/', '/gold', '/silver', '/crypto', '/currencies'];

function authorized(request: Request): boolean {
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected) return false;
  const received = request.headers.get('x-revalidate-secret') ?? '';
  const a = Buffer.from(received);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/**
 * Called by the Laravel API right after new prices are stored, so the
 * statically rendered pages (kept for SEO) are rebuilt immediately instead of
 * waiting for the next visitor to trigger a stale-while-revalidate refresh.
 */
export async function POST(request: Request) {
  if (!authorized(request)) {
    return new NextResponse(null, { status: 404 });
  }
  for (const path of PAGES) revalidatePath(path);
  revalidatePath('/karat/[karat]', 'page');
  return NextResponse.json({ revalidated: true });
}
