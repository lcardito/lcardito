import React from "react";
import {Item, Label} from "semantic-ui-react";
import PropTypes from "prop-types";

const WorkCard = ({imageSrc, header, period, description, skills}) => (
    <Item.Group relaxed>
        <Item>
            <Item.Image size='tiny' src={imageSrc}/>
            <Item.Content>
                <Item.Header as="a">{header}</Item.Header>
                <Item.Meta>{period}</Item.Meta>
                <Item.Description>{description}</Item.Description>
                <Item.Extra>
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