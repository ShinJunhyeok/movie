import { HistoryUl } from '../../styled/movieStyle';
import HistoryItem from './HistoryItem';

const SearchHistory = ({ history, onDel }) => {
    return (
        <HistoryUl>
            {history.map((item) => (
                <HistoryItem key={item.id} item={item} onDel={onDel} />
            ))}
        </HistoryUl>
    );
};

export default SearchHistory;
