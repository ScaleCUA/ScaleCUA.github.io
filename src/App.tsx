import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/common/Layout'
import Homepage from './pages/Homepage'
import Leaderboard from './pages/Leaderboard'
import Environment from './pages/Environment'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/environment" element={<Environment />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App