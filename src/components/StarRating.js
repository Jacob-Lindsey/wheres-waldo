import styled from "styled-components";

const StarRating = ({ className, rating }) => {
    return (
        <StarContainer className={className}>
            { 
                [...Array(rating)].map( (e,i) => <Star key={i}> &#9733; </Star> )
            }
            {
                [...Array(5-rating)].map( (e,i) => <Star key={i+rating}> &#9734; </Star> )
            }
        </StarContainer>
    );

};

export default StarRating;

const StarContainer = styled.div`
    line-height: 15rem;
`;

const Star = styled.span`
    color: #fdc91f;
    font-size: 3.5rem;
`;
