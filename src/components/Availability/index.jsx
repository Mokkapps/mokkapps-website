import React from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';

const availability = new Date('2021-10-01');

const Availability = () => {
  const availabilityDate = new Date(availability);
  const isValidAvailabilityDate = !isNaN(availabilityDate.getTime());
  const currentDate = new Date();
  const isAvailable = availabilityDate <= currentDate;

  return !isValidAvailabilityDate ? null : (
    <div className="rounded-lg px-2 py-1 flex items-center justify-center my-4">
      {isAvailable ? (
        <div className="rounded-full h-4 w-4 available mr-2" />
      ) : (
        <div className="rounded-full h-4 w-4 not-available mr-2" />
      )}
      <FormattedMessage
        id={isAvailable ? 'available' : 'notAvailable'}
        defaultMessage=""
        values={{
          date: (
            <FormattedDate
              value={availabilityDate}
              year="numeric"
              month="long"
              day="2-digit"
            />
          ),
        }}
      />
    </div>
  );
};

export default Availability;
