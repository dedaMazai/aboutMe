type Mods = Record<string, boolean | string>

export function className(cls: string, mods: Mods, additional: string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => !!(value))
            .map(([className]) => className)
    ]
        .join(' ');
}