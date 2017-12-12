import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const liStyle = {
    width: 500,
}

const imageStyle = {
    height: 100,
    width: 100,
}

const spanStyle = {
    width: 500,
}

export default class RecipeListItem extends Component {

    render() {
        const { title, image, time } = this.props.recipe;
        const handleClick = this.props.handleClick;
        return (
            <Link to="/chosenRecipe">
            <li key = {this.props.id} style={liStyle} onClick={handleClick}>
                <img src={image} style={imageStyle} alt="recipeImage"/>
                <span style={spanStyle}>{title}</span>
                <span style={spanStyle}>{time}</span>
            </li>
            </Link>
        )
    }
}

