import React from 'react'
import './WeekFeed.css'
    
const FeedBox = () => {
    return(
        <div className = 'WeekBubble' />
    );
}
class WeekFeed extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ThisWeekEvent: 5
        };
    }
    render(){
        let WeekBox =[];
        for (let i=0; i<this.state.ThisWeekEvent;i++){
            WeekBox.push(<FeedBox key ={i} />)
        }
        return(
            <div>
                <div className = 'WeekText'>
                    This week
                </div>
                <div>
                    {WeekBox}
                </div>
            </div>
        );
    }
}

export default WeekFeed;