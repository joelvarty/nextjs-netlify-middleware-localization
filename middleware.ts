import { NextResponse } from 'next/server'
import {MiddlewareRequest} from '@netlify/next';

export async function middleware(req) {
  const { nextUrl: url, geo } = req
  url.searchParams.set('country', geo.country)

  // Rewrite to URL
  return NextResponse.rewrite(url)
}
