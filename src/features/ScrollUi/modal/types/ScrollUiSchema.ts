// <Адресс страницы, позиция скрола>
export type ScrollSchema = Record<string, number>

export interface ScrollUiSchema {
    scroll: ScrollSchema;
}
