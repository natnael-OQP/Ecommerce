import React from 'react';
// import Homepage from './pages/homepage.component.jsx';
import {Route,Link} from 'react-router-dom';


const homePage = (props)=>(
  <div>
    <Link to='/about' >about</Link>
    <button onClick={ ()=>{
      props.history.push('/about/detail')
    }}>detail</button>
    {console.log(props)}
    <h1 > Home Pages </h1>
  </div>
)

const about = (props)=>(
  <div>
    {console.log(props)}
    <h1>About Pages </h1>
  </div>
)

const Detail = (props)=>(
  <div>
    {console.log(props)}
    
    <Link  to={`${props.match.url}/90`}>detail 90</Link>

    <h1>Detail Pages : {props.match.params.detailId}</h1>
  </div>
)

function App() {
  return (
      <div>
        <Route exact  path="/" component={homePage} />
        <Route exact path="/about" component={about} />
        <Route exact path="/about/detail" component={Detail} />
        <Route  path="/about/detail/:detailId" component={Detail} />
      </div>
  );
}

export default App;