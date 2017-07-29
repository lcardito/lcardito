import React from "react";
import "../App.css";
import {Container, Grid, Segment} from "semantic-ui-react";
import WorkExperience from "./WorkExperience";
import SkillsTagCloud from "./SkillsTagCloud";
import Intro from "./Intro";
import SocialMenu from "./SocialMenu";

const App = () => (
    <div className='ui large top fixed hidden'>
        <Container>
            <SocialMenu />
        </Container>
        <Segment vertical>
            <Grid container={true} stackable={true} verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={10} className='wide'>
                        <Intro />
                    </Grid.Column>
                    <Grid.Column width={6} className='wide' floated='right'>
                        <SkillsTagCloud />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Container text>
                <WorkExperience />
            </Container>
        </Segment>
    </div>
);

export default App;
