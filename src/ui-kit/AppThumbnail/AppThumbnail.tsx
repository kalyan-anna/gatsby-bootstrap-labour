import React from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

type AppThumbnailProps = {
  title: string;
  text: string;
};

export const AppThumbnail: React.FC<AppThumbnailProps> = ({ title, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
      <Card
        style={{ cursor: 'pointer', height: '150px' }}
        className="text-center shadow rounded bg-dark text-white"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-muted">{text}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};
