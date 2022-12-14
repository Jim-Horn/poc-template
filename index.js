import { createRoot } from 'react-dom/client';
import Start from './components/Start';

const container = document.getElementById('base-target');
const root = createRoot(container);
root.render(<Start />);
