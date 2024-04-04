import React from 'react'
import video1 from './image/eduction videos.mp4'
export const Education = () => {
    return (
        <div className='Education_main'>
            <div className='education_left'>
                <h1>Education</h1>
                <p>Influence and Impact: Reflect on the impact you've had on others and the world around you. Discuss how you've made a difference in your community, profession, or personal relationships.

                    Future Aspirations: Share your aspirations and goals for the future. Discuss where you see yourself in the coming years and what you hope to achieve personally and professionally.

                    Conclusion: Wrap up your self-biography with a reflective conclusion. Summarize the key themes and insights you've shared about yourself and express gratitude for the experiences that have shaped you.

                    Editing and Proofreading: Review your self-biography carefully for clarity, coherence, and accuracy. Make any necessary revisions or edits to ensure that your story is effectively communicated.</p>
                <h1> </h1>
                <h5>10th </h5>
                <p>Board of School Education Haryana, Bhiwani</p>
                <h5> 12th</h5>
                <p>Board of School Education Haryana, Bhiwani</p>
                <h5>One year Diploma </h5>
                <p><a href='https://www.hiitambala.com/'> HIIT Ambala city </a></p>
            </div>
            <div className='education_right'>
                <video src={video1} width="600" height="300" controls="controls" autoplay="true" />


            </div>
        </div>
    )
}

export default Education