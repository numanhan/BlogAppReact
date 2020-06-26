import React  from 'react';


const Rainbow = (WrapComponent) => {

        const colors=['red', 'blue', 'orange', 'green', 'yellow'];
        const RandomColors= colors[Math.floor(Math.random()*8)];
        const ClassName = RandomColors+'-text';

        return (props) => (
            <div className={ClassName}>

            <WrapComponent {...props}/>
            </div>
        )
}


export default Rainbow;