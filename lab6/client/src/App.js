import React from 'react';
import NameSearch from './components/NameSearch';
import IdSearch from './components/IdSearch';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Find Any Pokemon!</h1>
                <IdSearch />
                <NameSearch />
                <br />
                <hr />
                <h2>Reporting</h2>
                <div id="reportingArea"></div>
            </div>
        );
    }
}

export default App;
