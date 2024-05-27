import { HistoryLi } from '../../styled/movieStyle';

const HistoryItem = ({ item, onDel }) => {
    const { id, text } = item;
    return (
        <>
            <HistoryLi>
                <p>{text}</p>
                <i className="xi-close" onClick={() => onDel(id)}></i>
            </HistoryLi>
        </>
    );
};

export default HistoryItem;
