import * as React from 'react';
import {
  DateDisplay,
  Header,
  Title,
  ToggleDarkTheme,
} from '../Styled components/header';

function Navbar() {
  const displaydate = new Date();

  return (
    <Header>
      <img
        src="https://pbs.twimg.com/profile_images/1219929831225335808/GCSPNKz-_400x400.jpg"
        alt="logoimg"
      />

      <Title>📝To-Do list Application</Title>
      <DateDisplay>📅 Date:{displaydate.toLocaleDateString()}</DateDisplay>
      <ToggleDarkTheme> 👆dark theme</ToggleDarkTheme>
    </Header>
  );
}

export default React.memo(Navbar);
