"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import clsx from 'clsx';

const ExperienceDescriptionExpand = ({ description }: { description: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className={clsx(
          'prose gap-4 prose-sm text-muted-foreground box transition-all duration-500 overflow-hidden',
          {
            'line-clamp-2 max-h-[4.5rem]': !isOpen,
            'max-h-[1000px]': isOpen,
          }
        )}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button
        variant="ghost"
        className="rounded-full mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Collapse' : 'Continue reading...'}
      </Button>
    </div>
  );
};

export default ExperienceDescriptionExpand; 
