import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Initialize client only if variables exist to avoid crashing
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export async function POST(request: Request) {
  try {
    const { productId, productName, category } = await request.json();

    if (!supabase) {
      console.warn(
        'Supabase is not configured. Click logged to server logs:',
        { productId, productName, category, timestamp: new Date().toISOString() }
      );
      return NextResponse.json({
        success: true,
        message: 'Click recorded in server console (Supabase not configured)',
      });
    }

    const { error } = await supabase.from('whatsapp_clicks').insert([
      {
        product_id: productId,
        product_name: productName,
        category: category,
      },
    ]);

    if (error) {
      console.error('Supabase error inserting click event:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error logging WhatsApp click:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
