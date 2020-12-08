import { useSession } from 'next-auth/client';

import React, { useState, useEffect } from 'react';

const secret = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/secret');
      const json = await res.json();

      if ((json, content)) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);
  if (typeof window !== undefined && loading) return null;
  if (!session) {
    return 'Login Please';
  } else {
    return (
      <div>
        {session && <img src={session.user.image} alt="" />}
        {session && <h1>{session.user.name}</h1>}
        {/* Data Dump */}
        <code>
          <pre
            style={{
              fontFamily: 'monospace',
              display: 'block',
              padding: '50px',
              color: '#88ffbf',
              backgroundColor: 'black',
              textAlign: 'left',
              whiteSpace: 'pre-wrap',
            }}
          >
            {JSON.stringify(session, null, '    ')}
          </pre>
        </code>
        {/* Data Dump End */}
      </div>
    );
  }
};

export default secret;
