import React from "react";

//steps for working with context:
//1. Create the context with React.createContext (line 23)
//2. Use the Provider (from the context created in step 1, line 33) to send a 'value' prop to children
//3. In one or more of the children, use the useContext hook to get the data from 2
//4. Import and export as needed

//theme options with specific colour values
export const themes = {
    light: {
        foreground: "#333333",
        background: "#BAE2FF"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

//named export for this context (to be used via useContext elsewhere)
//renamed to distinguish it from the MUI ThemeProvider
const MyThemeContext = React.createContext({theme: themes.light});

//the provider wrapper for this context. uses its own state to keep track of which theme is in use
//use it in a top level component such as App.jsx like <ThemeProvider>...</ThemeProvider>
//all child components (in the ... above) will receive the data values from line 31
function MyThemeProvider (props) {
    const [theme, setTheme] = React.useState(themes.light);
    const darkMode = theme.background === themes.dark.background

    return (
        <MyThemeContext.Provider value={{theme, setTheme, darkMode}}>
            {props.children}
        </MyThemeContext.Provider>
    );
}

//how could we add a button/checkbox to switch themes?

export {MyThemeContext as ThemeContext, MyThemeProvider}