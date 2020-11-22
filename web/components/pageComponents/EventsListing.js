import React, { useContext } from 'react';
import styled from 'styled-components';
import dateFormatter from '../../js/dateFormatter';
import Wrapper from '../../tools/Wrapper';
import { breakpoints, colors } from '../../styles/settings';
import { AppContext } from '../../pages/_app';

const NewEventsArray = (events) => {
  const updatedEvents = [];

  events.forEach((event) => {
    if (new Date(event.date) >= new Date()) {
      updatedEvents.push({
        event: {
          _id: event._id,
          title: event.title,
          cityStateZip: event.cityStateZip,
          street: event.street,
          description: event.description,
          time: event.time,
          date: event.date,
          dateTime: new Date(event.date),
          link: event.link,
        },
      });
    }

    if (event.reoccuringDates) {
      event.reoccuringDates.forEach((reDate, index) => {
        if (new Date(dateFormatter(reDate, 1)) >= new Date()) {
          updatedEvents.push({
            event: {
              _id: event._id + index,
              title: event.title,
              cityStateZip: event.cityStateZip,
              street: event.street,
              description: event.description,
              time: event.time,
              date: dateFormatter(reDate, 1),
              dateTime: new Date(dateFormatter(reDate, 1)),
              link: event.link,
            },
          });
        }
      });
    }
  });

  const sortedEvents = updatedEvents.sort(
    (a, b) => a.event.dateTime - b.event.dateTime
  );

  return updatedEvents.length !== 0 ? sortedEvents : events;
};

const Event = ({
  content: { title, cityStateZip, street, description, time, date, link },
}) => {
  const parseDate = (dateValue) => dateValue.split(' ');
  return (
    <SEvent>
      <div>
        <div className="date">
          {parseDate(date).map((dateItem, index) => (
            <span key={dateItem + index}>{dateItem.replace(',', '')}</span>
          ))}
        </div>
        <h4>
          {title}
          <br />
          <span>{time}</span>
        </h4>
        <p>
          <strong>Where: </strong>
          <a
            target="_blank"
            aria-label={`${street} ${cityStateZip}`}
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/dir//${street} ${cityStateZip}`}
          >
            {`${street} ${cityStateZip}`}
          </a>
        </p>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          aria-label="Learn More"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </SEvent>
  );
};

const EventListing = () => {
  const { events } = useContext(AppContext);

  return (
    <SEventListing>
      <Wrapper>
        <div className="listing">
          {NewEventsArray(events).map(({ event }, index) => (
            <Event key={event._id + index} content={event} />
          ))}
        </div>
      </Wrapper>
    </SEventListing>
  );
};

export default EventListing;

export const SEventListing = styled.div`
  margin-bottom: -30px;

  .listing {
    @media screen and (min-width: ${breakpoints.ipadPort}px) {
      display: flex;
      flex-wrap: wrap;
      margin-right: -30px;
    }

    > div {
      padding: 40px 0;

      @media screen and (min-width: ${breakpoints.ipadPort}px) {
        width: 33.333%;
        padding: 40px 30px 30px 0;
      }

      @media screen and (max-width: ${breakpoints.ipadPort - 1}px) {
        max-width: 400px;
        margin: 0 auto;
      }
    }
  }
`;

export const SEvent = styled.div`
  > div {
    background-color: ${colors.black};
    padding: 30px;
    position: relative;
    color: ${colors.white};

    .date {
      background-color: ${colors.black};
      border: 1px solid ${colors.white};
      color: ${colors.white};
      text-align: center;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -40px;
      height: 80px;
      width: 80px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        line-height: 1;
        display: block;
      }
    }

    a {
      color: ${colors.white};
    }
  }
`;
