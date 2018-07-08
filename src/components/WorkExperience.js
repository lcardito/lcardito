import React from "react";
import {Container, Grid, Header} from "semantic-ui-react";
import WorkCard from "./WorkCard";

const WorkExperience = () => (
    <Container text className='experience'>
        <Header as='h2' className='horizontal header divider aligned' textAlign="center">Experience</Header>
        <Grid stackable columns={1}>
            <Grid.Column>
                <WorkCard
                    imageSrc='https://dm8eklel4s62k.cloudfront.net/images/sky-logo-b90e8c9.jpg'
                    header='Software Developer @ Sky'
                    period='Sep 2016 - current'
                    achievements={[
                        'Migration of existing RPM deployments to Docker/Rancher',
                        'Delivered data transformation component to support legacy system deprecation',
                        'Designed and developed internal service front end',
                        'Improved consistency of deployment and monitoring infrastructure',
                        'On call support'
                    ]}
                    skills={['Java', 'Docker', 'Dropwizard', 'Ansible', 'Rabbit MQ', 'React', 'Redux']}/>
            </Grid.Column>
            <Grid.Column>
                <WorkCard
                    imageSrc='https://d1t3catrzs6yb6.cloudfront.net/wp-content/uploads/2018/05/18142409/Clearvision-logo-1.png'
                    header='Software Developer @ Clearvision'
                    period='Nov 2015 - Sep 2016'
                    achievements={[
                        'Improved code quality and application structure',
                        'Developed full stack features based on business needs',
                        'Defined and implemented Continuous Delivery for internal instance of the product'
                    ]}
                    skills={['Java', 'Docker', 'Angular 1.x', 'Bootstrap', 'Hibernate', 'Spring']}/>
            </Grid.Column>
            <Grid.Column>
                <WorkCard
                    imageSrc='http://i.forbesimg.com/media/lists/companies/jpmorgan-chase_416x416.jpg'
                    header='Senior Software Developer @ JPM'
                    period='Mar 2015 - Nov 2015'
                    achievements={[]}
                    skills={['Java', 'Spring']}/>
            </Grid.Column>
            <Grid.Column>
                <WorkCard
                    imageSrc='https://media.glassdoor.com/sql/193109/wds-squarelogo.png'
                    header='Software Developer @ WDS'
                    period='Jul 2013 - Mar 2015'
                    achievements={[
                        'Designed and developed flexible conversational user interfaced based on a PubSub model',
                        'Collaboration with Xeroxs\' research team (XRCE and PARC labs) to implement and improve an Artificial Intelligence system'
                    ]}
                    skills={['Java', 'Play! Framework', 'MongoDB', 'Knockoutjs', 'MySQL']}/>
            </Grid.Column>
            <Grid.Column>
                <WorkCard
                    imageSrc='https://www.channelbiz.es/wp-content/uploads/2015/09/everis-684x513.jpg'
                    header='Information Technology Consultant @ Everis'
                    period='May 2012 - June 2013'
                    achievements={[]}
                    skills={['Java', 'Velocity', 'iBatis', 'Axis', 'MySQL']}/>
            </Grid.Column>
            <Grid.Column>
                <WorkCard
                    imageSrc='https://media.licdn.com/dms/image/C560BAQEquo5NzPwK_w/company-logo_200_200/0?e=2159024400&v=beta&t=IRVUTS3YqX56x4y6w6MHLryUM8XIXUy8r99jJ1qAxdQ'
                    header='Software Developer @ Nexse SRL'
                    period='June 2011 - March 2012'
                    achievements={[]}
                    skills={['Java EE', 'Velocity', 'Spring MVC', 'ecache', 'Axis', 'WSDL']}/>
            </Grid.Column>
            <Grid.Column>
                <WorkCard
                    imageSrc='http://images.forbes.com/media/lists/companies/ibm_416x416.jpg'
                    header='Software Developer @ IBM Italia'
                    period='June 2010 - Feb 2011'
                    achievements={[]}
                    skills={['Java', 'JSF 2.0', 'Spring 3.0']}/>
            </Grid.Column>
        </Grid>
    </Container>
);

export default WorkExperience;
