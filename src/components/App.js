import React from "react";
import "../App.css";
import {Grid} from "semantic-ui-react";
import WorkExperience from "./WorkExperience";
import SkillsTagCloud from "./SkillsTagCloud";
import Intro from "./Intro";
import SocialMenu from "./SocialMenu";
// import ReactGithubCalendar from '@axetroy/react-github-calendar';

const App = () => (
    <div>
        <SocialMenu/>
        <Grid container={true} stackable={true} verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column width={10} className='wide'>
                    <Intro/>
                </Grid.Column>
                <Grid.Column width={6} className='wide' floated='right' verticalAlign='middle' textAlign="center">
                    <SkillsTagCloud/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        <WorkExperience/>
    </div>
);

export default App;
