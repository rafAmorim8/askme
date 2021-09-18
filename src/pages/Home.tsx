import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration for Questions and Answers" />
        <strong>Create Q&amp;A rooms live</strong>
        <p>Answer questions from your audience in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="AskMe logo" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Google logo" />
            Create a room with Google
          </button>
          <div className="separator">or enter in a room</div>
          <form>
            <input
              type="text"
              placeholder="Type room code"
            />
            <Button type="submit">
              Enter in the room
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}