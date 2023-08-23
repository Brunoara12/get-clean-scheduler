import { useEffect } from 'react'
import RootSidebar from './RootSidebar'
import Topbar from './Topbar'
import { Outlet, useNavigation } from 'react-router-dom'

const Root = () => {

    const navigation = useNavigation();

    const toggleTheme = () => {
        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        // toggle icons inside button
        if (themeToggleDarkIcon && themeToggleLightIcon) {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            console.log("current theme: " + localStorage.getItem('theme'))

            // if set via local storage previously
            if (localStorage.getItem('theme')) {
                if (localStorage.getItem('theme') === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                }
            }
        }
    }

    useEffect(() => {
        console.log("Comp did mount")


        var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

        if (themeToggleDarkIcon && themeToggleLightIcon) {
            // Change the icons inside the button based on previous settings
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                themeToggleLightIcon.classList.remove('hidden');
            } else {
                themeToggleDarkIcon.classList.remove('hidden');
            }
        }


        var themeToggleBtn = document.getElementById('theme-toggle');

        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', toggleTheme);
            console.log("Added EventListener")

            return () => {
                console.log("Removed EventListener")
                themeToggleBtn.removeEventListener('click', toggleTheme);

            }
        }
    }, [])


    return (
        <div className='flex flex-col w-full bg-defBg dark:bg-dkPrimary-500'>
            <Topbar />
            <div className='flex flex-1'>
                <RootSidebar />
                <div id="detail"
                    className={

                        "flex flex-1" +
                        (navigation.state === "loading" ? "loading " : "")
                    }>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Root