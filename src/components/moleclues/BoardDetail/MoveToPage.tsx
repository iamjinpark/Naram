import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledTest, StyledTestWrapper } from '@/styles/components/Board/BoardDetail';

type MoveToPageProps = {
  id: string;
  userId: string;
  title: string;
};

function MoveToPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<MoveToPageProps | null>(null);
  const [prevPost, setPrevPost] = useState<MoveToPageProps | null>(null);
  const [nextPost, setNextPost] = useState<MoveToPageProps | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log('error:', error);
      }
    }

    fetchData();
  }, [id]);

  useEffect(() => {
    if (!post) return;

    async function fetchAdjacentPosts() {
      try {
        const prevResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(id) - 1}`);
        setPrevPost(prevResponse.data);
      } catch (error) {
        console.log('Previous post not found');
      }

      try {
        const nextResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(id) + 1}`);
        setNextPost(nextResponse.data);
      } catch (error) {
        console.log('Next post not found');
      }
    }

    fetchAdjacentPosts();
  }, [id, post]);

  return (
    <div>
      {prevPost && (
        <StyledTestWrapper to={`/BoardDetail/${prevPost.id}`}>
          <StyledTest>
            <img src="/public/up_icon.svg" alt="이전글" />
            <div>이전글</div>
          </StyledTest>
          <div>{prevPost.title}</div>
          <div>{prevPost.userId}</div>
        </StyledTestWrapper>
      )}
      {nextPost && (
        <StyledTestWrapper to={`/BoardDetail/${nextPost.id}`}>
          <StyledTest>
            <img src="/public/down_icon.svg" alt="다음글" />
            <div>다음글</div>
          </StyledTest>
          <div>{nextPost.title}</div>
          <div>{nextPost.userId}</div>
        </StyledTestWrapper>
      )}
    </div>
  );
}

export default MoveToPage;
