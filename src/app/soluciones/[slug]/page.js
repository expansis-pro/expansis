import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const solution = getSolutionBySlug(slug);
    if (!solution) notFound();

    return buildMetadata({
        title: solution.seo?.title || solution.title, // sin "| Expansis Pro": lo pone el template
        description: solution.seo?.description || solution.tagline,
        path: `/soluciones/${solution.slug}`,
        images: [{ url: solutionImages[solution.slug] || '/assets/images/expansisPro_target.webp', alt: solution.title }],
    });
}