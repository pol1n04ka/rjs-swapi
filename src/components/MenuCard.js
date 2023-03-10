import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuCard = (props) => {
  const Card = styled(Link)`
    background-color: ${props.style.color};
    border-radius: 1em;
    padding: 1em;
    margin: 1em;

    transition: 200ms;

    /* width: 20%;
    height: 10em; */

    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: black;

    &:hover {
      box-shadow: 0.7em 0.7em ${props.style.shadow};
    }

    @media (min-width: 1000px) {
      /* width: 20%; */
      /* flex-shrink: 2; */
      min-width: 20%;
    }

    @media (min-width: 720px) {
      width: 30%;
    }

    @media (max-width: 720px) {
      width: 100%;
    }
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: stretch;
    justify-content: space-between;
  `;

  // const Link = styled.a`
  //   text-decoration: none;
  //   color: black;
  // `;

  const Image = styled.img`
    /* height: 100%; */
    /* height: auto; */
    align-self: flex-end;
  `;

  const Paragraph = styled.p`
    align-self: flex-start;
    font-weight: 600;
    font-size: 1.2em;
  `;

  return (
    <Card to={props.url}>
      <Container>
        <Image alt={props.img.alt} src={props.img.href} />
        <Paragraph>
          {/* <Link href={props.href}>{props.label}</Link> */}
          {props.label}
        </Paragraph>
      </Container>
    </Card>
  );
};

export default MenuCard;
