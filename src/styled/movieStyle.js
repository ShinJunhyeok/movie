import styled from 'styled-components';
import { FaRegWindowClose } from 'react-icons/fa';

// Movie.jsx
export const MovieContainer = styled.div`
    width: 100%;
    position: relative;
    padding: 50px 0;
    h2 {
        font-size: 40px;
        text-align: center;
        margin-bottom: 50px;
    }
    .select {
        padding: 0 210px;
        text-align: right;
        select {
            width: 130px;
            height: 30px;
            text-align: center;
            font-size: 17px;
        }
    }
`;
// MovieSearch.jsx
export const SearchForm = styled.form`
    /* border: 1px solid #000; */
    text-align: center;
    margin-bottom: 50px;
    input[type='text'] {
        width: 700px;
        height: 50px;
        font-size: 20px;
        text-indent: 20px;
        box-sizing: border-box;
    }
    button {
        cursor: pointer;
        margin-left: 10px;
        border-radius: 3px;
        width: 100px;
        height: 55px;
        border: 1px solid #dcdcdc;
        background-color: #dcdcdc;
        font-size: 18px;
        transition: 0.4s;
        &:hover {
            background-color: #999;
        }
    }
`;
// MovieList.jsx
export const MovieUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

// MovieItem.jsx
export const MovieLi = styled.li`
    cursor: pointer;
    box-sizing: border-box;
    width: 300px;
    height: 600px;
    margin: 50px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    img {
        width: 100%;
        height: 400px;
        box-sizing: border-box;
    }
    h3 {
        height: 70px;
        /* background-color: beige; */
        font-size: 20px;
        padding: 0 10px;
        margin: 10px 0;
    }
    p {
        font-size: 16px;
        padding: 0 10px;
    }
`;
// MovieInfo.jsx
export const MovieInfoContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    article {
        background-color: #fff;
        width: 1200px;
        height: 800px;
        margin: 50px auto;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        padding: 50px;
        display: flex;
        .poster {
            width: 500px;
            h2 {
                text-align: left;
            }
            h3 {
                font-size: 20px;
                margin-bottom: 20px;
            }
            img {
                width: 400px;
                height: 600px;
            }
        }
        .desc {
            width: 700px;
            height: 500px;
            margin: auto;
            /* border: 1px solid #000; */
            p {
                font-size: 20px;
            }
            :nth-child(1) {
                margin-bottom: 10px;
            }
            :nth-child(2) {
                margin-bottom: 10px;
            }
            :nth-child(4) {
                word-break: keep-all;
                padding-left: 20px;
            }
        }
    }
`;
export const CloseIcon = styled(FaRegWindowClose)`
    position: absolute;
    right: 5%;
    top: 5%;
    font-size: 50px;
    cursor: pointer;
`;

export const HistoryUl = styled.ul`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;
export const HistoryLi = styled.li`
    border: 1px solid #000;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    background-color: #dcdcdc;
    width: 90px;
    height: 40px;
    position: relative;
    box-sizing: border-box;
    &:first-child {
        margin-left: 0;
    }
    p {
        text-align: left;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 50px;
        height: 22px;
    }
    i {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 16px;
        cursor: pointer;
    }
`;
