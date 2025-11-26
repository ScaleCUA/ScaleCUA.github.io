import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import Homepage from './pages/Homepage';
import LeaderboardHome from './pages/LeaderboardHome';

import Environments from './pages/Environments';
import EnvironmentWrapper from './pages/EnvironmentWrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <Layout>
              <LeaderboardHome />
            </Layout>
          }
        />

        <Route
          path="/environments"
          element={
            <Layout>
              <Environments />
            </Layout>
          }
        />
        <Route path="/launcher/:envId" element={<EnvironmentWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;
