import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';
import { getCategoryPrefix } from '@/utils/productIds';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    
    if (!category) {
      return NextResponse.json({ error: 'Category is required' }, { status: 400 });
    }

    const prefix = getCategoryPrefix(category);

    // Fetch all custom IDs to accurately filter and find the maximum sequential number
    const products = await client.fetch(`*[_type == "product" && defined(customId)]{customId}`);
    
    let maxNumber = 0;

    for (const p of products) {
      if (p.customId && p.customId.startsWith(prefix)) {
        const numberPart = p.customId.substring(prefix.length);
        const parsed = parseInt(numberPart, 10);
        if (!isNaN(parsed) && parsed > maxNumber) {
          maxNumber = parsed;
        }
      }
    }

    const nextNumber = maxNumber + 1;
    const nextId = `${prefix}${String(nextNumber).padStart(3, '0')}`;

    return NextResponse.json({ nextId });
  } catch (error: any) {
    console.error('Failed to generate next ID:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
