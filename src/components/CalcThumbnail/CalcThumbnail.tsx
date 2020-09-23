import React, { useCallback, useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

type CalcThumbnailProps = {
  title: string;
  text: string;
};

const CalcThumbnail: React.FC<CalcThumbnailProps> = ({ title, text }) => {
  return (
    <Card
      style={{ cursor: 'pointer', height: '150px' }}
      className="text-center shadow rounded bg-dark text-white"
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CalcThumbnail;
