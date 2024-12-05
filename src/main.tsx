import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from "@/lib/router.tsx";
import {Provider} from 'react-redux';
import store from './lib/store';
import {ThemeProvider} from "@/useFreecerTheme.tsx";
import {SidebarProvider} from "@/components/ui/sidebar.tsx";
import {Toaster} from "sonner";
import { UserContextProvider } from '@/contexts/UserContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <SidebarProvider>
                    <UserContextProvider>
                        <RouterProvider router={router}/>
                        <Toaster closeButton/>
                    </UserContextProvider>
                </SidebarProvider>
            </ThemeProvider>
        </Provider>
    </StrictMode>
)
