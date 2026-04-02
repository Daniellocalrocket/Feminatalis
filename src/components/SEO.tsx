import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: SEOProps): JSX.Element | null => {
  useEffect(() => {
    // 1. Title anpassen
    document.title = `${title} | feminatalis`;

    // 2. Meta Description anpassen oder neu erstellen
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);

  return null; // Diese Komponente rendert nichts visuelles
};

export default SEO;
