import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { FaBootstrap } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Skill = () => {
    return (
        <div className="skillmain">
            <div className="skill-left">
                <h1>Technical Skills</h1>
                <div>
                    <div>
                        <IoLogoJavascript />
                        <p>JavaScript</p>
                        <div class="progress-container">
                            <div class="progress-bar1" id="myProgressBar"></div>
                        </div>

                    </div>
                    <div>
                        <GrReactjs />
                        <p>ReactJS</p>
                        <div class="progress-container">
                            <div class="progress-bar2" id="myProgressBar"></div>
                        </div>
                    </div>
                    <div>
                        <FaBootstrap />
                        <p>Bootstrap</p>
                        <div class="progress-container">
                            <div class="progress-bar3" id="myProgressBar"></div>
                        </div>
                    </div>
                    <div>
                        <FaHtml5 />
                        <p>HTML</p>
                        <div class="progress-container">
                            <div class="progress-bar4" id="myProgressBar"></div>
                        </div>
                    </div>
                    <div>
                        <FaGithub />
                        <p>GitHub</p>
                        <div class="progress-container">
                            <div class="progress-bar5" id="myProgressBar"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skill-right">
                <h1>Professional Skills</h1>
            </div>
        </div>
    );
};

export default Skill;
