import {
  StyledDetailTitleContainer,
  StyledDetailTitleWrapper,
  StyledFileWrapper,
  StyledDetailSubTitle,
  StyledDetailContent,
  StyledDetailTitleText,
} from '@/styles/components/Board/BoardDetail';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MoveToPage from './MoveToPage';

type DetailTitleProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function DetailTitle() {
  const { id } = useParams();
  const [data, setData] = useState<DetailTitleProps>({ userId: 0, id: 0, title: '', body: '' });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<DetailTitleProps>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(response.data);
        console.log({ id });
      } catch (error) {
        console.log('error:', error);
        setData({ userId: 0, id: 0, title: '', body: '' });
      }
    }

    fetchData();
  }, [id]);

  return (
    <StyledDetailTitleContainer>
      <StyledDetailTitleWrapper>
        <StyledDetailTitleText>{data.title}</StyledDetailTitleText>
        <StyledDetailSubTitle>
          {data.id} | {data.userId} | {data.id}
        </StyledDetailSubTitle>
      </StyledDetailTitleWrapper>
      <StyledFileWrapper>
        <img src="/public/file.svg" alt="파일첨부" />
        <StyledDetailSubTitle>{data.title}</StyledDetailSubTitle>
      </StyledFileWrapper>
      <StyledDetailContent>{data.body}</StyledDetailContent>
      <MoveToPage />
    </StyledDetailTitleContainer>
  );
}

export default DetailTitle;
