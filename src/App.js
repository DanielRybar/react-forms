import "./App.css";
import { Routes as Switch, Route } from 'react-router-dom';
import NavWithLayout from './components/NavWithLayout';
import NotFound from './components/NotFound';
import Home from './components/Home';
import HookForm from './components/HookForm';
import HookFormSimple from './components/HookFormSimple';
import Formik from './components/Formik';
import FormWithRef from './components/FormWithRef';
import ReduxForm from './components/ReduxForm';
import Result from './components/Result';

function App() {
  return (
    <Switch>
      <Route path="/" element={<NavWithLayout />}>
        <Route index element={<Home />} />
        <Route path="/hookform" element={<HookForm />} />
        <Route path="/hookformsimple" element={<HookFormSimple />} />
        <Route path="/formik" element={<Formik />} />
        <Route path="/useRef" element={<FormWithRef />} />
        <Route path="/reduxform" element={<ReduxForm />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Switch>
  );
}

export default App;
