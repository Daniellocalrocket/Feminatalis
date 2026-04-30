import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  schema?: object;
  ogType?: 'website' | 'article' | 'business.medical';
}

export const SEO = ({ title, description, schema, ogType = 'website' }: SEOProps): JSX.Element | null => {
  useEffect(() => {
    // 1. Title & Meta Description
    document.title = `${title} | feminatalis`;
    
    const updateMetaTag = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('og:title', `${title} | feminatalis`, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:site_name', 'feminatalis', 'property');

    // 2. Schema.org (JSON-LD) Injection
    if (schema) {
      const scriptId = 'json-ld-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (script) {
        script.textContent = JSON.stringify(schema);
      } else {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      }
    }

    return () => {
      // Cleanup schema script on unmount to avoid duplicates
      const script = document.getElementById('json-ld-schema');
      if (script) script.remove();
    };
  }, [title, description, schema, ogType]);

  return null;
};

export default SEO;
