-- ============================================================
-- Pico Helpdesk – Schema Supabase
-- Eseguire in: Supabase Dashboard → SQL Editor
-- ============================================================

-- Tickets
CREATE TABLE IF NOT EXISTS tickets (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  clerk_user_id   text NOT NULL,
  title           text NOT NULL,
  description     text NOT NULL,
  priority        text NOT NULL DEFAULT 'normal' CHECK (priority IN ('low','normal','high','urgent')),
  status          text NOT NULL DEFAULT 'open' CHECK (status IN ('open','in_progress','resolved','closed')),
  assigned_to     text,
  resolution_note text,
  created_at      timestamptz NOT NULL DEFAULT now(),
  updated_at      timestamptz NOT NULL DEFAULT now()
);

-- Aggiorna updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tickets_updated_at
  BEFORE UPDATE ON tickets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Knowledge base
CREATE TABLE IF NOT EXISTS kb_articles (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title       text NOT NULL,
  slug        text UNIQUE NOT NULL,
  content     text NOT NULL,
  category    text NOT NULL,
  roles       text[] NOT NULL DEFAULT '{client,partner,admin}',
  published   boolean NOT NULL DEFAULT false,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER kb_updated_at
  BEFORE UPDATE ON kb_articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Documenti scaricabili
CREATE TABLE IF NOT EXISTS documents (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title         text NOT NULL,
  description   text,
  file_path     text NOT NULL,   -- path in Supabase Storage bucket 'documents'
  file_size     bigint,
  file_type     text,
  roles         text[] NOT NULL DEFAULT '{partner,admin}',
  category      text,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- RLS (Row Level Security)
ALTER TABLE tickets     ENABLE ROW LEVEL SECURITY;
ALTER TABLE kb_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents   ENABLE ROW LEVEL SECURITY;

-- Policy tickets: ogni utente vede solo i propri
CREATE POLICY "tickets_own" ON tickets
  FOR ALL USING (clerk_user_id = current_setting('app.user_id', true));

-- Policy kb: articoli pubblici per ruolo (gestita lato app con service_role)
CREATE POLICY "kb_published" ON kb_articles
  FOR SELECT USING (published = true);

-- Policy documents: gestita lato app con service_role key

-- Indici utili
CREATE INDEX IF NOT EXISTS idx_tickets_user    ON tickets (clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_tickets_status  ON tickets (status);
CREATE INDEX IF NOT EXISTS idx_kb_slug         ON kb_articles (slug);
CREATE INDEX IF NOT EXISTS idx_docs_roles      ON documents USING GIN (roles);

-- Storage bucket (eseguire via API o dashboard Supabase):
-- INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', false);
