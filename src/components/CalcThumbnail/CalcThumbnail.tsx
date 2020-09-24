import React, { useCallback, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

type CalcThumbnailProps = {
  title: string;
  text: string;
};

const CalcThumbnail: React.FC<CalcThumbnailProps> = ({ title, text }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
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

export default CalcThumbnail;
