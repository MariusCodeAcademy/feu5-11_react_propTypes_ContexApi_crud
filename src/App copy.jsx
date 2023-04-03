import './styles/reset.css';
import './styles/App.css';
import Grid from './components/ui/grid/Grid';
import Card from './components/ui/card/Card';

function App() {
  return (
    <div className="container">
      <Grid cols={1}>
        <h1>New project</h1>
        <p>HEllo</p>
        {/* James Bond */}
      </Grid>
      <Card className={'tac'}>
        <h2>New project</h2>
        <p>HEllo</p>
      </Card>
    </div>
  );
}
export default App;
