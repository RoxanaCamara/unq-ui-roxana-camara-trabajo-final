import { Contenedor } from './components/nav/Contenedor';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';

const App = () => {
  
  return (
    <>
      <Typography variant="h4" noWrap>
          Generala <FontAwesomeIcon icon={faDice} size="lg" />
      </Typography>
    </>
  );
}

export default App;
