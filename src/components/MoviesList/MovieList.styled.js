import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: stretch;
  grid-gap: 20px;
`;
// export const CardList = styled.li``;
// export const Link = styled.li`
//   text-decoration: none;
// `;
// justify-items: center;
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
export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  link-decoration: none;
  text-decoration: none;
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
  width: 280px;
  height: 50px;
  background-color: rgb(170 161 140 / 24%);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    color: #ad3737;
  }
`;
// word -break: break-all;
// .projects__list {
//   display: block;
//   margin-top: 40px;

//   @media screen and (min-width: 768px) {
//     display: flex;
//     flex-wrap: wrap;
//     flex-basis: 50%;
//     margin-top: 14px;
//   }

//   @media screen and (min-width: 1200px) {
//     @include display-flex(center);
//     margin-left: auto;
//     margin-top: 34px;
//   }
// }

// .projects__item {
//   border: 1px solid var(--bg-border-cl);
//   border-top: none;
//   background-color: var(--main-white-cl);
//   margin-bottom: 30px;
//   &:last-child {
//     margin-bottom: 0;
//   }

//   @media screen and (min-width: 768px) {
//     width: calc((100% - 2 * 15px) / 2);
//     &:nth-child(2n + 1) {
//       margin-right: 30px;
//     }
//   }

//   @media screen and (min-width: 1200px) {
//     width: calc((100% - 2 * 30px) / 3);
//     margin-right: 30px;

//     &:last-child {
//       margin-left: 0;
//     }
//     &:nth-child(3n) {
//       margin-right: 0;
//     }

//     &:nth-last-child(-n + 3) {
//       margin-bottom: 0;
//     }
//   }
// }

// .projects__icon-link {
//   display: inline-block;
//   transition: box-shadow var(--main-animation);

//   &:hover {
//     box-shadow: var(--main-bcg-shadow);
//   }
// }

// .projects__holder {
//   position: relative;
//   overflow: hidden;
// }

// .projects__img {
//   width: 450px;
//   height: 294px;
// }

// .projects__action {
//   display: flex;
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: var(--action-bg-cl);
//   border: 1px solid var(--accent-cl-dark);
//   box-shadow: var(--accent-bcg-shadow);
//   transform: translateY(100%);
//   transition: transform var(--main-animation);

//   .projects__icon-link:hover &,
//   .projects__icon-link:focus & {
//     transform: translateY(-100%);
//   }
// }

// .projects__text {
//   @include display-flex(center);
//   margin: 63px 24px;
//   font-style: normal;
//   @include fonts(18px, 1.56);
//   font-size: 18px;
//   line-height: 1.56;
//   color: var(--main-white-cl);
// }

// .projects__sign-group {
//   padding: 20px 24px;
// }

// .projects__title {
//   margin-bottom: 4px;
//   @include fonts(18px, 2);
//   font-size: 18px;
//   line-height: 2;
//   text-align: left;
// }

// .projects__label {
//   color: var(--main-txt-cl);
//   @include fonts(16px, 1.88);
// }
