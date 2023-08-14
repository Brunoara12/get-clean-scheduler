import { Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

//import Dashboard from './pages/Dashboard'
import Root from './layouts/Root'
import ContactsSidebar from './layouts/ContactsSidebar'
import ErrorPage from './components/ui/error-page'
import Contact from './pages/Contact'

import { action as contactAction, editContactFavoriteAction } from './services/ContactService'
import { contactLoader } from './services/ContactService'
import { editContactAction } from './services/ContactService'
import { deleteContactAction } from './services/ContactService'
import { rootLoader as searchContactLoader } from './services/ContactService'

import EditContact from './pages/EditContact'
import Index from './pages/Index'
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
            <Route index element={<Index />} />
            <Route
              path="contacts/:contactId"
              element={<Contact />}
              loader={contactLoader}
              action={editContactFavoriteAction} />
            <Route
              path="contacts/:contactId/edit"
              element={<EditContact />}
              loader={contactLoader}
              action={editContactAction} />
            <Route
              path="contacts/:contactId/destroy"
              action={deleteContactAction} />
          </Route>
        </Route>
        <Route
          path="/contacts/"
          element={<ContactsSidebar />}
          loader={searchContactLoader}
          action={contactAction}>

        </Route>
      </>
    ))



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
