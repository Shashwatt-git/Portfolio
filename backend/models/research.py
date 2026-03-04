from sqlalchemy import JSON, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from database.db import Base


class Research(Base):
    __tablename__ = "research"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(300))
    abstract: Mapped[str] = mapped_column(Text)
    publication: Mapped[str] = mapped_column(String(200))
    pdf_link: Mapped[str] = mapped_column(String(300))
    code_link: Mapped[str] = mapped_column(String(300))
    authors: Mapped[list[str]] = mapped_column(JSON)
    year: Mapped[int] = mapped_column(Integer)
