import React from 'react'
import { Button } from 'react-bootstrap'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <Button href="https://github.com/michellebaker1129" variant='secondary' style={{ fontSize: '2rem', marginRight: '20px'}}>
        <FaGithub /> Github
      </Button>
      <Button href="https://www.linkedin.com/in/michelle-baker-6a0a3a1b1/" variant='secondary' style={{ fontSize: '2rem', marginRight: '20px'}}>
        <FaLinkedin /> LinkedIn
      </Button>
      <Button href="https://medium.com/@tiabakerbrown" variant='secondary' style={{ fontSize: '2rem'}}>
        <FaMedium /> Medium
      </Button>
    </div>
  )
}

export default Footer

 