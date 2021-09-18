import { useContext } from 'react';
import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';
import { TestContext } from '../App';


export function NewRoom() {
  const { value, setValue } = useContext(TestContext);
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration for Questions and Answers" />
        <strong>Create Q&amp;A rooms live</strong>
        <p>Answer questions from your audience in real time</p>
      </aside>
      <main>
        <h1>{value}</h1>
        <div className="main-content">
          <img src={logoImg} alt="AskMe logo" />
          <h2>Create a new room</h2>
          <form>
            <input
              type="text"
              placeholder="Room's name"
            />
            <Button type="submit">
              Create room
            </Button>
          </form>
          <p>
            Do you want to enter in an existing room?
            <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}