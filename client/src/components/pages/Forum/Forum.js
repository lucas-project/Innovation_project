import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import {Link} from "../../../styles";
import {Card} from "antd";


const mystyle = {
    marginLeft:"10%",
    marginTop:"15%",
    border:"none",
    overflow:"hidden"
};

const iframeContainer = {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: "35px",
    height: "0",
    overflow: "hidden"
}

const iframestyle = {
    position: "absolute",
    top:"0",
    left: "0",
    width: "400px",
    height: "auto",
    minHeight:"600px"
}

const Forum = () => {
    return (
        <div className="fb-post" style={{ position: "absolute", marginTop: "70px", fontSize: "16px"}}>
            <Container>
                <Row>
                    <Col>
                        <div style={iframeContainer}>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId"
                        width="500" height="300" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <div style={iframeContainer}>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvicconcertorchestra%2Fposts%2Fpfbid0setWnySKyQHgdA1KpRLrgUCuXqQfVb95VuNr3D1QMEWUq4NJGjLTqWSDApYNxsbfl&show_text=true&width=500"
                        width="500" height="532" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <div style={iframeContainer}>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAmlamusic%2Fposts%2Fpfbid02DTfo5brXefLqGnDo3bSXC2mA4c2EhoGWQB9KrDWeSGEG2XX6e62ikipvRfrPNWX3l&show_text=true&width=500"
                        width="500" height="557" style={iframestyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Sunsets don&#39;t get much better
                            than this one over <a
                                href="https://twitter.com/GrandTetonNPS?ref_src=twsrc%5Etfw">@GrandTetonNPS</a>. <a
                                href="https://twitter.com/hashtag/nature?src=hash&amp;ref_src=twsrc%5Etfw">#nature</a>
                            <a href="https://twitter.com/hashtag/sunset?src=hash&amp;ref_src=twsrc%5Etfw">#sunset</a> <a
                                href="http://t.co/YuKy2rcjyU">pic.twitter.com/YuKy2rcjyU</a></p>&mdash; US Department of
                            the Interior (@Interior) <a
                                href="https://twitter.com/Interior/status/463440424141459456?ref_src=twsrc%5Etfw">May 5,
                                2014</a></blockquote>
                        <Helmet>
                            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </Helmet>
                    </Col>
                    <Col>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Go <a
                            href="https://twitter.com/JSalke?ref_src=twsrc%5Etfw">@JSalke</a> and <a
                            href="https://twitter.com/AmazonStudios?ref_src=twsrc%5Etfw">@AmazonStudios</a>! <a
                            href="https://t.co/ycGoNE2Zne">https://t.co/ycGoNE2Zne</a></p>&mdash; Jeff Bezos
                            (@JeffBezos) <a
                                href="https://twitter.com/JeffBezos/status/1577732519856082944?ref_src=twsrc%5Etfw">October
                                5, 2022</a></blockquote>
                        <Helmet>
                            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </Helmet>
                    </Col>
                    <Col>
                        <blockquote className="twitter-tweet"><p lang="en" dir="ltr">So damn cool. Congrats to MiMi and
                            the whole Mars helicopter team. <a
                                href="https://t.co/8KWQoLbtHV">https://t.co/8KWQoLbtHV</a></p>&mdash; Jeff Bezos
                            (@JeffBezos) <a
                                href="https://twitter.com/JeffBezos/status/1519789439224012802?ref_src=twsrc%5Etfw">April
                                28, 2022</a></blockquote>
                        <Helmet>
                        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></Helmet></Col>

                </Row>
                <Row>
                    <Col>
                        <a className="twitter-timeline"
                           href="https://twitter.com/TwitterDev"
                           data-tweet-limit="10">
                            Tweets by @TwitterDev
                        </a>
                    </Col>
                </Row>
                <Row></Row>
                <Row></Row>
            </Container>
        </div>
    );
};

export default Forum;


// const Forum = () => {
//     const [embed, setEmbed] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//
//     useEffect(() => {
//         setIsLoading(true);
//         const fetchData = async () => {
//             const result = await fetch("https://jsonplaceholder.typicode.com/albums");
//             const resultJson = await result.json();
//             const sliceResult = resultJson.slice(0, 10);
//             setEmbed(sliceResult);
//             setIsLoading(false);
//         };
//         fetchData();
//     }, []);
//
//     return (
//         <div>
//             {isLoading && (
//                 <div className="loading">
//                     <p>...loading</p>
//                 </div>
//             )}
//             <div className="albums-container">
//                 {embed.map(album => (
//                     <Link
//                         to={`/${album.id}/photos`}
//                         key={album.id}
//                         style={{ textDecoration: "none", color: "black" }}
//                     >
//                         <Card className="albums-card">
//                             <img
//                                 src={"https://via.placeholder.com/168x118.png"}
//                                 alt={`data thumbnail`}
//                             />
//                             <h5>Composer {album.id}</h5>
//                             <h6>Composer {album.title}</h6>
//                         </Card>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default Forum;
