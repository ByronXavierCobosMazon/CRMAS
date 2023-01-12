import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Callidus from './components/Callidus';
import Operador from './components/Operador';
import Auditor from './components/Auditor';
import Supervisor from './components/Supervisor';
import Asesor from './components/Asesor';
import Admin from './components/Admin';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';


const ROLES = {
  'User': 2001,
  'Callidus': 1984,
  'Operador': 1900,
  'Auditor': 1800,
  'Supervisor': 2000,
  'Asesor': 2900,
  'Admin': 5150

}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Callidus]} />}>
          <Route path="callidus" element={<Callidus />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Operador]} />}>
          <Route path="operador" element={<Operador />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Auditor]} />}>
          <Route path="auditor" element={<Auditor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Supervisor]} />}>
          <Route path="supervisor" element={<Supervisor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Asesor]} />}>
          <Route path="asesor" element={<Asesor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Callidus, ROLES.Operador, ROLES.Auditor, ROLES.Supervisor, ROLES.Asesor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;