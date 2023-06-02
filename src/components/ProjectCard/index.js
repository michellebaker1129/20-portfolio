import { Button, Card } from 'react-bootstrap';

function ProjectCard({ project }) {
  const { title, description, image, website, github, tech} = project;

  return (
    <Card className='project-card' style={{ maxWidth: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={image || "https://placehold.co/600x400" } style={{marginBottom: '20px'}} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text style={{fontSize: '0.7rem'}}>
          {tech.join(', ')}
        </Card.Text>
        {/* Render a button for github link */}
        <Button href={github} variant="primary" style={{
          marginRight: '10px'
        }}>GitHub</Button>
        {/* Render a button for website link */}
        <Button href={website} variant="primary">Website</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;