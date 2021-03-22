import React, { useState } from 'react';
import {Card, CardTitle, CardImg, CardBody, Button, Modal, FormGroup, Label, Input} from 'reactstrap';
import Popup from './components/Popup';
import {toast} from "react-toastify";

let referencesList = [];

const BookCard = ({
    bookNumber,
    thumbnail,
    title,
    pageCount,
    language,
    description,
    authors,
    publisher,
    previewLink,
    infoLink
}) => {
    // set state
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(
        !modal,
        //TODO
        console.log(previewLink)
    );
    const [buttonPopup, setButtonPopup] = useState(false);

    function reference() {
        //setButtonPopup(true);
        let bookNum = bookNumber;
        let thumb = thumbnail;
        let bookTitle = title.italics();
        let bookPageCount = pageCount;
        let bookLan = language;
        let bookDes = description;
        let bookAuthor = authors;
        let bookPublisher = publisher;
        let date = new Date();
        let year = date.getFullYear()
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let month = months[date.getMonth()];
        let day = date.getDate();
        let accessed = "[Accessed " + day + " " + month + " " + year + " ]";

        referencesList.push(
            bookAuthor + " " +
            "(" + "year" + ")" + " " +
            bookTitle + " " +
            "edition" + " " +
            bookPublisher + " " +
            accessed
        )
        toast.info("Added to references list");
        console.log(referencesList);
    }
    return(
        <div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>My popup</h3>
            </Popup>
            <Card style={{ width: '233px' }} className='cardMain '>
                <CardImg
                    top
                    style={{ width: '100%', height: '230px' }}
                    src={thumbnail}
                    alt={title}
                />
                <CardBody className="book-card-body">
                    <CardTitle className='card-title'>{title}</CardTitle>
                    <h6 className='author-title'>{authors}</h6>
                    <h6 className='book-number'>{bookNumber}</h6>
                    <Button className='btnInfo' onClick={toggle}>More info</Button>
                    <Button className='btnReference' id={bookNumber} onClick={reference}>Reference</Button>
                </CardBody>
                <Modal isOpen={modal} toggle={toggle}>
                    <div className='modal-header d-flex justify-content-center'>
                        <h5 className='modal-title text-center' id='exampleModalLabel'>{title}</h5>
                        <button
                            aria-label='Close'
                            className='close'
                            type='button'
                            onClick={toggle}>
                            <span aria-hidden={true}>X</span>
                        </button>
                    </div>
                    <div className='modal-body'>
                        <div className='d-flex justify-content-between ml-3'>
                            <img src={thumbnail} alt={title} style={{ height: '233px' }} />
                            <div className='modalSection'>
                                <p>Page Count: {pageCount}</p>
                                <p>Language : {language}</p>
                                <p>Authors : {authors}</p>
                                <p>Publisher : {publisher}</p>
                            </div>
                        </div>
                        <div className='mt-3'>{description}</div>
                    </div>
                    <div className='modal-footer'>
                        <div className='left-side'>
                            <Button
                                href={previewLink}
                                className='btnLink'
                                color='default'
                                type='button'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Preview Link
                            </Button>
                        </div>
                        <div className='right-side'>
                            <Button
                                href={infoLink}
                                className='btnLink'
                                color='default'
                                type='button'
                                target='_blank'
                                rel='noopener noreferrer'>
                                Info Link
                            </Button>
                        </div>
                    </div>
                </Modal>
            </Card>
        </div>
    );
}

export default BookCard;