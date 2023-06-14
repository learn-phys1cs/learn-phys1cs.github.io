import React from "react";
import './css/about.css'

const Info = ({imgSrc, name, caption}) => {
    return (
        <div className="nameTag">
            <img src={imgSrc} alt={"Image of" + name}/>
            <h4>{name}</h4>
            <p>{caption}</p>
        </div>
    )
}

const About = () => {
    return (
            <div>
                <h2 style={{ textAlign : 'center'}}>About Us</h2>
                <div id="AboutSection">
                    <div id="NameSpace">
                        <Info imgSrc={"https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"} caption={"asdf"} name={"a"}> </Info>
                        <Info imgSrc={"https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"} caption={"aaaa"} name={"b"}> </Info>
                        <Info imgSrc={"https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"} caption={"asdfawef"} name={"c"}> </Info>
                        <Info imgSrc={"https://t4.ftcdn.net/jpg/00/84/67/19/360_F_84671939_jxymoYZO8Oeacc3JRBDE8bSXBWj0ZfA9.jpg"} caption={"fewasefawaefa "} name={"d"}> </Info>
                    </div>
                </div>
                <div className='mission'>
                    <h2 style={{ textAlign: 'center'}}>Our Mission </h2>
                    <h5>
                        We are a group of high school students 
                        dedicated to bringing STEM topics that go neglected.
                        While Computer Science's interest grows, many students often
                        fail to understand the importance of other STEM subjects. With this program,
                        we aim to increase interest in physics by teaching them real world applications of the subject.
                        Interested? Click the Join button top right!! See you soon
                    </h5>
                </div>
            </div>
    )
}

export default About;