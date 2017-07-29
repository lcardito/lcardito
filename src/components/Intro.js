import React from "react";
import {Container, Header} from "semantic-ui-react";

const Intro = () => (
    <div>
        <Header as='h3'>Who am I</Header>
        <Container text textAlign='justified'>
            Pro-active, motivated, curious and passionate developer, always ready to grab new
            exciting opportunities.
            I love working in Agile environments, I strongly believe in TDD and Pair Programming
            benefits, I'm a great team worker and
            I like mentoring and listening to more experienced developers so that the team value
            will increase quickly.
        </Container>
        <Header as='h3'>What do I do</Header>
        <Container text textAlign='justified'>
            <p>I fully embrace the DevOps culture, leading to the benefits of the Continuous
                Delivery practises without compromising the quality of my work.
                I respect and chase early feedback from users and stakeholders, reacting and
                changing the requirements as soon as possible to deliver a better product every
                time.</p>
            <p>I also like to understand the road map and the features' priorities. I want to be
                involved in the life-cycle of the product, not only the application,
                in order to provide the best experience to our customers.</p>
            <p>My main interests and expertise are: Engineering and Agile methodologies (TDD,
                Scrum/Kanban, Pair Programming), REST APIs, Micro-services,
                Java EE, Java Play! Framework, Spring, Dropwizard, JavaScript (NodeJS, React, Redux).</p>
        </Container>
    </div>
);

export default Intro;