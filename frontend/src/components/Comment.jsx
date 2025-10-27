import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "timeago.js";

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
  color: ${({ theme }) => theme.text};
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
  font-size: 14px;
`;

function Comment({ comment }) {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/api/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <Container>
      {" "}
      <Author
        src={channel?.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
      />
      <Details>
        <Name>
          {channel?.name} <Date>{format(comment.createdAt)}</Date>
        </Name>

        <Text>{comment.desc}</Text>
      </Details>
    </Container>
  );
}

export default Comment;
