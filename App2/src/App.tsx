import React, { Suspense } from 'react';
const RemoteButton = React.lazy(() => import('remote_app/Button'));  // Lazy load the remote component

function App() {

  return (
    <>
        <Suspense fallback={<div>Loading...</div>}>
          <RemoteButton />
        </Suspense>
    </>
  )
}

export default App
