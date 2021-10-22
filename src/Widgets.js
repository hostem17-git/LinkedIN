import React from 'react'
import "./Widgets.css"
import { FiberManualRecord, InfoOutlined } from '@material-ui/icons'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_articleLeft">
                <FiberManualRecord />
            </div>
            <div className="widgts_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className="widgets">
            <div className="widgets_header">
                <p> LinkedIN News</p>
                <InfoOutlined />
            </div>

            {newsArticle("Letting your side hustle take over", "1d ago-10,660 readers")}
            {newsArticle("Why write a resignation letter?", "5h ago-1,060 readers")}
            {newsArticle("Ditch the career ladder", "5h ago-880 readers")}
            {newsArticle("Netfilx rides 'Squid Game' wave", "2d ago-36,460 readers")}
            {newsArticle("How to work through anxiety?", "2d ago-1006 readers")}
        </div>
    );
}

export default Widgets
