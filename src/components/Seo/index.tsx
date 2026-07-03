import Head from 'next/head';

import { defaultOgImage, siteUrl } from '../../data/seo';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function Seo({
  title,
  description,
  path,
  image = defaultOgImage,
}: SeoProps) {
  const canonicalUrl = new URL(path, siteUrl).toString();
  const imageUrl = image.startsWith('http')
    ? image
    : new URL(image, siteUrl).toString();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="davifsroberto" />
      <meta
        name="keywords"
        content="Davi Roberto, davifsroberto, frontend engineer, React, Next.js, TypeScript"
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
