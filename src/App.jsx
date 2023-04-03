import './styles/reset.css';
import './styles/App.css';
import Grid from './components/ui/grid/Grid';

function App() {
  return (
    <div className="container">
      <Grid cols={'2'}>
        <h1>New project</h1>
      </Grid>
    </div>
  );
}
export default App;
