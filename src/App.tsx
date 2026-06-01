import { useEffect } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { trackPageView } from './analytics/ga';
import { Layout } from './components/Layout';
import { AboutPage } from './routes/AboutPage';
import { GlossaryPage } from './routes/GlossaryPage';
import { HomePage } from './routes/HomePage';
import { SessionPage } from './routes/SessionPage';
import { SessionsPage } from './routes/SessionsPage';

function RouteAnalytics() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return null;
}

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <RouteAnalytics />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/sessions/:sessionId" element={<SessionPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
