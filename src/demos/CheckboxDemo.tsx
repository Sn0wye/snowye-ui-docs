/** @jsxImportSource react */
import { Checkbox, Surface, Text } from '@snowye-ui/react';

export const CheckboxDemo = () => {
  return (
    <Surface
      as='label'
      css={{
        display: 'flex',
        gap: '$2'
      }}
    >
      <Checkbox />
      <Text size='sm'>I accept the terms.</Text>
    </Surface>
  );
};
