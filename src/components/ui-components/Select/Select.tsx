import React from 'react';
import { Form } from 'react-bootstrap';
import { FieldError } from 'react-hook-form';

interface SelectProps {
  name: string;
  label: string;
  error?: FieldError;
  options: {
    name: string;
    value: string;
  }[];
}

export const Select = React.forwardRef<any, SelectProps>(
  ({ name, label, error, options }, ref) => {
    return (
      <Form.Group controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" ref={ref} name={name} isInvalid={!!error}>
          <option value="">Select occupation type</option>
          {options.map((item: any) => (
            <option value={item.value} key={item.value}>
              {item.name}
            </option>
          ))}
        </Form.Control>
        {error && (
          <Form.Control.Feedback type="invalid">
            {error.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    );
  }
);
