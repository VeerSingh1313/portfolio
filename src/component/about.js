import React from 'react';
import biograpy from './image/about.mp4'
const MyComponent = () => {

    return (
        <>
            <div className='about_main'>
                <div className='about_left'>
                    <div><video src={biograpy} autoplay controls={false} />
                    </div>
                </div>
                <div className='about_right'>
                    <h1 className='about_right_h1'>MY BIOGRAPHY</h1>
                    <p>Start with a brief introduction about yourself. Include basic details such as your name, age, and where you're from. You can also mention your current occupation or any significant roles you hold.
                        Share some details about your childhood and upbringing. Discuss your family background, where you grew up, and any memorable experiences or influences from your early years.
                        Provide an overview of your career, including your current or past jobs, roles, and responsibilities. Highlight any notable accomplishments, challenges you've overcome, and skills you've developed along the way.
                    </p>
                </div>
            </div>
        </>
    );
};
export default MyComponent
