import React from 'react';

const FirebaseContext = React.createContext(null);

// FirebaseContext.Provider component is used to provide a Firebase instance once at the top-level of your React component
// the FirebaseContext.Consumer component is used to retrieve the Firebase instance if it is needed in the React component. 

export default FirebaseContext;