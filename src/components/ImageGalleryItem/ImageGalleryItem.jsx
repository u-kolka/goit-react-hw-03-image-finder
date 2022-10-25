

export const ImageGalleryItem = ({ image, tags }) => {
    return (
        <li className='gallery-item'>
            <img src={ image } alt={tags} width="240"/>
        </li >
    )
}