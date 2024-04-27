import { StyledBoardTable, StyledPaginationBar } from '@/styles/components/Board/Board';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@/components/atoms/Board/Pagination';
import BasicButton from '@/components/atoms/Board/BasicButton';

type BoardTableProps = {
  to: string;
};

function BoardTable({ to }: BoardTableProps): React.ReactNode {
  type List = {
    userId: number;
    id: number;
    title: string;
    important: boolean;
  };

  // QnA 페이지 경로에 따라 판단 후 상태값 렌더링
  const location = useLocation();
  const isQnAPage = location.pathname === '/CustomerCenter/QnA';

  const [data, setData] = useState<List[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // 페이지당 아이템 개수
  const pageCount = Math.ceil(data.length / itemsPerPage); // 전체 페이지 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<List[]>('https://jsonplaceholder.typicode.com/posts/'); //API주소만 바꿔주시면 됩니다 to 진성, 경화
        setData(data);
      } catch (e) {
        console.error('Error fetching data:', Error);
      }
    };
    fetchData();
  }, []);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const renderData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.length);
    return data.slice(startIndex, endIndex).map((item) => (
      <StyledBoardTable $isQnAPage key={item.id} className="BoardTableList">
        <td style={{ width: 56 }} className="postNum">
          {item.id}
        </td>
        <td style={{ width: 812, textAlign: 'left' }} className="title">
          <Link to={`/BoardDetail/${item.id}`}>{item.title}</Link>
        </td>
        {/* QnA 페이지에서만 상태 열을 표시 */}
        {isQnAPage && (
          <td style={{ width: 104 }} className="status">
            {item.id}
          </td>
        )}
        <td style={{ width: 103 }} className="date">
          {item.id}
        </td>
        <td style={{ width: 56 }} className="id">
          {item.id}
        </td>
        <td style={{ width: 56 }} className="view">
          {item.id}
        </td>
      </StyledBoardTable>
    ));
  };

  return (
    <>
      <StyledBoardTable $isQnAPage>
        <thead>
          <tr className="BoardTableTitle">
            <th style={{ width: 56 }}>번호</th>
            <th style={{ width: 812 }}>제목</th>
            {/* QnA 페이지에서만 상태 열 추가 */}
            {isQnAPage && <th style={{ width: 104 }}>상태</th>}
            <th style={{ width: 103 }}>작성일</th>
            <th style={{ width: 56 }}>작성자</th>
            <th style={{ width: 56 }}>조회수</th>
          </tr>
        </thead>
        <tbody>{renderData()}</tbody>
      </StyledBoardTable>
      <StyledPaginationBar>
        <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
        <BasicButton text="글쓰기" to={to} />
      </StyledPaginationBar>
    </>
  );
}

export default BoardTable;

// type List = {
//   number: string;
//   title: string;
//   date: string;
//   id: string;
//   view: string;
// };

// const Lists: List[] = [
//   {
//     number: '0',
//     title: '날씨가 좋네요',
//     date: '2024.04.01',
//     id: '지인',
//     view: '122',
//   },
//   {
//     number: '1',
//     title: '이불괴물아 살려줘',
//     date: '2024.04.01',
//     id: '태욱',
//     view: '5',
//   },
//   {
//     number: '2',
//     title: '경화야 벚꽃보러갈래?',
//     date: '2024.04.01',
//     id: '진성',
//     view: '72',
//   },
//   {
//     number: '3',
//     title: '누나한테 까불지말라했지',
//     date: '2024.04.01',
//     id: '경화',
//     view: '35',
//   },
// ];

{
  /* <tr key={item.userId} className="BoardTableList">
<td>{item.userId}</td>
<td>
  <a href="/">{item.title}</a>
</td>
<td>{item.id}</td>
<td>{item.id}</td>
<td>{item.id}</td>
</tr> */
}
