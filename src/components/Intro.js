import React from "react";
import {Container, Header} from "semantic-ui-react";

const Intro = () => (
    <div className='intro'>
        <Header as='h3'>Who am I</Header>
        <Container text fluid>
            <p>I am an Agile Software Developer, currently building Java solution pushing for a DevOps culture.</p>
        </Container>
        <Header as='h3'>What do I do</Header>
        <Container text fluid>
            <p>I am an ambitious, curious and engaged software developer. I've started my professional career back in 2011/2012 contributing to
                web projects based on Java / Javascript technologies.</p>

            <p>I do believe in the "T-shaped developer" / DevOps by which I mean that developers teams must be autonomous in setting up,
                deploying and supporting their applications (Continuous Integration and Continuous Delivery are a given) with the help and
                the guidance of experts in infrastructures, networking and host managements where possible and preferably in the cloud.</p>

            <p>My tech environment of choice would still be a backend, Java 8 micro-services (Spring boot, Dropwizard, Ratpack).
                I've successfully delivered decently sized front-end applications using React and before it, AngularJS as well.
                All the applications / services I've built follow the CI/CD patterns and best practises mostly wrapped in docker containers.
                I enjoy a good build and deployment pipeline (Jenkins / GoCD) together with a configuration management tool (Ansible).</p>
        </Container>
    </div>
);

export default Intro;
