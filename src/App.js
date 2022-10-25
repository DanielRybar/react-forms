import "./App.css";
import { Routes as Switch, Route } from 'react-router-dom';
import NavWithLayout from './components/NavWithLayout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import HookForm from './components/HookForm';
import HookFormSimple from './components/HookFormSimple';
import Formik from './components/Formik';
import FormWithRef from './components/FormWithRef';
import SimpleValidator from './components/SimpleValidator';
import Result from './components/Result';

// https://blog.logrocket.com/react-form-validation-sollutions-ultimate-roundup/
function App() {
  return (
    <Switch>
      <Route path="/" element={<NavWithLayout />}>
        <Route index element={<Home />} />
        <Route path="/hookform"> 
          <Route index element={<HookForm />} />
          <Route path=":year/:month/:day" element={<HookForm />} />
        </Route>
        <Route path="/hookformsimple" element={<HookFormSimple />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/useRef" element={<FormWithRef />} />
        <Route path="/simplevalidator" element={<SimpleValidator />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}

export default App;
