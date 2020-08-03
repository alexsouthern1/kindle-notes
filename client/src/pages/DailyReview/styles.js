import styled from "styled-components";

export const NotesCol = styled.div`
  display: flex;  
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  overflow: visible; 
  margin-top: 2%   
`;

export const CarouselLockup = styled.div`  
  margin: 1rem;
`;

export const Wrapper = styled.div`
  position: reative;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;
// transition: transform ease-out ${(props) => 100 * props.totalSlides}s;
export const SliderContent = styled.div`
  transition: transform ease-out 0.6s;
  transform: translateX(
    -${(props) => (props.index * 100) / props.totalSlides}%
  );
  height: 100%;
  width: ${(props) => 100 * props.totalSlides}%;
  display: flex;
`;

export const Slide = styled.div`
  height: 100%;
  width: 100%;
  margin-left: 5%;
  margin-right: 5%;
`;