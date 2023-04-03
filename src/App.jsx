import './styles/reset.css';
import './styles/App.css';
import Button from './components/ui/button/Button';

function App() {
  //
  function testBtn() {
    console.count('paspaudei mygtuka');
  }

  return (
    <div className="container">
      <h1>Users</h1>
      <Button className="mb20">Click me</Button>
    </div>
  );
}
export default App;
