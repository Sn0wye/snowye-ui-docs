import { IconButton, Surface } from '@snowye-ui/react';
import { ArrowCounterClockwise, Plus, Trash } from 'phosphor-react';

export const IconButtonDemo = () => {
  return (
    <Surface
      css={{
        display: 'flex',
        gap: '$4'
      }}
    >
      <IconButton>
        <Plus />
      </IconButton>
      <IconButton>
        <Trash />
      </IconButton>
      <IconButton>
        <ArrowCounterClockwise />
      </IconButton>
    </Surface>
  );
};
