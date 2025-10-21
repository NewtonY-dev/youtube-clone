import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0;
`;

const Author = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
  `;

const Name = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.p`
  font-size: 14px;`


function Comment() {
  return (
    <Container>
      {" "}
      <Author src="https://i.ibb.co/MBtjqXQ/no-avatar.gif" />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>{" "}
        </Name>

        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis deleniti distinctio tenetur quidem sapiente nobis reiciendis dolor in pariatur deserunt maiores commodi iusto non, animi adipisci tempore tempora maxime?
        </Text>
      </Details>
    </Container>
  );
}

export default Comment;
