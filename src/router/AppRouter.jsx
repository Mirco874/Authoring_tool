import { Navigate, Route, Routes } from "react-router-dom"
import { AuthoringToolRoutes } from "../AuthoringTool/routes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="editor" element={<AuthoringToolRoutes/>}/>
      <Route path="" element={<Navigate to="/editor"/>}/>
    </Routes>
  )
}
