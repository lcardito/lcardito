import React, {Component} from "react";
import {Item, Label} from "semantic-ui-react";

class WorkCard extends Component {
    render() {
        return <Item.Group relaxed>
            <Item>
                <Item.Image size='tiny' src={this.props.imageSrc}/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header as="a">{this.props.header}</Item.Header>
                    <Item.Meta>{this.props.period}</Item.Meta>
                    <Item.Description>{this.props.description}</Item.Description>
                    <Item.Extra>
                        {this.props.skills.map((s, idx) => {
                            return <Label key={idx}>{s}</Label>
                        })}
                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    }
}

export default WorkCard;

WorkCard.propTypes = {
    imageSrc: React.PropTypes.string,
    header: React.PropTypes.string,
    period: React.PropTypes.string,
    description: React.PropTypes.string,
    skills: React.PropTypes.array
};