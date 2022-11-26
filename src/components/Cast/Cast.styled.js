import styled from 'styled-components';

export const Img = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    box-shadow: 0px 7px 8px -5px rgba(0, 0, 0, 0.2),
      0px 8px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 15px 0px rgba(0, 0, 0, 0.12);
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-content: center;

  align-content: center;
  align-items: stretch;
  grid-gap: 20px;
`;
export const Title = styled.h2`
  padding: 10px;
  font-size: 18px;
  line-height: 1.56;
  color: #182446f2;

  text-align: center;
  justify-content: center;
  align-content: center;
  vertical-align: middle;
  width: 150px;
  height: 50px;
  background-color: rgb(170 161 140 / 24%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    color: #ad3737;
  }
`;
export const Container = styled.div`
  padding: 30px;
`;

// export const Img = styled.img``;

// export const Img = styled.img``;

// export const Img = styled.img``;
