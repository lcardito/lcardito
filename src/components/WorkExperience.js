import React from "react";
import {Grid, Header} from "semantic-ui-react";
import WorkCard from "./WorkCard";

const WorkExperience = () => (
    <div>
        <Header as='h2' className='horizontal header divider center aligned'>Experience</Header>
        <Grid centered columns={2} stackable>
            <Grid.Column width={12}>
                <WorkCard
                    imageSrc='https://dm8eklel4s62k.cloudfront.net/images/sky-logo-b90e8c9.jpg'
                    header='Software Developer @ Sky'
                    period='Sep 2016 - current'
                    skills={['Java', 'Docker', 'Dropwizard', 'Ansible', 'Rabbit MQ', 'React', 'Redux']}/>
            </Grid.Column>
            <Grid.Row centered columns={2}>
                <Grid.Column>
                    <WorkCard
                        imageSrc='https://pbs.twimg.com/profile_images/661633390081409025/Yh62gWuf.png'
                        header='Software Developer @ Clearvision'
                        period='Nov 2015 - Sep 2016'
                        description='Senior Developer and Agile Evangelist. DevOps, Continuous Integration, Deployment and Delivery.'
                        skills={['Java', 'Docker', 'Angular 1.x', 'Bootstrap', 'Hibernate', 'Spring']}/>
                </Grid.Column>
                <Grid.Column>
                    <WorkCard
                        imageSrc='http://i.forbesimg.com/media/lists/companies/jpmorgan-chase_416x416.jpg'
                        header='Senior Software Developer @ JPM'
                        period='Mar 2015 - Nov 2015'
                        description=''
                        skills={['Java', 'Spring']}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
                <Grid.Column>
                    <WorkCard
                        imageSrc='https://media.glassdoor.com/sql/193109/wds-squarelogo.png'
                        header='Software Developer @ WDS'
                        period='Jul 2013 - Mar 2015'
                        description=''
                        skills={['Java', 'Play! Framework', 'MongoDB', 'Knockoutjs', 'MySQL']}/>
                </Grid.Column>
                <Grid.Column>
                    <WorkCard
                        imageSrc='http://www.camacoes.it/images/everisLogo.jpg'
                        header='Information Technology Consultant @ Everis'
                        period='May 2012 - June 2013'
                        description='Front-end and back-end system analysis and maintenance for ING Direct Customer, 2nd level investigations and 3rd level support'
                        skills={['Java', 'Velocity', 'iBatis', 'Axis', 'MySQL']}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <WorkCard
                        imageSrc='https://media.licdn.com/mpr/mpr/shrink_100_100/p/3/000/090/2de/3a16c46.png'
                        header='Software Developer @ Nexse SRL'
                        period='June 2011 - March 2012'
                        skills={['Java EE', 'Velocity', 'Spring MVC', 'ecache', 'Axis', 'WSDL']}/>
                </Grid.Column>
                <Grid.Column>
                    <WorkCard
                        imageSrc='http://images.forbes.com/media/lists/companies/ibm_416x416.jpg'
                        header='Software Developer @ IBM Italia'
                        period='June 2010 - Feb 2011'
                        skills={['Java', 'JSF 2.0', 'Spring 3.0']}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

export default WorkExperience;