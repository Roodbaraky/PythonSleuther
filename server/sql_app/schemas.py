#for Pydantic models (opposed to SQLAlchemy models)
#Pydantic typing uses ":" like Ts, while SQLAlchemy uses "="
from typing import Union

from pydantic import BaseModel


class ItemBase(BaseModel):
    title: str
    description: Union[str, None] = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        from_attributes = True
#True --> read data even in it's not a dict
#essentially it can access dictionaries and objects
#via data['key'] and data.key

#because SQLA is lazy loaded by default, from_attributes is needed for queries to return relationship data
#happens when a linked attribute is requested from related table
class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: list[Item] = []

    class Config:
        from_attributes = True