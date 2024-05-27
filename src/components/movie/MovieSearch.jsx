import { useRef, useState } from 'react';
import { SearchForm } from '../../styled/movieStyle';
import SearchHistory from './SearchHistory';

const MovieSearch = ({ onSearch }) => {
    const [history, setHistory] = useState([]);
    const [text, setText] = useState('');
    const no = useRef(1);

    const onAdd = (text) => {
        setHistory([
            ...history,
            {
                id: no.current++,
                text,
            },
        ]);
    };
    const onDel = (id) => {
        setHistory(history.filter((item) => item.id !== id));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onSearch(text);
        onAdd(text);
        setText('');
    };

    return (
        <SearchForm onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="검색어를 입력해주세요"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button>검색</button>
            <SearchHistory history={history} onDel={onDel} />
        </SearchForm>
    );
};

export default MovieSearch;
