import "./App.css";
import { Routes as Switch, Route } from 'react-router-dom';
import NavWithLayout from './components/NavWithLayout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import HookForm from './components/HookForm';
import HookFormSimple from './components/HookFormSimple';
import Formik from './components/Formik';
import UseRefForm from './components/UseRefForm'
import UseStateForm from './components/UseStateForm'
import Result from './components/Result';

// https://blog.logrocket.com/react-form-validation-sollutions-ultimate-roundup/
function App() {
  return (
    <Switch>
      <Route path="/" element={<NavWithLayout />}>
        <Route index element={<Home />} />
        <Route path="/hookform"> 
          <Route index element={<HookForm />} />
          <Route path=":firstname" element={<HookForm />} />
        </Route>
        <Route path="/hookformsimple" element={<HookFormSimple />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/useRef" element={<UseRefForm />} />
        <Route path="/useState" element={<UseStateForm />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}

export default App;
