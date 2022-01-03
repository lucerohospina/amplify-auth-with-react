import Link from 'next/link';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui/dist/style.css';

function SignIn() {
  return(
    <div>
      <h1>Hello!</h1>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default withAuthenticator(SignIn)