import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import MainLayout from '../layouts/MainLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreatePost from '../pages/CreatePost'
import PostsDashboard from '../pages/PostsDashboard'
import { useAuthValue } from '../context/AuthContext'
import SearchResults from '../pages/SearchResults'
import EditPost from '../pages/EditPost'
import ViewPost from '../pages/ViewPost'
import ErrorPage from '../pages/ErrorPage'
const AppRoutes = () => {
  const { user } = useAuthValue()
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* URLs públicas */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/search' element={<SearchResults />} />
          <Route path='/error' element={<ErrorPage />} />

          {/* URLs privadas */}
          <Route
            path='/login'
            element={!user ? <Login /> : <Navigate to='/' />}
          />
          <Route
            path='/register'
            element={!user ? <Register /> : <Navigate to='/' />}
          />
          <Route
            path='/posts/create'
            element={user ? <CreatePost /> : <Navigate to='/login' />}
          />
          <Route
            path='/dashboard/posts'
            element={user ? <PostsDashboard /> : <Navigate to='/login' />}
          />
          <Route
            path='/posts/edit/:postId'
            element={user ? <EditPost /> : <Navigate to='/login' />}
          />
          <Route
            path='/view/:postId'
            element={user ? <ViewPost /> : <Navigate to='/login' />}
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRoutes
