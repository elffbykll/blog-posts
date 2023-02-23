import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/ee.jpg';
import profile2 from './image/elif.jpg';
import profile3 from './image/mrb.jpg';


 const App = () => {
    return(
        <div className='ui comments'>
            <SingleComment name='Elif' date='Today at 5:00PM' text='Its amazing' picture={profile1}/>
            <SingleComment name='Ahmed' date='Today at 8:00PM' text='Its very good' picture={profile2}/>
            <SingleComment name='Deniz' date='Today at 2:00AM' text='Its fantastic' picture={profile3}/>
        </div>
    )
}
ReactDOM.render(
    <App />, document.querySelector('#root')
)