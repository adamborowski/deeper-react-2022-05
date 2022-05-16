import { useState } from "react";
import { ThemeName } from "./utils/ThemeProvider";

export const useThemeSwitch = () => {
    const [theme, setLayout] = useState<ThemeName>(() =>
        localStorage.getItem('themeName') === 'dark' ? 'dark' : 'light'
    );

    const toggle = () => {
        const newLayout = theme === 'dark' ? 'light' : 'dark'
        setLayout(newLayout);
        localStorage.setItem('themeName', newLayout);
    };

    return {
        theme,
        toggle,
    };
}