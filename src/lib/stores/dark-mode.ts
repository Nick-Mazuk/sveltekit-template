import { writable, get } from 'svelte/store'

type Theme = 'system' | 'dark' | 'light'

const createDarkMode = () => {
    const { subscribe, set } = writable<Theme>('system')

    return {
        subscribe,
        set: (newTheme: Theme) => {
            localStorage.setItem('theme', newTheme)
            set(newTheme)
        },
    }
}

const darkMode = createDarkMode()

const setClass = (newTheme: Theme) => {
    const { classList } = document.body
    let isDark = newTheme === 'dark'
    if (newTheme === 'system') isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (isDark) classList.add('dark')
    else classList.remove('dark')
}

const handlePreferenceChange = () => {
    if (get(darkMode) === 'system') setClass('system')
}

const handleLocalStorageChange = () => {
    const theme = localStorage.getItem('theme') as Theme | null
    if (theme) darkMode.set(theme)
}

const setupDarkMode = () => {
    const userPreferences = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme') as Theme | null

    if (savedTheme) darkMode.set(savedTheme)
    else darkMode.set('system')

    darkMode.subscribe(setClass)
    userPreferences.addEventListener('change', handlePreferenceChange)
    window.addEventListener('storage', handleLocalStorageChange)
}

if (typeof window !== 'undefined') setupDarkMode()

export { darkMode }
