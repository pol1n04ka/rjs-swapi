import styled from "styled-components";
// import styles from "./Container.module.css";

// const Container = (props) => {
//   return <div className={styles.container}>{props.children}</div>;
// };

const Container = styled.div`
  margin: 3em auto;
  width: 70%;

  @media (min-width: 720px) {
    margin: auto;
    width: 90%;
  }

  @media (max-width: 450px) {
    width: 100%;
    margin: auto;
  }
`;

export default Container;
