import React from "react";
import {Header, Item, Label, List} from "semantic-ui-react";
import PropTypes from "prop-types";

const WorkCard = ({imageSrc, header, period, achievements, skills}) => (
    <Item.Group relaxed>
        <Item>
            <Item.Image size='tiny' src={imageSrc}/>
            <Item.Content>
                <Item.Header as="h2">{header}</Item.Header>
                <Item.Meta>{period}</Item.Meta>
                <Item.Description>
                    {achievements && achievements.length > 0 &&
                    <React.Fragment>
                        <Header as='h3'>Achievements / Contributions</Header>
                        <List bulleted className='achievements'>
                            {achievements.map((a, idx) => (
                                <List.Item key={idx}>{a}</List.Item>
                            ))}
                        </List>
                    </React.Fragment>
                    }
                </Item.Description>
                <Item.Extra>
                    <Header as='h3'>Technologies</Header>
                    {skills.map((s, idx) => {
                        return <Label key={idx}>{s}</Label>
                    })}
                </Item.Extra>
            </Item.Content>
        </Item>
    </Item.Group>
);

export default WorkCard;

WorkCard.propTypes = {
    imageSrc: PropTypes.string,
    header: PropTypes.string,
    period: PropTypes.string,
    achievements: PropTypes.array,
    skills: PropTypes.array
};