import { useEffect } from 'react'
import RootSidebar from './RootSidebar'
import Topbar from './Topbar'
import { Outlet, useNavigation } from 'react-router-dom'
import { ColorThemeContext, useTheme } from '../theme'

import { ThemeProvider } from '@mui/material'

const Root = () => {

    const navigation = useNavigation();
    const [theme, colorTheme] = useTheme();

    const toggleTheme = () => {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // toggle icons inside button
        if (themeToggleDarkIcon && themeToggleLightIcon) {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            colorTheme.toggleColorTheme()
        }
    }

    useEffect(() => {
        console.log("Comp did mount")


        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if (themeToggleDarkIcon && themeToggleLightIcon) {
            // Change the icons inside the button based on previous settings
            if (theme.palette.mode === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
            }
        }

        var themeToggleBtn = document.getElementById('theme-toggle');

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', toggleTheme);
            //console.log("Added EventListener")
            return () => {
                //console.log("Removed EventListener")
                themeToggleBtn.removeEventListener('click', toggleTheme);
            }
        }


    }, [theme.palette.mode])




    return (
        <ColorThemeContext.Provider value={colorTheme}>
            <ThemeProvider theme={theme}>
                <div className={(theme.palette.mode === 'dark' ? 'theme-dark ' : 'theme-light ') + 'flex flex-col flex-1 bg-skin-bg min-w-0'}>
                    <Topbar />
                    <div className='flex flex-1 min-w-0'>
                        <RootSidebar />
                        <div id="detail"
                            className={
                                "flex flex-1 m-auto w-auto min-w-0" +
                                (navigation.state === "loading" ? "loading " : "")
                            }>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </ColorThemeContext.Provider>
    )
}

export default Root