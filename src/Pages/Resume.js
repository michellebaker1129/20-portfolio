import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Resume=() => {
    return (
        <section>
            <h2>
                Resume
            </h2>

            <Button href="https://drive.google.com/uc?id=1kDxFa7QP5rendiMON7ztJL5LXxXeUtCE&export=download">Download Resume</Button>
            <Container>
                <iframe style={{ width: "100%", height: '80vh' }} src="https://docs.google.com/document/d/e/2PACX-1vQlHBXHdDD70mpMRCNKj3cRNTBUAfg0pqCMVAcbsz9_pOUHbeVeQzvekwHsHXIl7w/pub?embedded=true"></iframe>
            </Container>
        </section>
    )
}
export default Resume