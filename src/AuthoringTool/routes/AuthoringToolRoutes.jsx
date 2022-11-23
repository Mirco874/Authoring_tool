import {Routes,Route} from 'react-router-dom';
import { Navbar } from '../../UI/components';
import { EditorPage } from '../pages';
export const AuthoringToolRoutes = () => {
  return (
<>
        <Navbar/>
        <Routes>
            <Route path='' element={<EditorPage/>}/>
        </Routes>
</>
  )
}
