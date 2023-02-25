import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Home } from '../pages';

const Router = () => {
  return (
    <Routes>
        <Route path="" element={ <Home />} />
        <Route path="about" element={ <About />} />

        {/* <Route path="*" element={ <div>Not Found</div> } /> */}
        <Route path="*" element={ <Navigate replace to="" /> } />
    </Routes>
  )
}

export default Router