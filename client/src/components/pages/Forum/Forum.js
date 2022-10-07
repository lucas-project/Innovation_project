import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";


const mystyle = {
    marginLeft:"10%",
    marginTop:"15%",
    border:"none",
    overflow:"hidden"
};
const rowstyle = {
    width:"90%",
    height:"auto"
}

const Forum = () => {
    return (

        <div style={{ position: "absolute", marginTop: "70px", fontSize: "20px" }}>
            <Container>
                <Row style={rowstyle}>
                    <Col>
                        <div>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&width=500&show_text=true&height=274&appId"
                        width="500" height="300" style={mystyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <div>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fvicconcertorchestra%2Fposts%2Fpfbid0setWnySKyQHgdA1KpRLrgUCuXqQfVb95VuNr3D1QMEWUq4NJGjLTqWSDApYNxsbfl&show_text=true&width=500"
                        width="500" height="532" style={mystyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
                    <Col>
                        <div>
                        <iframe
                        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAmlamusic%2Fposts%2Fpfbid02DTfo5brXefLqGnDo3bSXC2mA4c2EhoGWQB9KrDWeSGEG2XX6e62ikipvRfrPNWX3l&show_text=true&width=500"
                        width="500" height="557" style={mystyle} scrolling="no" frameBorder="0"
                        allowFullScreen="true"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe></div>
                    </Col>
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
                </Row>
                <Row style={rowstyle}>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>

    );
};

export default Forum;
