import './sytlosForm/form.css'
export default function Form(){
    return(
        <form className="form">
            <div className="form-title">
                <h2 className="title">Create product</h2>
            </div>
            <fieldset className="form-url">
                <label className="url-label">Url image:</label>
                <input className="url-input" type="text"/>
            </fieldset>
            <fieldset className="form-title">
                <label className="title-label">Title:</label>
                <input className="title-input" type="text"/>
            </fieldset>
            <fieldset className="form-description">
                <label className="description-label">Description:</label>
                <input className="description-input" type="text"/>
            </fieldset>
            <fieldset className="form-price">
                <label className="price-label">Price:</label>
                <input className="price-input" type="text"/>
            </fieldset>
            <input className="form-button" type="submit" value={"Create"} />
        </form>
    )
}   