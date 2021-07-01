const PreviewProcessedData = ({data}) => {
    if (!data) return null;

    return (
        <div className="processed-data-message">Данные обработаны!</div>
    );
}

export default PreviewProcessedData