// src/app/api/faq/route.js
import { NextResponse } from 'next/server';
import { faqsData } from '@/data/faqsData';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get('tag');

    let result = faqsData;
    if (tag) {
        result = faqsData.filter((faq) => faq.tags.includes(tag.toLowerCase().trim()));
    }

    return NextResponse.json({
        success: true,
        total: result.length,
        data: result
    });
}