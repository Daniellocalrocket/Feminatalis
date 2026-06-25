import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { fallbackCategories, PriceCategory, PriceItem } from "@/data/priceListFallback";

let cachePromise: Promise<PriceCategory[]> | null = null;

function fetchPriceList(): Promise<PriceCategory[]> {
  if (cachePromise) return cachePromise;
  cachePromise = (async () => {
    try {
      const { data, error } = await supabase
        .from("settings")
        .select("value")
        .eq("key", "price_list_data")
        .single();
      if (data?.value) {
        return JSON.parse(data.value as string);
      }
    } catch {}
    return fallbackCategories;
  })();
  return cachePromise;
}

export function usePriceList() {
  const [data, setData] = useState<PriceCategory[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPriceList()
      .then((result) => {
        setData(result);
      })
      .catch(() => {
        setData(fallbackCategories);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function getItem(itemId: string): PriceItem | undefined {
    if (!data) return undefined;
    for (const cat of data) {
      const found = cat.items.find((i) => i.id === itemId);
      if (found) return found;
    }
    return undefined;
  }

  function getHint(itemId: string, fallback?: string): string {
    const item = getItem(itemId);
    return item ? `${item.name}: ${item.price}` : (fallback ?? "Transparente Preisgestaltung");
  }

  return { data, loading, getItem, getHint };
}
