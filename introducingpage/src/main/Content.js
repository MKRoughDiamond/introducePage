import React, { Component } from 'react';
import Markdown from 'react-markdown';

var PROFILE = "# Frontend/Backend Programmer, UX Designer\n"+
              "## Profile\n"+
              "- Name : Wonseok Choi(최원석)\n"+
              "- Nickname : MK_RD, MKRoughDiamond(Github)\n"+
              "- Major : Computer Science and Engineering\n"+
              "- Education\n"+
              "  - Chungnam Science High School - Graduate\n"+
              "  - Seoul Nat'l University - Undergraduate";

var SKILLS = "## Skills\n"+
             "- C/C++/C#\n"+
             "- java\n"+
             "- python(django, Tensorflow(WIP))\n"+
             "- javascript(react)\n"+
             "- elm\n"+
             "- HTML/CSS";

var OTHEREXPERIENCES = "## Other Experiences\n"+
                       "- Small lectures in high schools\n"+
                       "  - Chungnam Science High School\n"+
                       "  - Nonsan High School\n"+
                       "- ACM-ICPC Daejeon Regional\n"+
                       "- Volunteers\n"+
                       "  - ALCoB Internet Volunteers in Viet Nam";


class Content extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper" id="profile">
          <div className="content-padding">
            <Markdown source={PROFILE} />
          </div>
        </div>
        <div className="content-wrapper" id="skills">
          <div className="content-padding">
            <Markdown source={SKILLS} />
          </div>
        </div>
        <div className="content-wrapper" id="other-experiences">
          <div className="content-padding">
            <Markdown source={OTHEREXPERIENCES} />
          </div>
        </div>
        <div className="content-wrapper" id="projects">
          <div className="content-padding">
            <div className="projects-title">
              <h2 className="projects"> Projects </h2>
            </div>
            <a href="https://github.com/dnsdhrj/graduate-adventure">
              <div className="project-padding">
                <div className="project-name">
                  Graduate Simulation
                </div>
                <div className="project-discription">
                  Simulate graduate, Frontend/UI
                </div>
              </div>
            </a>
            <a href="">
              <div className="project-padding">
                <div className="project-name">
                  BaseBook
                </div>
                <div className="project-discription">
                  Simple SNS, Frontend/Backend/UI
                </div>
              </div>
            </a>
            <a href="https://github.com/MKRoughDiamond/papillon">
              <div className="project-padding">
                <div className="project-name">
                  Papillion
                </div>
                <div className="project-discription">
                  Turn based survival game, Project Management, Programing, Design
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
