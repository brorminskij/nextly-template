import { NextResponse } from 'next/server';

// Server-side route that fetches reviews from Google Places API.
// Requires environment variables: GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    return NextResponse.json({ error: 'Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID' }, { status: 400 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=en&key=${key}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json({ error: 'Places API error', detail: text }, { status: 502 });
    }
    const data = await resp.json();
    const reviews = (data.result?.reviews ?? []).slice(0, 3).map((r: any) => ({
      text: r.text,
      author: r.author_name,
      time: r.relative_time_description ?? (r.time ? new Date(r.time * 1000).toLocaleDateString() : undefined),
      rating: r.rating,
    }));

    return NextResponse.json({ reviews });
  } catch (err: any) {
    return NextResponse.json({ error: 'Fetch failed', detail: String(err) }, { status: 500 });
  }
}
