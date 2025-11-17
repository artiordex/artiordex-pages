/**
 * Description: SEORenderer.tsx - 📌 React Helmet 기반 SEO Renderer
 * Author: Shiwoo Min
 * Date: 2025-11-17
 */

import type { SEOProps } from "@/types/seo.types";
import { Helmet } from "react-helmet";

export function SEORenderer(props: SEOProps) {
  const {
    title,
    description,
    keywords,
    canonical,

    ogTitle,
    ogDescription,
    ogImage,
    ogType = "website",
    ogUrl,

    twitterTitle,
    twitterDescription,
    twitterImage,

    jsonLd,
  } = props;

  return (
    <Helmet>
      {/* 기본 메타 */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* OpenGraph */}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}

      {/* Twitter */}
      {twitterTitle && (
        <meta property="twitter:title" content={twitterTitle} />
      )}
      {twitterDescription && (
        <meta
          property="twitter:description"
          content={twitterDescription}
        />
      )}
      {twitterImage && (
        <meta property="twitter:image" content={twitterImage} />
      )}

      {/* JSON-LD 구조화 데이터 */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

export default SEORenderer;
