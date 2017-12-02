import React from "react";
import {Container, Header, Icon, Menu, Segment} from "semantic-ui-react";

export default class SocialMenu extends React.Component {
    render() {
        const user = 'lcardito';
        const emailHost = 'gmail.com';

        return <Container>
            <Menu secondary={true} icon={true} compact>
                <a href={`http://${user}.me`} target='_blank' title='Web'>
                    <Menu.Item>
                        <Icon size='large' link name='world'/>
                    </Menu.Item>
                </a>
                <a href='https://github.com/lcardito/' target='_blank' title='Github'>
                    <Menu.Item>
                        <Icon size='large' link name='github'/>
                    </Menu.Item></a>
                <a href='https://medium.com/@luigicardito/' target='_blank' title='Medium'>
                    <Menu.Item>
                        <Icon size='large' link name='medium'/>
                    </Menu.Item>
                </a>
                <a href={`mailto:${user}@${emailHost}`} title='Mail'>
                    <Menu.Item>
                        <Icon size='large' link name='mail'/>
                    </Menu.Item>
                </a>
            </Menu>
            <div className='pusher'>
                <Segment vertical className='masthead center aligned'>
                    <Container text textAlign='center'>
                        <Header as='h1'>
                            Luigi Cardito
                            <Header.Subheader>
                                <span className='italic'>{user}@{emailHost}</span>
                            </Header.Subheader>
                        </Header>
                        <Header as='h2'>
                            Software Engineer
                            <Header.Subheader>
                                <span className='italic'>BS Computer Science, Information Technology</span>
                            </Header.Subheader>
                        </Header>

                    </Container>
                </Segment>
            </div>
        </Container>
    }
};