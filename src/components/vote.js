import React , {Component} from 'react';
import Vote2 from './vote2';
class Vote extends Component{
state={
    // vote data
    data : [
        {id:0,name:"Php",value:0},
        {id:1,name:"Python",value:0},
        {id:2,name:"Go",value:0},
        {id:3,name:"Java",value:0}
    ]
};
    render(){
        
        return(
            // return data values
            <div>
              {this.state.data.map(vote => (
                 <Vote2 key={vote.id} value= {vote.value} name = {vote.name} />
                ))}  
            </div>
        )
    }
}
export default Vote;