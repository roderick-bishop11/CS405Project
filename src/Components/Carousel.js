import React from "react";
import Person from "../Person";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Carousel = ({ carouselCards, setPerson }) => {
    return (
        <>
        <ImageList>
            {carouselCards.map((person) => (
                <ImageListItem>
                <Person />
                </ImageListItem>
            ))}

        </ImageList>
        <button onClick={() => setPerson("")}>clear all</button>
        </>

    );
};

export default Carousel;
