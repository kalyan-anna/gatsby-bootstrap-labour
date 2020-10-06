import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { FieldError, Controller, Control } from 'react-hook-form';

interface YesNoRadioProps {
  label: string;
  name: string;
  value: boolean;
  onChange(newValue: boolean): void;
  error?: FieldError;
  control: Control<any>;
}

export const YesNoRadio = React.forwardRef<any, YesNoRadioProps>(
  ({ label, name, value, onChange, error, control }) => {
    const [localValue, setLocalValue] = useState(value);

    useEffect(() => {
      setLocalValue(value);
    }, [value]);

    return (
      <Form.Group controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Controller
          name={name}
          render={(props) => (
            <Form.Check
              type="radio"
              label="No"
              name={name}
              id={name + '1'}
              value="no"
              checked={localValue === false}
              onChange={(event: any) => {
                setLocalValue(false);
                onChange(false);
              }}
              isInvalid={!!error}
            />
          )}
          control={control}
        />
        <Controller
          name={name}
          render={(props) => (
            <Form.Check
              type="radio"
              label="Yes"
              name={name}
              id={name + '2'}
              value="yes"
              checked={localValue === true}
              onChange={(event: any) => {
                setLocalValue(true);
                onChange(true);
              }}
              isInvalid={!!error}
            />
          )}
          control={control}
        />

        {error && (
          <Form.Control.Feedback type="invalid">
            {error.message}
          </Form.Control.Feedback>
        )}
      </Form.Group>
    );
  }
);
