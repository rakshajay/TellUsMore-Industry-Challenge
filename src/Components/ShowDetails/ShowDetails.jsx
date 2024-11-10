import "./ShowDetails.scss";

function ShowDetails({ closeModal, name, summary, rating, image }) {
    const handleClose = () => {
        closeModal();
    };

    return (
        <section className="modal__overlay">
            <div className="modal__container">
                <div className="modal__close"></div>

                <section className="modal__content">
                <div className="modal__text">
                    <img className="modal__img" src={image}></img>
                    <h1 className="modal__header">{name}</h1>
                    <p className="modal__page modal__rating">Rating: {rating}/10</p>
                    <p className="modal__page">{summary}</p>
                </div>
                <button
                    className="modal__btn-close"
                    type="submit"
                    onClick={handleClose}
                >
                    Close{" "}
                </button>
                </section>
            </div>
        </section>
    );
}
export default ShowDetails;
