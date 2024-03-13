import React, { useState } from 'react';
import './App.css';
import BoardItem from 'components/BoardItem';
import { commentListMock, favoriteListMock, latestBoardListMock, top3BoardListMock } from 'mocks';
import Top3Item from 'components/Top3Item';
import CommentItem from 'components/CommentItem';
import FavoriteItem from 'components/FavoriteItem';
import InputBox from 'components/InputBox';
import Footer from 'layouts/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from 'views/Main';
import Authentication from 'views/Authentication';
import Search from 'views/Search';
import User from 'views/User';
import BoardDetail from 'views/Board/Detail';
import BoardWrite from 'views/Board/Write';
import BoardUpdate from 'views/Board/Update';
import Container from 'layouts/Container';
import { MAIN_PATH } from 'constant';
import { AUTH_PATH } from 'constant';
import { SEARCH_PATH } from 'constant';
import { USER_PATH } from 'constant';
import { BOARD_PATH } from 'constant';
import { BOARD_WRITE_PATH } from 'constant';
import { BOARD_DETAIL_PATH } from 'constant';
import { BOARD_UPDATE_PATH } from 'constant';



//      component: Application 컴포넌트     //
function App() {

  //      render: Application 컴포넌트 렌더링     //
  //  description: 메인화면 : '/' - Main  //
  //  description: 로그인 + 회원가입 : '/auth' - Authentication //
  //  description: 검색 화면 : '/search/:searchWord' -Search  //
  //  description: 게시물 상세보기 : 'board/detail/:boardNumber' - BoardDetail  //
  //  description: 게시물 작성하기 : 'board/write' - BoardWrite //
  //  description: 게시물 수정하기 : 'board/update/:boardNumber' - BoardUpdate  //
  //  description: 유저 페이지 : '/user/:userEmail' - User//

  const [value, setValue] = useState<string>('');
  return (
    <Routes>
      <Route element={<Container />}>
        <Route path={MAIN_PATH()} element={<Main />}/>
        <Route path={AUTH_PATH()} element={<Authentication />}/>
        <Route path={SEARCH_PATH(':searchWord')} element={<Search />}/>
        <Route path={USER_PATH(':userEmail')} element={<User />}/>
        <Route path={BOARD_PATH()}>
          <Route path={BOARD_WRITE_PATH()} element={<BoardWrite />}/>
          <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<BoardDetail />}/>
          <Route path={BOARD_UPDATE_PATH(':boardNumber')} element={<BoardUpdate />}/>
        </Route>
        <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Route>
      
    </Routes>
  );
}

export default App;


{/* <>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px'}}>
      </div>
      //{latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem} />)}
      //{top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      //{commentListMock.map(commentListItem => <CommentItem commentListItem={commentListItem} />)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', columnGap: '30px', rowGap: '20px'}}>
      //{favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem} />)}
      </div>
      //<InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요' value={value} error={true} setValue={setValue} message='aaa'/>
      <Footer />
    </> */}