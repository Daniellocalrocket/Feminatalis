import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://smehxkouprlqsvyppxkp.supabase.co';
const supabaseKey = 'sb_publishable_g6c7Ou5F1TeR9DJpThU7Eg_GBMrQxhb';

const supabase = createClient(supabaseUrl, supabaseKey);

async function insertArticle() {
  const article = {
    title: "Zell-Performance & Mitochondriale Wahrheit: Warum Standard-Labore oft lügen",
    slug: "zell-performance-mitochondriale-wahrheit",
    excerpt: "Haben Sie schon einmal gehört: „Ihre Blutwerte sind völlig normal", obwohl Sie sich morgens fühlen, als hätte man Ihnen im Schlaf den Stecker gezogen?",
    content_html: "<h1>Zell-Performance & Mitochondriale Wahrheit</h1><p>Haben Sie schon einmal gehört: „Ihre Blutwerte sind völlig normal", obwohl Sie sich morgens fühlen, als hätte man Ihnen im Schlaf den Stecker gezogen? Dieser Widerspruch ist der Alltag vieler Patienten mit chronischer Erschöpfung oder Long-COVID-Symptomatik. Das Problem: Ein Blutbild misst, was im „Tank\" ist, aber nicht, wie effizient der „Motor\" (Ihre Mitochondrien) arbeitet.</p><p>In unserer Naturheilpraxis setzen wir dort an, wo die Schulmedizin oft blind ist. Mit der Intervall-Hypoxie-Hyperoxie-Therapie (IHHT) nutzen wir ein Diagnose- und Therapieverfahren, das Ihre inneren Kraftwerke nicht nur revitalisiert, sondern ihre Funktionsfähigkeit gnadenlos objektivierbar macht.</p><h2>Das Herzstück der Diagnostik</h2><p>Das IHHT-Gerät ist ein hochpräzises Diagnoseinstrument. Bevor wir behandeln, führen wir einen Hypoxie-Belastungstest durch:</p><ul><li><strong>VNS-Status</strong>: Wir messen live Ihre Herzratenvariabilität (HRV) unter Sauerstoffreiz.</li><li><strong>Sauerstoff-Kinetik</strong>: Wie schnell sinkt und steigt Ihre Sauerstoffsättigung?</li><li><strong>Der Hypoxie-Index</strong>: Dieser Wert quantifiziert Ihre „Zell-Fitness\".</li></ul><h2>IHHT – Der Lügendetektor</h2><p>Mitochondrien produzieren ATP. Durch Umweltgifte oder Dauerstress entstehen „Zombie-Mitochondrien\". Die IHHT wirkt wie ein natürliches Sieb:</p><ul><li>Selektive Zerstörung kranker Mitochondrien</li><li>Zell-Recycling</li><li>Biogenese: neue, leistungsstarke Mitochondrien</li></ul><h2>Die Feminatalis-Methode</h2><p>Während und nach der IHHT-Sitzung ist Ihre Zellmembran für ca. 20 Minuten maximal permeabel – das „Metabolische Fenster\". Wir nutzen dies für unsere Mito-Repair-Infusion:</p><ul><li>Liposomales Q10 & PQQ</li><li>Omega-3 (hochdosiert)</li><li>NatuGena Kofaktoren</li></ul><h2>Für wen?</h2><ul><li>Chronische Erschöpfung (CFS) & Burnout</li><li>Long-COVID, EBV</li><li>Brain Fog</li><li>Insulinresistenz</li><li>Anti-Aging</li></ul><h2>Sind Sie bereit für die Wahrheit?</h2><p>Vereinbaren Sie Ihren Termin für den großen Zell-Checkup.</p><blockquote><p><strong>Expertentipp:</strong> Achten Sie nach der Sitzung auf Ihren Urin. Das leuchtende Gelb zeigt, dass Ihr Body die B-Vitamine verarbeitet!</p></blockquote>",
    category: "Naturheilkunde",
    image_url: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2070&auto=format&fit=crop",
    is_published: true,
    date: "2026-05-07"
  };

  const { data, error } = await supabase
    .from('blog_posts')
    .insert(article)
    .select();

  if (error) {
    console.log('Error:', error.message);
  } else {
    console.log('Erfolg!', data);
  }
}

insertArticle();