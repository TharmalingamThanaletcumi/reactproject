/*Import libruary needed*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Test.css';

class Test extends Component { 
    constructor(){
        super();
        this.state={
            data:
            [
                {
                    "name":"toto",
                    "age":"25"
                },
                {
                    "name":"titi",
                    "age":"26"
                },
                {
                    "name":"yiyi",
                    "age":"18"
                },
                {
                    "name":"momo",
                    "age":"15"
                },
                {
                    "name":"tutu",
                    "age":"27"
                },
                {
                    "name":"yoyo",
                    "age":"18"
                },
                {
                    "name":"mimi",
                    "age":"17"
                },
                {
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
                    <ul>{this.state.data.map((item) => <Testlist data={item}/>) }</ul>
                    </ul> 
                    <TestConstructor nametest={this.state.nametest} />                               
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
        else if (age == 18){
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
                <input type="text" value={this.props.nametest}/>
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
        
    }
}

export default Test;