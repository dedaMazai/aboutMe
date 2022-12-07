import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getScrollUi = (state: StateSchema) => state?.scrollUi?.scroll;

export const getScrollUIByPath = createSelector( // возвращаем конкретный участок скрола по пути
    getScrollUi,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0, // обращаемся к скролу и возвращаем значение
);
