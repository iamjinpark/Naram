import DetailContent from '@/components/moleclues/BoardDetail/DetailTitle';
import DetailButtonWrapper from '@/components/moleclues/DetailButtonWrapper/DetailButtonWrapper';
import { StyledBoardDetailLayout } from '@/styles/components/Board/BoardDetail';

function BoardDetailLayout() {
  return (
    <>
      <StyledBoardDetailLayout>
        <DetailContent />
      </StyledBoardDetailLayout>
      <DetailButtonWrapper />
    </>
  );
}

export default BoardDetailLayout;
