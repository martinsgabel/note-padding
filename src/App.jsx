import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="https://martinsgabel.github.io/note-padding/" element={<Home />} />
    </Routes>
  );
}