import { writable } from 'svelte/store'

const toggleState = (isDark: boolean) => {
    const body = document.querySelector('body')
    if (!body) return
    const { classList } = body
    if (isDark) {
        classList.add('dark')
        return
    }
    classList.remove('dark')
}

const createDarkMode = () => {
    const { subscribe, set, update } = writable(false)

    return {
        subscribe,
        toggle: () => update((isDark) => !isDark),
        toggleAndSave: () =>
            update((isDark) => {
                localStorage.setItem('theme', isDark ? 'light' : 'dark')
                return !isDark
            }),
        set,
    }
}

const darkMode = createDarkMode()

const handlePreferenceChange = (event: MediaQueryListEvent) => {
    const hasDefinedTheme = localStorage.getItem('theme')
    if (hasDefinedTheme) return
    darkMode.set(event.matches)
}

const setupDarkMode = () => {
    const userPreferences = window.matchMedia('(prefers-color-scheme: dark)')
    const setTheme = localStorage.getItem('theme')

    if (setTheme) darkMode.set(setTheme === 'dark')
    else darkMode.set(userPreferences.matches)

    darkMode.subscribe(toggleState)
    userPreferences.addEventListener('change', handlePreferenceChange)
}

if (typeof window !== 'undefined') setupDarkMode()

export { darkMode }
