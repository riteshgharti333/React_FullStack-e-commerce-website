import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex; 
  ${mobile({flexDirection: "column"})}

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20x;
  margin-left: 20px
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({display: "none"})}

`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({backgroundColor: "lightgray"})}

`;

const ContactItem = styled.div`
margin-bottom: 20px;
disply: flex;
align-items: center;
`;

const Payment = styled.img`
   width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>.ROYAL.</Logo>
        <Desc>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi quia,
          eveniet, aliquid natus magnam facilis quidem non velit inventore
          itaque omnis voluptatum adipisci fuga nesciunt sequi alias! Laborum
          illum consequuntur ex molestias dolorem consectetur quae veniam
          debitis animi, maiores culpa.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Userful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Condition</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}} /> 173234 Waknaghat , Solan Himachal Pradesh
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}} /> +91 420 786 33
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}} /> contact@ritesh.dev
        </ContactItem>
        <Payment src= ""/>
      </Right>
    </Container>
  );
};

export default Footer;
