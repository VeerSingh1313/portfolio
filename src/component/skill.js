import { IoLogoJavascript } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { FaBootstrap } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Skill = () => {
    return (
        <div className="skillmain">
            <div className="skill_left">
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
            <div className="skill_right">
                <h1>Professional Skills</h1>
                <div>
                    <p>Communication skills</p>
                    {/* <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ value: '10' }}></div> */}
                    <div class="meter"><span style={{ width: '70%' }}></span></div>

                </div>
                <div>
                    <p>Teamwork</p>
                    {/* <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ value: '10' }}></div> */}
                    <div class="meter"><span style={{ width: '90%' }}></span></div>
                </div>
                <div>
                    <p>Time management</p>
                    {/* <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ value: '10' }}></div> */}
                    <div class="meter"><span style={{ width: '100%' }}></span></div>
                </div>
                <div>
                    <p>Problem solving</p>
                    {/* <div role="progressbar" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100" style={{ value: '10' }}></div> */}
                    <div class="meter"><span style={{ width: '82%' }}></span></div>

                </div>
            </div>
        </div>

    );
}; export default Skill;

