CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  slug VARCHAR(200) UNIQUE,
  description TEXT,
  long_description TEXT,
  tech_stack JSONB,
  github_link VARCHAR(300),
  demo_link VARCHAR(300),
  image_url VARCHAR(300),
  color_gradient VARCHAR(100),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200),
  slug VARCHAR(200) UNIQUE,
  content TEXT,
  tags JSONB,
  reading_time INTEGER,
  published_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE research (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  abstract TEXT,
  publication VARCHAR(200),
  pdf_link VARCHAR(300),
  code_link VARCHAR(300),
  authors JSONB,
  year INTEGER
);
