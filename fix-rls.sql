-- Simple fix: grant anon role full access
GRANT ALL ON blog_posts TO anon;
GRANT ALL ON blog_posts TO authenticated;
GRANT ALL ON blog_posts TO service_role;

-- Or create a simple permissive policy
DROP POLICY IF EXISTS "allow_all_insert" ON blog_posts;
CREATE POLICY "allow_all_insert" ON blog_posts FOR ALL TO USING (true) WITH CHECK (true);