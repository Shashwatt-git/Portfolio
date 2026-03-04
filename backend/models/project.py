from sqlalchemy import JSON, Boolean, DateTime, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column

from database.db import Base


class Project(Base):
    __tablename__ = "projects"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(200))
    slug: Mapped[str] = mapped_column(String(200), unique=True)
    description: Mapped[str] = mapped_column(Text)
    long_description: Mapped[str] = mapped_column(Text)
    tech_stack: Mapped[list[str]] = mapped_column(JSON)
    github_link: Mapped[str] = mapped_column(String(300))
    demo_link: Mapped[str | None] = mapped_column(String(300), nullable=True)
    image_url: Mapped[str | None] = mapped_column(String(300), nullable=True)
    color_gradient: Mapped[str] = mapped_column(String(100))
    featured: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[str] = mapped_column(DateTime, server_default=func.now())
