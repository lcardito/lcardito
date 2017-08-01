import React from "react";
import {Header, Item, Label} from "semantic-ui-react";
import PropTypes from "prop-types";

const WorkCard = ({imageSrc, header, period, description, skills}) => (
    <Item.Group relaxed>
        <Item>
            <Item.Image size='tiny' src={imageSrc} />
            <Item.Content>
                <Item.Header as="h2">{header}</Item.Header>
                <Item.Meta>{period}</Item.Meta>
                <Item.Description>
                    <Header as='h5'>Achievements</Header>
                    <span style={{fontStyle: 'italic'}}>{description}</span>
                </Item.Description>
                <Item.Extra>
                    <Header as='h5'>Techs</Header>
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
    description: PropTypes.string,
    skills: PropTypes.array
};