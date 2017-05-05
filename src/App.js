import React, {Component} from "react";
import "./App.css";
import {Container, Grid, Header, Icon, Menu, Segment} from "semantic-ui-react";
import {TagCloud} from "react-tagcloud";
import WorkCard from "./WorkCard";

class App extends Component {
    render() {
        const skills = [
            {value: "Agile", count: 30},
            {value: "Clean Code", count: 26},
            {value: "TDD", count: 28},
            {value: "Kanban", count: 27},
            {value: "Scrum", count: 26},
            {value: "DevOps", count: 22},
            {value: "AWS", count: 23},
            {value: "Continuous Integration", count: 21},
            {value: "Continuous Deployment", count: 22},
            {value: "Continuous Delivery", count: 23},
            {value: "Java", count: 29},
            {value: "Javascript", count: 25},
            {value: "Node.js", count: 25},
            {value: "Dropwizard", count: 23},
            {value: "Ansible", count: 22},
            {value: "GIT", count: 23},
            {value: "Spring", count: 18},
            {value: "Play! Framework", count: 17},
            {value: "Python", count: 20},
            {value: "Django", count: 19},
            {value: "Docker", count: 28},
            {value: "Bash", count: 22},
            {value: "Maven", count: 26}
        ];

        const customRenderer = (tag, size, color) => (
            <div key={tag.value}
                 style={{
                     animation: 'blinker 3s linear infinite',
                     animationDelay: `${Math.random() * 2}s`,
                     fontSize: `${size}em`,
                     margin: '3px',
                     padding: '3px',
                     display: 'inline-block',
                     color: color,
                 }}>{tag.value}</div>
        );

        return (
            <div className="ui large top fixed hidden">
                <Container>
                    <Menu secondary={true} icon compact>
                        <a href="https://github.com/lcardito/" target="_blank"><Menu.Item><Icon size="large" link name='github'/></Menu.Item></a>
                        <a href="https://medium.com/@luigicardito/" target="_blank"><Menu.Item><Icon size="large" link name='medium'/></Menu.Item></a>
                    </Menu>
                    <div className="pusher">
                        <Segment vertical className="masthead center aligned">
                            <Container text textAlign="center">
                                <Header as="h1">Luigi Cardito</Header>
                                <Header as="h2">Software Engineer</Header>
                            </Container>
                        </Segment>
                    </div>
                </Container>
                <Segment vertical>
                    <Grid container={true} stackable={true} verticalAlign="middle" textAlign="center">
                        <Grid.Row>
                            <Grid.Column width={10} className="wide">
                                <Header as="h3">Who am I</Header>
                                <Container text textAlign="justified">
                                    Pro-active, motivated, curious and passionate developer, always ready to grab new
                                    exciting opportunities.
                                    I love working in Agile environments, I strongly believe in TDD and Pair Programming
                                    benefits, I'm a great team worker and
                                    I like mentoring and listening to more experienced developers so that the team value
                                    will increase quickly.
                                </Container>
                                <Header as="h3">What do I do</Header>
                                <Container text textAlign="justified">
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
                                        Java EE, Java Play! Framework, Spring, JavaScript (NodeJS, React, Flux).</p>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={6} className="wide" floated="right">
                                <TagCloud minSize={1}
                                          maxSize={2}
                                          tags={skills}
                                          renderer={customRenderer}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Container text textAlign="center">
                        <Header as="h2" className="horizontal header divider">Experience</Header>
                        <Grid centered columns={2}>
                            <Grid.Column width={12}>
                                <WorkCard
                                    imageSrc='https://upload.wikimedia.org/wikipedia/commons/b/b4/Sky_Logo_seit_Dezember_2015.png'
                                    header='Software Developer'
                                    period='Sep 2016 - current'
                                    skills={['Java', 'Docker', 'Dropwizard', 'Ansible', 'Rabbit MQ']}/>
                            </Grid.Column>
                            <Grid.Row centered columns={2}>
                                <Grid.Column>
                                    <WorkCard
                                        imageSrc='https://pbs.twimg.com/profile_images/661633390081409025/Yh62gWuf.png'
                                        header='Software Developer'
                                        period='Nov 2015 - Sep 2016'
                                        description='Senior Developer and Agile Evangelist. DevOps, Continuous Integration, Deployment and Delivery.'
                                        skills={['Java', 'Docker', 'Angular 1.x', 'Bootstrap', 'Hibernate', 'Spring']}/>
                                </Grid.Column>
                                <Grid.Column/>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        );
    }
}

export default App;
