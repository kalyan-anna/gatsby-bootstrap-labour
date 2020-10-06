import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldError } from 'react-hook-form';

interface RadioProps {
  label: string;
  name: string;
  error?: FieldError;
  options: {
    label: string;
    value: string;
  }[];
}

export const Radio = React.forwardRef<any, RadioProps>(
  ({ label, name, error, options }, ref) => {
    return (
      <Form.Group controlId={name}>
        <Form.Label>{label}</Form.Label>
        {options.map((item, index) => (
          <Form.Check
            type="radio"
            label={item.label}
            name={name}
            id={name + '' + index}
            ref={ref}
            key={item.value}
            isInvalid={!!error}
            value={item.value}
          />
        ))}
        <Form.Control.Feedback type="invalid">
          {error?.message}
        </Form.Control.Feedback>
      </Form.Group>
    );
  }
);
