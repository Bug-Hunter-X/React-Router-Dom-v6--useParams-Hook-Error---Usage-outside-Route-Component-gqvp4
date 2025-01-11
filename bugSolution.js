```javascript
import { useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return <div>My Component {id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent/>} />
    </Routes>
  );
}
export default App;
```