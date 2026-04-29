import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export function useSiteImages() {
  const [images, setImages] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const { data, error } = await supabase
          .from('settings')
          .select('key, value')
          .like('key', 'img_%');

        if (error) throw error;

        const imageMap: Record<string, string> = {};
        data?.forEach(item => {
          imageMap[item.key] = item.value;
        });
        setImages(imageMap);
      } catch (err) {
        console.error("Error fetching site images:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  const getImageUrl = (key: string, fallback: string) => {
    const fullKey = key.startsWith('img_') ? key : `img_${key}`;
    return images[fullKey] || fallback;
  };

  return { images, loading, getImageUrl };
}
