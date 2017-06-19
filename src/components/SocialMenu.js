import React from "react";
import {Container, Header, Icon, Menu, Segment} from "semantic-ui-react";

const SocialMenu = () => (
    <div>
        <Menu secondary={true} icon={true} compact>
            <a href='https://github.com/lcardito/' target='_blank'>
                <Menu.Item>
                    <Icon size='large' link name='github'/>
                </Menu.Item></a>
            <a href='https://medium.com/@luigicardito/' target='_blank'>
                <Menu.Item>
                    <Icon size='large' link name='medium'/>
                </Menu.Item>
            </a>
        </Menu>
        <div className='pusher'>
            <Segment vertical className='masthead center aligned'>
                <Container text textAlign='center'>
                    <Header as='h1'>Luigi Cardito</Header>
                    <Header as='h2'>Software Engineer</Header>
                </Container>
            </Segment>
        </div>
    </div>
);

export default SocialMenu;