import React from 'react'
import PropTypes from 'prop-types'

function ProductItem(props) {
    const { src, title, subTitle, url } = props

    return (
        <div className="work_container">
            <a href={url} className="work_card w-inline-block">
                <div className="work_img">
                    <img
                        src={src}
                        loading="lazy"
                        alt={title}
                        className="work_photo"
                    />
                </div>
                <p className="work_title">{title}</p>
                <p className="work_sub-title">{subTitle}</p>
            </a>
        </div>
    )
}

ProductItem.propTypes = {
    classes: PropTypes.object,
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    url: PropTypes.string,
}

export default ProductItem
