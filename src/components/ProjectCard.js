import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      <img src={imgUrl} alt={title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="proj-txtx projUrl">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
</a>
       
      </div>
    </Col>
  );
};
