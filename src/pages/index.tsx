import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import styles from '../styles/Home.module.css';

export default withPageAuthRequired(() => (
  <div className={styles.container}>
    <a href="/profile">Profile</a>
    <a href="/api/auth/logout">Logout</a>
  </div>
));
