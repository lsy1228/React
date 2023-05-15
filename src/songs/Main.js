import React, { useState } from "react";
import data from './image'
import Album from "./Album";
import List from "./List"
import Player from "./Player";
import styled from "styled-components";
import logo from './logo.png';
import { useNavigate } from "react-router-dom";


const PlaylistMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    position: absolute;

    .logo {
        width: 110px;
        height: 100px;
        margin: 10px;
    }
`;

const Main = () => {
    const navigate = useNavigate();

    const [albumData, setAlbumData] = useState(data); //앨범 데이터 (img 배열을 data로 임포트해서 albumData에 넣는다)
    const [currAlbum, setCurrAlbum] = useState(albumData[0]); //선택한 앨범 설정 (albumData의 첫번째 요소를 currAlbum에 넣는다)
    
    const onSelect = (id) => { 
        // 고유번호인 id를 받아서 해당 앨범 이미지를 찾음
        // (내가 선택한 id와 albumImg에서 item으로 넘긴 값과 비교하여 같은 값이면 그 값을 setCurrAlbum에 넣는다 )
        setCurrAlbum(albumData.find(item => item.id === id)); //배열함수 중 해당값만 찾는 find 함수
    }

    return (
        <PlaylistMain>
            <img src={logo} alt="" onClick={()=>navigate("/Home")} className="logo"/>
            <div>
                <Album albumData = {albumData} onSelect = {onSelect} currAlbum = {currAlbum} />
            </div>
            <Player />
        </PlaylistMain>
        
        
    );
}

export default Main;