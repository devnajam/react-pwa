import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <nav></nav>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
