import React from 'react'; // nạp thư viện react 
import ReactDOM from 'react-dom'; // nạp thư viện react-dom


// tạo component App
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
                <h3>
                    Hello Hello
                </h3>
                <h5>fadfadafafafa</h5>
            </div>
        );
    }
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))