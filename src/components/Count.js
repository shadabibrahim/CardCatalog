import { Component } from "react";
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 10 };

    }
    updateCount = ()=>{
        // this.setState({count:this.state.count+1})
        this.setState(function(prev){
            console.log("Previous: ",prev)
            return({count : prev.count+1})

        })
    }
    render() {
        return (
            <>
            <button onClick={this.updateCount}>Update Count</button>
                <h1>Count: {this.state.count}</h1>
            </>
        )
    }
    componentDidMount(){
        console.log("Component mounted");
    }
    componentDidUpdate(){
        console.log("Component Updated");
    }
    componentWillUnmount(){
        console.log("Component is unmounted");
    }
}
export default Count;