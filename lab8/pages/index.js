import NameSearch from '../components/NameSearch';
import IdSearch from '../components/IdSearch';

const Pokemon = () => {
    return(
	<center>
      <div>
        <h1>Find Any Pokemon!</h1> //header
        <IdSearch /> //Pulls IdSearch
        <NameSearch />//Pulls NameSearch
        <br /> //break
        <hr />
        <h2>Reporting</h2> //header
        <div id="reportingArea"></div>
      </div>
	  </center>
    ); 
}

export default Pokemon;