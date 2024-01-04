import "../styles/LoadMoreButton.css";

export const LoadMoreButton = ({onClick, label}) => {
    return (
        <button className="load-more-btn" onClick={onClick}>
            {label}
        </button>
    );
}