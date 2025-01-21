import React from 'react';

interface ChannelsListProps {
  channels: string[];
}

const ChannelsList = ({ channels }: ChannelsListProps) => {
  if (!Array.isArray(channels) || channels.length === 0) return null;

  return (
    <div>
      <h3 className="font-bold mb-3">Channels</h3>
      <ul className="space-y-2 text-gray-600">
        {channels.map((channel, index) => (
          <li key={index}>{channel}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChannelsList;