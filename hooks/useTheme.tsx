import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"


export interface ColorScheme {
    bg: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
    primary: string;
    success: string;
    warning: string;
    danger: string;
    shadow: string;
    gradients: {
        background: [string, string];
        surface: [string, string];
        primary: [string, string];
        success: [string, string];
        warning: [string, string];
        danger: [string, string];
        muted: [string, string];
        empty: [string, string];
    };
    backgrounds: {
        input: string;
        editInput: string;
    };
    statusBarStyle: "dark-content" | "light-content";   
}

const lightColors: ColorScheme = {
  bg: "#f8fafc",
  surface: "#ffffff",
  text: "#1e293b",
  textMuted: "#64748b",
  border: "#e2e8f0",
  primary: "#3b82f6",
  success: "#10b981",
  warning: "#f59e0b",
  danger: "#ef4444",
  shadow: "#000000",
  gradients: {
    background: ["#f8fafc", "#e2e8f0"],
    surface: ["#ffffff", "#f8fafc"],
    primary: ["#3b82f6", "#1d4ed8"],
    success: ["#10b981", "#059669"],
    warning: ["#f59e0b", "#d97706"],
    danger: ["#ef4444", "#dc2626"],
    muted: ["#9ca3af", "#6b7280"],
    empty: ["#f3f4f6", "#e5e7eb"],
  },
  backgrounds: {
    input: "#ffffff",
    editInput: "#ffffff",
  },
  statusBarStyle: "dark-content" as const,
};

const darkColors: ColorScheme = {
  bg: "#0f172a",
  surface: "#1e293b",
  text: "#f1f5f9",
  textMuted: "#94a3b8",
  border: "#334155",
  primary: "#60a5fa",
  success: "#34d399",
  warning: "#fbbf24",
  danger: "#f87171",
  shadow: "#000000",
  gradients: {
    background: ["#0f172a", "#1e293b"],
    surface: ["#1e293b", "#334155"],
    primary: ["#3b82f6", "#1d4ed8"],
    success: ["#10b981", "#059669"],
    warning: ["#f59e0b", "#d97706"],
    danger: ["#ef4444", "#dc2626"],
    muted: ["#374151", "#4b5563"],
    empty: ["#374151", "#4b5563"],
  },
  backgrounds: {
    input: "#1e293b",
    editInput: "#0f172a",
  },
  statusBarStyle: "light-content" as const,
};



interface themeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    color: ColorScheme;
}

// const ThemeContext = createContext<themeContextType>(defaultValue);
const ThemeContext = createContext<themeContextType | undefined>(undefined);

// this function is just an wrapper above themeContext.Provider to allocate variable/values, this is done to avoid writing all this directly in index.tsx
export const ThemeProvider = ({children} : {children : ReactNode}) => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(()=>{
        AsyncStorage.getItem("darkmode").then((value) => {
            if(value){
                setDarkMode(JSON.parse(value))
            };
        });
    },[]);

    const toggleDarkMode = async () => {
        const theme = !isDarkMode;
        setDarkMode(theme);
        await AsyncStorage.setItem("darkmode", JSON.stringify(theme));
    }

    const color = isDarkMode ? darkColors: lightColors;
    return (
        <ThemeContext.Provider value={{isDarkMode, toggleDarkMode, color}}>
            {children}
        </ThemeContext.Provider>
    );
};
// to access data we are going to build a function useTheme using useContext
export const useTheme = ()=> {
    const theme = useContext(ThemeContext);
    // good practice to add error handling here
    if(theme === undefined){
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return theme;
}
