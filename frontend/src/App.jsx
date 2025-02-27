import { Routes, Route } from 'react-router-dom';
import UserHome from '@/pages/tenant/UserHome';
import UserRentals from '@/pages/tenant/UserRentals';
import UserProfile from '@/pages/tenant/UserProfile';
import UnitDisplay from '@/pages/tenant/UnitDisplay';

function App() {

  return (
    <>
      <Routes>
        <Route path="/user/">
          <Route index path="home" element={<UserHome />}/>
          <Route path="rentals" element={<UserRentals />}/>
          <Route path="account" element={<UserProfile />}/>
          <Route path="unit/:id" element={<UnitDisplay />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
