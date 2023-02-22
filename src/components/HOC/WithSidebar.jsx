import React from 'react';

const WithSidebar = ({ component: Component, ...rest }) => {
  const isLoginScreen = window.location.pathname === '/login';

  if (isLoginScreen) {
    // Return only the child component without the sidebar
    return <Component {...rest} />;
  }

  // Return the sidebar and the child component
  return (
    <div>
      <h1>Sidebar</h1>
      <Component {...rest} />
    </div>
  );
};

export default WithSidebar;