import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

//import Dashboard from './pages/Dashboard'
import ContactsSidebar from './layouts/ContactsSidebar'
import ErrorPage from './components/ui/error-page'

import Contact from './pages/Contact'
import Team from './pages/Team'
import Invoices from './pages/Invoices'
import JobRoutes from './pages/JobRoutes'
import Calendar from './pages/Calendar'

import { action as contactAction, editContactFavoriteAction } from './services/ContactService'
import { contactLoader } from './services/ContactService'
import { editContactAction } from './services/ContactService'
import { deleteContactAction } from './services/ContactService'
import { rootLoader as searchContactLoader } from './services/ContactService'
import Root from './layouts/Root'

import EditContact from './pages/EditContact'
import Index from './pages/Index'
import Dashboard from './pages/Dashboard'

function App() {



  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path="/"
          element={<Root />}
          errorElement={<ErrorPage />}
          loader={searchContactLoader}
          action={contactAction}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Dashboard />} />
            <Route path='/teams/' element={<Team />} />
            <Route path='/contacts/' element={<Contact />} />
            <Route path='/invoices/' element={<Invoices />} />
          </Route>
        </Route>

        <Route path='/JobRoutes/' element={<JobRoutes />}>

        </Route>
        <Route path='/calendar/' element={<Calendar />}>

        </Route>
        {/* <Route
          path="/contacts/"
          element={<ContactsSidebar />}
          loader={searchContactLoader}
          action={contactAction}>
          <Route errorElement={<ErrorPage />}>
            <Route index element={<Index />} />
            <Route
              path=":contactId"
              element={<Contact />}
              loader={contactLoader}
              action={editContactFavoriteAction} />
            <Route
              path=":contactId/edit"
              element={<EditContact />}
              loader={contactLoader}
              action={editContactAction} />
            <Route
              path=":contactId/destroy"
              action={deleteContactAction} />
          </Route>
        </Route> */}
      </>
    ))



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
