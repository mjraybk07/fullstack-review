import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.search = this.search.bind(this);
  }
  
  componentDidMount () {
    console.log('...componentDidMount...'); 
    // TODO initial rendering of list ??
    $.ajax({
      url: '/repos',
      type: 'GET',
      data: {},
      
      success: (data) => {
        this.setState({repos: data});
        console.log('GET request submitted [success]')
      },
      
      error: () => {
        console.log('GET request submitted [error]');
      }
    })

    
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      url: '/repos',
      type: 'POST',
      data: { username: term},
      
      success: (data) => {
        console.log('POST request submitted [success]: ', data)
      },
      
      error: (data) => {
        console.log('POST request submitted [error]: ', data);
      }
    })
    
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));