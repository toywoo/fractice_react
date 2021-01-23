import React from "react"

function Detail(){
    class Detail extends React.Component{
        componentDidMount(){
            const {location, history} = this.props;
            if(location.state == undefined){
                history.push("/");
            }
        }

        render(){
            return
        }
    }
}

export default Detail