import { Routes, Route, Navigate } from 'react-router-dom';
import { Contact } from '../pages';

const Router = () => {
  return (
    <Routes>
        <Route path="" element={ <Contact />} />

        {/* <Route path="*" element={ <div>Not Found</div> } /> */}
        <Route path="*" element={ <Navigate replace to="" /> } />
    </Routes>
  )
}

export default Router