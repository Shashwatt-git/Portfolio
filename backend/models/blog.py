from sqlalchemy import JSON, DateTime, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from database.db import Base


class BlogPost(Base):
    __tablename__ = "blog_posts"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(200))
    slug: Mapped[str] = mapped_column(String(200), unique=True)
    content: Mapped[str] = mapped_column(Text)
    tags: Mapped[list[str]] = mapped_column(JSON)
    reading_time: Mapped[int] = mapped_column(Integer)
    published_at: Mapped[str] = mapped_column(DateTime, server_default=func.now())
