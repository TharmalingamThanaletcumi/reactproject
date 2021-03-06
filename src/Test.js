/*Import libruary needed*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'
import './Test.css';

class Test extends Component { 
    constructor(){
        super();
        this.state={
            data:
            [
                {
                    "id":"1",
                    "name":"toto",
                    "age":"25"
                },
                {
                    "id":"2",
                    "name":"titi",
                    "age":"26"
                },
                {
                    "id":"3",
                    "name":"yiyi",
                    "age":"18"
                },
                {
                    "id":"4",
                    "name":"momo",
                    "age":"15"
                },
                {
                    "id":"5",
                    "name":"tutu",
                    "age":"27"
                },
                {
                    "id":"6",
                    "name":"yoyo",
                    "age":"18"
                },
                {
                    "id":"7",
                    "name":"mimi",
                    "age":"17"
                },
                {
                    "id":"8",
                    "name":"tata",
                    "age":"28"
                }
            ],
            nametest : 'www.testConstructor.com'       
        };
        
    }      
    render(){  
        return(
                <div className="detailperso">
                    <Testname/>
                    <ul>
                    <ul>{this.state.data.map((item) => <Testlist key={item.id} data={item}/>) }</ul>
                    </ul> 
                    <TestConstructor nametest={this.state.nametest} />
                    <TestUpdate/>  
                    <TestLifeCycle/>                                              
                </div>
            )
               
    }
}
/** Test affichage text **/
class Testname extends React.Component{
    render()
    {
        return (
            <div>
                <h1>Detail of Test name</h1>
                <p>{this.props.propString}</p>
                <p>{this.props.propString ? "true":"False"}</p>
            </div>
        );
    }
}
/** Test Properties default **/
Testname.propTypes = {
    propString: PropTypes.string,
}
Testname.defaultProps ={
    propString:"Test PropTypes Toto",
}
/**Test Afficage de List **/
class Testlist extends React.Component{
    render(){
        let age = this.props.data.age;
        let statue ;
        let cssAge;
        if (age > 18){
            statue = "Majeur";
            cssAge = "ageMajeur"
        }
        else if (age === "18"){
            statue = "Viens d'être majeur";
            cssAge = "ageVMajeur"
        }
        else {
            statue = "Mineur";
            cssAge = "ageMineur"
        }
        return(
            <ul className={cssAge}>
                <li>Name : {this.props.data.name} <i>({statue})</i> => Age : {this.props.data.age} ans</li>               
            </ul>
        );
    }
}
/** Test Validation des properties **/
class TestConstructor extends React.Component{
    handleEvent = () =>{
        console.log('test clique', this.props)
    }
    render(){
        return(
            <div>
                <input type="text" defaultValue={this.props.nametest}/>
                <button onClick={this.handleEvent}> Cliquer ici</button>
            </div>
        );        
    }
}
/** Test force update element de component **/
class TestUpdate extends React.Component{
    constructor(){
        super();
        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
        this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
    }
    findDomNodeHandler1(){
        var myDiv = document.getElementById('myDivOne');
        ReactDOM.findDOMNode(myDiv).style.color ='red';
    }
    findDomNodeHandler2(){
        var myDiv = document.getElementById('myDivTwo');
        ReactDOM.findDOMNode(myDiv).style.color='blue';
    }
    render(){
        return(
            <div className="buttonTest">
                <button onClick={this.findDomNodeHandler1}>Find Dom Node 1</button>
                <button onClick={this.findDomNodeHandler2}>Find Dom Node 2</button>
                <h3 id="myDivOne">Node 1</h3>
                <h3 id="myDivTwo">Node 2</h3>
            </div>
        )
    }
}
/** Testing life cycle of component **/
class TestLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state = {hello:"JavaTpoint"};
        this.changeState = this.changeState.bind(this)
    }
    render(){
        return(
            <div>
                <h1>React life cycle test</h1>
                <h3>Hello {this.state.hello}</h3>
                <button onClick={this.changeState}>Cliquer ici</button>
            </div>
        )
    }
    changeState(){
        this.setState({hello:"All great tuto"});
    }
    /** Adding Mounting Phase **/
    UNSAFE_componentWillMount(){
        console.log('Component will mount')
        setTimeout(()=> {this.setState({hello: "test Component will mount"})},1000)
    }
    componentDidMount(){
        console.log('Component did mount')
        setTimeout(()=> {this.setState({hello: "test Component did mount"})},2000)
    }
    UNSAFE_componentWillReceiveProps(){
        console.log('Component will receive props')
    }
    /** Updating phase **/
    shouldComponentUpdate(newProps, newState){
        console.log('should component update'); 
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log('Component will Update')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component did update')
    }    
    /** Deleting unmounting phase **/
    componentWillUnmount(){
        console.log('Component will Unmount')
    }
}

export default Test;