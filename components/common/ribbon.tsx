import React from 'react';

interface IProps {
  start?: React.ReactNode;
  center?: React.ReactNode;
  end?: React.ReactNode;
}

const Ribbon = ({ start, center, end }: IProps) => {
  return (
    <div className="w-full bg-primary-500">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>{start}</div>
          <div>{center}</div>
          <div>{end}</div>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
